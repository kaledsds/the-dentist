import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SearchInput } from "@/components/ui/search-input";
import { LuSearch } from "react-icons/lu";

export const SearchDrawer = () => {
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button className="rounded-lg p-3" variant="outline">
          <LuSearch />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex w-full p-4 gap-4 ">
          <div className="flex w-full">
            <button className="p-2 border-primary border rounded-l-lg border-r-0">
              <LuSearch />
            </button>
            <SearchInput
              className="border-l-0 rounded-none rounded-r-lg border-primary"
              placeholder="Series, movies, Shows, actors"
            />
          </div>
          <DrawerClose asChild>
            <Button className="border-primary" variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
