// import { Bed, Users, Wifi } from "lucide-react";

import {
  Card,
  // CardAction,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  // CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

interface Property {
  id: string;
  image: string;
  title: string;
  price: string;
  currency: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="max-w-sm w-full py-0 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to="/properties/$propertyId" params={{ propertyId: property.id }} className="block">
      <CardHeader className="px-0">
      <div className="relative">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
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
          {property.title}
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
              {property.currency}
              {property.price}{" "}
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

export default PropertyCard;




//     <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//       <div className="relative">
//         {/* <Image
//           src={property.image || "/placeholder.svg"}
//           alt={property.title}
//           width={400}
//           height={300}
//           className="w-full h-48 object-cover" */}
//         />
//         <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
//           {property.availability}
//         </div>
//       </div>

//       <div className="p-4">
//         <div className="flex items-center mb-2">
//           <span className="mr-2">{property.flag}</span>
//           <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
//             {property.location}
//           </span>
//         </div>

//         <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
//           {property.title}
//         </h3>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4 text-gray-500">
//             <div className="flex items-center">
//               <Bed className="w-4 h-4 mr-1" />
//               <span className="text-sm">{property.beds}</span>
//             </div>
//             <div className="flex items-center">
//               <Users className="w-4 h-4 mr-1" />
//               <span className="text-sm">{property.people}</span>
//             </div>
//             <Wifi className="w-4 h-4" />
//           </div>

//           <div className="text-right">
//             <div className="text-sm text-gray-500">from</div>
//             <div className="font-bold text-gray-900">
//               {property.currency}
//               {property.price}{" "}
//               <span className="text-sm font-normal">/ month</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
