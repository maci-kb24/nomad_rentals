import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Welcome to our company! We are passionate about creating amazing web applications.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            To build innovative solutions that make people's lives easier and more productive.
          </p>
        </div>
      </div>
    </div>
  )
}