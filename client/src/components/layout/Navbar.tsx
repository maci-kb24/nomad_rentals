import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // ListItem,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between">
      <div className="logo">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80">
          Nomad Rentals
        </Link>
      </div>
      <div className="nav-links">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="[&.active]:text-primary">
              {({ isActive }) => (
                <NavigationMenuLink 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive && "bg-accent/50 text-accent-foreground font-semibold"
                  )}
                >
                  Home
                </NavigationMenuLink>
              )}
            </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <div className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/about"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        About Nomad Rentals
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Learn more about our mission to provide amazing rental experiences for digital nomads.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                {/* <ListItem to="/about" title="Our Story">
                  How we started and where we're going.
                </ListItem>
                <ListItem to="/about" title="Our Team">
                  Meet the people behind Nomad Rentals.
                </ListItem>
                <ListItem to="/about" title="Contact Us">
                  Get in touch with our support team.
                </ListItem> */}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center">
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
