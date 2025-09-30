import { createFileRoute } from '@tanstack/react-router'
import LoginForm from '@/components/auth/LoginForm'
import RegisterForm from '@/components/auth/RegisterForm'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Route = createFileRoute('/auth')({
  component: Auth,
})

function Auth() {
  return <div className='flex justify-center items-center bg-gray-50 min-h-screen'>
    <Tabs defaultValue="login" className="w-[400px] bg-white p-6 rounded-lg shadow">
      <TabsList className="mb-4">
        <TabsTrigger value="login" className="w-1/2">Login</TabsTrigger>
        <TabsTrigger value="register" className="w-1/2">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  </div>
}
