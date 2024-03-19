// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle, AvatarDropdown, NavItems, SearchDrawer, SideBar } from ".";

/**
 * Renders the Navbar component.
 *
 * @return {JSX.Element} The JSX element representing the Navbar component.
 */
export const Navbar = () => {
  return (
    <>
      <h1 className="text-primary text-3xl font-bold">The Dentist</h1>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="w-full gap-2">
          <NavigationMenuItem>
            <NavItems />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList className="w-full gap-2">
          <SearchDrawer />
          <ModeToggle />
          <AvatarDropdown />
          <SideBar />
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
