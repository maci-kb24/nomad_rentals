import { createLazyFileRoute } from "@tanstack/react-router";
import ListingGrid from "@/components/listings/ListingGrid";

export const Route = createLazyFileRoute("/listings/")({
  component: Listings,
});

function Listings() {

  return (
    <div>
      <ListingGrid />
    </div>
  );
}
