import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Welcome to My App!</h1>
      <div className="bg-blue-50 p-6 rounded-lg">
        <p className="text-lg mb-4">
          This is your homepage. Start building your amazing application here!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Feature 1</h3>
            <p>Description of your first feature.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Feature 2</h3>
            <p>Description of your second feature.</p>
          </div>
        </div>
      </div>
    </div>
  )
}