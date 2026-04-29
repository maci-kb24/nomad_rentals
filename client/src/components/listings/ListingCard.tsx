import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

interface Listing {
  id: string;
  title: string;
  description: string;
  location: string;
  price: string;
}

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Card className="max-w-sm w-full py-0 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to="/listings/$listingId" params={{ listingId: listing.id }} className="block">
      <CardHeader className="px-0">
      <div className="relative">
        {/* <img
          src={listing.image || "/placeholder.svg"}
          alt={listing.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        /> */}
        </div>
        {/* <CardTitle>Card Title</CardTitle> */}
        {/* <CardDescription>Card Description</CardDescription> */}
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        <div className="p-4">
        {/* <div className="flex items-center mb-2">
          <span className="mr-2">{property.flag}</span>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {property.location}
          </span>
        </div> */}

        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
          {listing.title}
        </h3>

        <div className="flex items-center justify-between">
          {/* <div className="flex items-center space-x-4 text-gray-500">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.beds}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.people}</span>
            </div>
            <Wifi className="w-4 h-4" />
          </div> */}

          <div className="text-right">
            <div className="text-sm text-gray-500">from</div>
            <div className="font-bold text-gray-900">
              {/* {listing.currency} */}
              {listing.price}{" "}
              <span className="text-sm font-normal">/ month</span>
            </div>
          </div>
        </div>
      </div>
      </CardContent>
      {/* // <CardFooter>
        
      // </CardFooter> */}
      </Link>
    </Card>
  );
};

export default ListingCard;
