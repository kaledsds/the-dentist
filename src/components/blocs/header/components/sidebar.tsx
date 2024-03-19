import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuAlignJustify } from "react-icons/lu";
import { NavItems } from ".";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden md:flex sm:flex" variant="outline">
          <LuAlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="gap-2">
          <SheetTitle className="font-bold text-xl">Navigation Menu</SheetTitle>
          <hr />
        </SheetHeader>
        <div className="flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="w-full gap-2">
              <div>
                <div className="p-4">
                  <NavigationMenuItem>
                    <NavItems />
                  </NavigationMenuItem>
                </div>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
