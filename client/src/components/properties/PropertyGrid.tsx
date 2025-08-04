import { properties } from '@/data/properties'
import PropertyCard from '@/components/properties/PropertyCard'
const PropertyGrid = () => {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertyGrid