import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // ListItem,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/properties", label: "Properties" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-between">
        <div className="logo">
          <Link
            to="/"
            className="text-2xl font-bold text-primary hover:text-primary/80"
          >
            Nomad Rentals
          </Link>
        </div>
        <div className="nav-links">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.to}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.to}
                      className="text-sm font-medium text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center">
          <Link
            to="/login"
          >
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://placehold.co/50" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
