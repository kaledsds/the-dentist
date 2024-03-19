// import { NavItems } from "./components";

import { Navbar } from "./components";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 w-full bg-gradient-to-l from-transparent via-primary to-transparent">
      {/* <NavItems /> */}
      <Navbar />
    </header>
  );
};
