import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  
  beforeLoad: ({ context, location }) => {
    console.log('=' .repeat(50))
    console.log('🔍 DASHBOARD beforeLoad EXECUTING')
    console.log('Context:', context)
    console.log('Auth object:', context.auth)
    console.log('User:', context.auth?.user)
    console.log('Loading:', context.auth?.loading)
    console.log('=' .repeat(50))

      if (!context.auth) {
        console.error('⚠️ No auth context available')
        throw redirect({
          to: "/login",
        });
      }

    const { user, loading } = context.auth;

    if (loading) {
      console.log('⏳ Still loading auth...')
      return;
    }

    if (!user) {
      console.log('❌ No user - redirecting to login')
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href, // Remember where they wanted to go
        },
      });
    }
    console.log('✅ User authenticated:', user.email)
  },
  component: DashboardComponent,
});

function DashboardComponent() {
  const { auth } = Route.useRouteContext();
  const { user } = auth;

  console.log('📊 Dashboard rendering with user:', user)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Welcome back!</h2>
          <p className="text-gray-600">Email: {user?.email}</p>
          <p className="text-gray-600">User ID: {user?.id}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Properties</h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-sm text-gray-600 mt-2">Listed properties</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Bookings</h3>
            <p className="text-3xl font-bold text-green-600">0</p>
            <p className="text-sm text-gray-600 mt-2">Active bookings</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Reviews</h3>
            <p className="text-3xl font-bold text-purple-600">0</p>
            <p className="text-sm text-gray-600 mt-2">Total reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
