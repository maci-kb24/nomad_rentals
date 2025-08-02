import Navbar from '@/components/layout/Navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="app">
        <Navbar />
        <hr />
        <main className="container mx-auto p-4">
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </div>
    </>
  ),
})