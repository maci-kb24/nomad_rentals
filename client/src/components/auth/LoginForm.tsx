import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'  // Changed from supabase import
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { signIn = () => ({ error: new Error('Auth not initialized') }) } = useAuth()  // Get signIn function from context

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    const { error }: { error: unknown } = await signIn(email, password)  // Use context function

    if (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : 'An error occurred'}`)
    } else {
      setMessage('Success! Logging you in...')
      // The onAuthStateChange will automatically update user state
    }
    
    setLoading(false)
  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your email and password to sign in to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
          
          {message && (
            <div className={`text-sm p-3 rounded ${message.includes('Error') ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'}`}>
              {message}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

export default LoginForm