import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { AuthProvider } from '../AuthContext'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'


// Mock Supabase
vi.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
      signUp: vi.fn(),
      signInWithPassword: vi.fn(),
      signOut: vi.fn(),
    },
  },
}))

describe('AuthContext', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should provide auth context', async () => {
    // Mock no user initially
    vi.mocked(supabase.auth.getSession).mockResolvedValue({
      data: { session: null },
      error: null,
    })

    vi.mocked(supabase.auth.onAuthStateChange).mockReturnValue({
      data: { subscription: { unsubscribe: vi.fn() } },
    } as any)

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    })

    // Initially loading
    expect(result.current.loading).toBe(true)

    // Wait for loading to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.user).toBeNull()
    expect(result.current.signIn).toBeDefined()
    expect(result.current.signOut).toBeDefined()
    expect(result.current.signUp).toBeDefined()
  })

  it('should set user when session exists', async () => {
    const mockUser = {
      id: '123',
      email: 'test@example.com',
      aud: 'authenticated',
      created_at: new Date().toISOString(),
    }

    vi.mocked(supabase.auth.getSession).mockResolvedValue({
      data: {
        session: {
          user: mockUser,
          access_token: 'token',
          refresh_token: 'refresh',
        },
      },
      error: null,
    } as any)

    vi.mocked(supabase.auth.onAuthStateChange).mockReturnValue({
      data: { subscription: { unsubscribe: vi.fn() } },
    } as any)

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    })

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.user).toEqual(mockUser)
  })

  it('should handle sign in', async () => {
    vi.mocked(supabase.auth.getSession).mockResolvedValue({
      data: { session: null },
      error: null,
    })

    vi.mocked(supabase.auth.onAuthStateChange).mockReturnValue({
      data: { subscription: { unsubscribe: vi.fn() } },
    } as any)

    vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
      data: { user: null, session: null },
      error: null,
    } as any)

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    })

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    const { error } = await (result.current.signIn as (email: string, password: string) => Promise<{ error: null | Error }>)('test@example.com', 'password')

    expect(error).toBeNull()
    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
    })
  })

  it('should handle sign out', async () => {
    vi.mocked(supabase.auth.getSession).mockResolvedValue({
      data: { session: null },
      error: null,
    })

    vi.mocked(supabase.auth.onAuthStateChange).mockReturnValue({
      data: { subscription: { unsubscribe: vi.fn() } },
    } as any)

    vi.mocked(supabase.auth.signOut).mockResolvedValue({
      error: null,
    })

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    })

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    await (result.current.signOut as () => Promise<void>)()

    expect(supabase.auth.signOut).toHaveBeenCalled()
  })
})