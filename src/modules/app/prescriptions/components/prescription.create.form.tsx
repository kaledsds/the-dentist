import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreatePrescriptionSchemaType,
  createPrescriptionSchema,
} from "../prescription.validation";
import { useCreatePrescription } from "../prescription.hooks";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";

export const PrescriptionCreateForm = () => {
  /**
   * Api Mutations
   */
  const { createPrescription, isPendingCreatePrescription } =
    useCreatePrescription();
  /**
   * Form hook
   */
  const form = useForm<CreatePrescriptionSchemaType>({
    resolver: zodResolver(createPrescriptionSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => createPrescription(data))}
        className="space-y-4"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Entrer le nom..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Dose */}
        <FormField
          control={form.control}
          name="dose"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dosage</FormLabel>
              <FormControl>
                <Input placeholder="Entrer le dosage..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Dose */}
        <FormField
          control={form.control}
          name="count_per_day"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantité par jour</FormLabel>
              <FormControl>
                <Input placeholder="Entrer la quantité..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Dose */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Entrer la description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Form action */}
        <div className="flex justify-end items-center gap-2">
          <Button size="sm" variant="outline" type="button">
            Annuler
          </Button>
          <Button
            size="sm"
            variant={isPendingCreatePrescription ? "outline" : "default"}
            type="submit"
            className="items-center gap-2"
            disabled={isPendingCreatePrescription}
          >
            {isPendingCreatePrescription ? (
              <span>Chargement</span>
            ) : (
              <span>Procéder</span>
            )}
            {isPendingCreatePrescription && <Spinner />}
          </Button>
        </div>
      </form>
    </Form>
  );
};
