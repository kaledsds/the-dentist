import { BaseResourceModel } from "@/modules/common/common.types";

/**
 * Prescription model
 */
export interface Prescription extends BaseResourceModel {
  name: string;
  dose: string;
  count_per_day: string;
  description: string;
}
