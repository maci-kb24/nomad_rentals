import { createFileRoute } from "@tanstack/react-router";
import { propertiesdetails } from "@/data/properties";

const getPropertyById = (id: string) => {
  return propertiesdetails.find((property) => property.id === id);
};

export const Route = createFileRoute("/properties/$propertyId")({
  loader: async ({ params }) => {
    if (!params.propertyId) {
      throw new Error("Property ID is required");
    }
    const property = getPropertyById(params.propertyId);
    return property;
  },
  component: PropertyDetails
});

function PropertyDetails() {
  const property = Route.useLoaderData();

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Property Not Found
          </h1>
          <p className="mt-2 text-gray-600">
            The property you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Properties
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {property.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {property.images.slice(1, 4).map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-lg overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${property.title} ${index + 2}`}
                        className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h1>
                <p className="text-lg text-gray-600 mb-1">
                  {property.location}
                </p>
                <div className="text-3xl font-bold text-blue-600">
                  ${property.price}
                  <span className="text-lg font-normal">/month</span>
                </div>
                <p className="text-green-600 font-medium mt-1">
                  {property.availability}
                </p>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {property.bedrooms}
                  </div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {property.bathrooms}
                  </div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {property.area}
                  </div>
                  <div className="text-sm text-gray-600">sq ft</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  About This Property
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Landlord</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={property.landlord.avatar}
                    alt={property.landlord.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">
                      {property.landlord.name}
                    </p>
                    <p className="text-yellow-600">
                      ⭐ {property.landlord.rating} (
                      {property.landlord.totalReviews} reviews)
                    </p>
                    {/* <p className="text-sm text-gray-600">{property.landlord.joinedDate}</p> */}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
