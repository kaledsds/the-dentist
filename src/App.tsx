import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./modules/common/contexts";
import { MainLayout } from "./modules/common/layouts";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
