import { Header } from "@/components/blocs";
import { MainLayout } from "./main-layout";

interface SecretaryLayoutProps {
  children: React.ReactNode;
}

export const SecretaryLayout: React.FC<SecretaryLayoutProps> = ({
  children,
}) => {
  return (
    <main>
      <MainLayout>
        <Header />
        {children}
      </MainLayout>
    </main>
  );
};
