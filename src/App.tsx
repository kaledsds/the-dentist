import { MainLayout } from "@/layouts";
import { ThemeProvider } from "@/providers";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
