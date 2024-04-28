import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getPrescriptions,
  createPrescription,
  getPrescriptionById,
  updatePrescription,
  deletePrescription,
} from "./priscription.service";
import { ApiKeysEnum } from "@/lib/services/api/api.enums";
import { queryClient } from "@/lib/services/api/query.client";
import {
  CreatePrescriptionSchemaType,
  UpdatePrescriptionSchemaType,
} from "./prescription.validation";

/**
 * Get all resources
 */
export const useGetPrescriptions = () => {
  const query = useQuery({
    queryKey: [ApiKeysEnum.PERESCRIPTION_LIST],
    queryFn: () => getPrescriptions(),
  });
  return {
    prescriptions: query.data?.data || [],
    message: query.data?.message || "",
    ...query,
  };
};
/**
 * get single resources
 */
export const useGetPrescriptionById = ({ id }: { id: string }) => {
  const query = useQuery({
    queryKey: [ApiKeysEnum.PERESCRIPTION_DETAIL, id],
    queryFn: () => getPrescriptionById(id),
  });
  return {
    prescriptions: query.data?.data || [],
    message: query.data?.message || "",
    ...query,
  };
};
/**
 * Create resource
 */
export const useCreatePrescription = () => {
  const mutation = useMutation({
    mutationFn: (data: CreatePrescriptionSchemaType) =>
      createPrescription(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ApiKeysEnum.PERESCRIPTION_LIST],
      });
    },
  });
  return {
    createPrescription: mutation.mutate,
    isPendingCreatePrescription: mutation.isPending,
    ...mutation,
  };
};
/**
 * Update resource
 */
export const useUpdatePrescription = ({ id }: { id: string }) => {
  const mutation = useMutation({
    mutationFn: (data: UpdatePrescriptionSchemaType) =>
      updatePrescription(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ApiKeysEnum.PERESCRIPTION_DETAIL, id],
      });
    },
  });
  return {
    ...mutation,
  };
};
/**
 * Delete resource
 */
export const useDeletePrescription = ({ id }: { id: string }) => {
  const mutation = useMutation({
    mutationFn: () => deletePrescription(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ApiKeysEnum.PERESCRIPTION_DETAIL, id],
      });
    },
  });
  return {
    ...mutation,
  };
};
