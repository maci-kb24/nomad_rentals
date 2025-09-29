// Add this temporarily to any component
import { useAuth } from '../../hooks/useAuth'

const AuthTest = () => {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return <p>Checking if you're logged in...</p>
  }
  
  return (
    <div>
      {user ? (
        <div>
          <p>✅ Logged in as: {user.email}</p>
          <button onClick={signOut}>Logout</button>
        </div>
      ) : (
        <p>❌ Not logged in</p>
        
      )}
    </div>
  )
}

export default AuthTest