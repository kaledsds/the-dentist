import { Button } from "@/components/ui/button";
import { useGetPrescriptions } from "../prescription.hooks";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";
import { FormSheetLayout } from "@/modules/common/layouts";
import { PrescriptionCreateForm } from "../components";

export const PrescriptionList = () => {
  /**
   * Modal states
   */
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  /**
   * Api Queries
   */
  const { prescriptions, isLoading } = useGetPrescriptions();

  if (isLoading) {
    return <div>Empty</div>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-end">
        <Button
          className="gap-1.5 items-center"
          size="sm"
          onClick={() => setIsOpenCreate(true)}
        >
          <LuPlus className="w-4 h-4" />
          <span>Prescription</span>
        </Button>
      </div>
      <div>
        <h1>Prescription list</h1>
        {prescriptions.map((prescription) => (
          <div key={prescription.id} className="border">
            <div>
              <span>Name: </span>
              <span>{prescription.name}</span>
            </div>
            <div>
              <span>Dose: </span>
              <span>{prescription.dose}</span>
            </div>
          </div>
        ))}
      </div>
      <FormSheetLayout
        title="Create new prescription"
        isOpen={isOpenCreate}
        setIsOpen={setIsOpenCreate}
      >
        <PrescriptionCreateForm />
      </FormSheetLayout>
    </div>
  );
};
