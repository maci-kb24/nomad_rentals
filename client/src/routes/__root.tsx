import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="app">
        <Header />
        <hr />
        <main className="container mx-auto p-4">
          <Outlet />
        </main>
        <Footer />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
})