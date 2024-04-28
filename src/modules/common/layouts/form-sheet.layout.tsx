import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface FormSheetLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  className?: string;
}

export const FormSheetLayout: React.FC<FormSheetLayoutProps> = ({
  title,
  description = "",
  children,
  isOpen,
  setIsOpen,
  className,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className={cn("py-4", className)}>{children}</div>
      </SheetContent>
    </Sheet>
  );
};
