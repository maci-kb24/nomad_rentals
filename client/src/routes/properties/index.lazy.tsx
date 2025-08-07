import { createLazyFileRoute } from "@tanstack/react-router";
// import { propertiesdetails } from "@/data/properties";
import PropertyGrid from '@/components/properties/PropertyGrid'

export const Route = createLazyFileRoute("/properties/")({
  component: Properties,
});

function Properties() {
  return (
    <div>
      <PropertyGrid />
      <h1>Properties Listings</h1>
      {/* {propertiesdetails.map((property) => (
        <div key={property.id} className="property-item">
          <Link
            to="/properties/$propertyid"
            params={{ propertyid: property.id }}
            className="property-link"
          >
            <h2>{property.title}</h2>
            <p>
              Price: {property.currency}
              {property.price}
            </p>
            <p>Location: {property.location}</p>
            <p>Availability: {property.availability}</p>
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-auto"
            />
          </Link>
        </div>
      ))} */}
    </div>
  );
}
