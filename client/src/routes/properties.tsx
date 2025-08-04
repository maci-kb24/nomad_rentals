import { createFileRoute } from '@tanstack/react-router'
import PropertyGrid from '@/components/properties/PropertyGrid'
export const Route = createFileRoute('/properties')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>Properties Listings</h1>
    <PropertyGrid />
  </div>
}


