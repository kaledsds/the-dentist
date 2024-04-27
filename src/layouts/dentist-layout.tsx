import { Header } from "@/components/blocs";
import { MainLayout } from "./main-layout";

interface DentistLayoutProps {
  children: React.ReactNode;
}

export const DentistLayout: React.FC<DentistLayoutProps> = ({ children }) => {
  return (
    <main>
      <MainLayout>
        <Header />
        {children}
      </MainLayout>
    </main>
  );
};
