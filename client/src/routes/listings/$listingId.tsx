import { createFileRoute, Link } from '@tanstack/react-router'
import { useListing } from '../../hooks/useListing'
// import { Link } from '@tanstack/react-router'
 
export const Route = createFileRoute('/listings/$listingId')({
  component: ListingDetail,
})

function ListingDetail() {
  const { listingId } = Route.useParams();
  const { listing, loading, error } = useListing(listingId);
  

  if (loading) return <p className='p-8'>Loading...</p>;
  if (error) return <p className='p-8'>Error: {error.message}</p>;
  if (!listing) return <p className='p-8'>Listing not found</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <Link
        to="/listings"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6"
      >
        {/* <ArrowLeft className="w-4 h-4" /> Back to listings */}
      </Link>

      {/* <img
        src={listing.image || "/placeholder.svg"}
        alt={listing.title}
        className="w-full h-72 object-cover rounded-xl mb-6"
      /> */}

      <h1 className="text-2xl font-bold text-gray-900 mb-1">{listing.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{listing.location}</p>

      <p className="text-gray-700 leading-relaxed mb-6">{listing.description}</p>

      {/* <div className="text-xl font-bold text-gray-900">
        {listing.currency}{listing.price}
        <span className="text-base font-normal text-gray-500"> / month</span>
      </div> */}
    </div>
  );
}
