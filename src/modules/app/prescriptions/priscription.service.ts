import { _delete, _get, _post, _put } from "@/lib/services/api/api.client";
import { Prescription } from "./presciption.types";
import { AxiosRequestConfig } from "axios";
import {
  CreatePrescriptionSchemaType,
  UpdatePrescriptionSchemaType,
} from "./prescription.validation";

/**
 * Get all resources
 */
export function getPrescriptions(config?: AxiosRequestConfig) {
  return _get<Prescription[]>("/prescriptions", config);
}
/**
 * Get resources by id
 */
export function getPrescriptionById(
  presciptionId: string,
  config?: AxiosRequestConfig
) {
  return _get<Prescription>(`/prescriptions/${presciptionId}`, config);
}
/**
 * Create resource
 */
export function createPrescription(
  data: CreatePrescriptionSchemaType,
  config?: AxiosRequestConfig
) {
  return _post<Prescription>("/prescriptions", data, config);
}
/**
 * Update resource
 */
export function updatePrescription(
  presciptionId: string,
  data: UpdatePrescriptionSchemaType,
  config?: AxiosRequestConfig
) {
  return _put<Prescription>(`/prescriptions/${presciptionId}`, data, config);
}
/**
 * Delete resource
 */
export function deletePrescription(
  presciptionId: string,
  config?: AxiosRequestConfig
) {
  return _delete(`/prescriptions/${presciptionId}`, config);
}
