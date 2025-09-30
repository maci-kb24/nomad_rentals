import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { signUp } = useAuth()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage('Error: Passwords do not match')
      return
    }
    
    // Check password length
    if (password.length < 6) {
      setMessage('Error: Password must be at least 6 characters')
      return
    }
    
    setLoading(true)
    
    if (!signUp) {
      setMessage('Error: Authentication not initialized')
      setLoading(false)
      return
    }

    const { error } = await signUp(email, password)

    if (error && typeof error === 'object' && 'message' in error) {
      setMessage(`Error: ${error.message}`)
    } else {
      setMessage('Success! Check your email for verification link.')
      // Clear form
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }
    
    setLoading(false)
  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>
          Enter your information to create your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="register-email">Email</Label>
            <Input
              id="register-email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="register-password">Password</Label>
            <Input
              id="register-password"
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Creating account...' : 'Create Account'}
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

export default RegisterForm