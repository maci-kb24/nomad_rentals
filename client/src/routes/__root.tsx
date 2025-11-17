import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import type { RouterContext } from '@/lib/router'


export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <div className="app dark:bg-gray-900 dark:text-white">
        <Header />
        <hr />
        <main>
          <Outlet />
        </main>
        <Footer />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
})