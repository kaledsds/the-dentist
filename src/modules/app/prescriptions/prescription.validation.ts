import { z } from "zod";

/**
 * Create prescription request
 */
export const createPrescriptionSchema = z.object({
  name: z
    .string({ required_error: "Nom est requis!" })
    .min(3, "3 caractères minimum"),
  dose: z
    .string({ required_error: "Dosage est requis!" })
    .min(3, "3 caractères minimum"),
  count_per_day: z
    .string({ required_error: "Fois par jour est requis!" })
    .min(1, "1 caractères minimum"),
  description: z.string().optional(),
});
export type CreatePrescriptionSchemaType = z.infer<
  typeof createPrescriptionSchema
>;
/**
 * Update prescription request
 */
export const updatePrescriptionSchema = z.object({
  name: z.string().optional(),
  dose: z.string().optional(),
  count_per_day: z.string().optional(),
  description: z.string().optional(),
});
export type UpdatePrescriptionSchemaType = z.infer<
  typeof updatePrescriptionSchema
>;
