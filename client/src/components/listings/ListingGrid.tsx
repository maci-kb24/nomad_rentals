import { useListings } from '../../hooks/useListings'
import ListingCard  from '@/components/listings/ListingCard'

const ListingGrid = () => {
    const { listings } = useListings();
  return (
    <section className="px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ListingGrid