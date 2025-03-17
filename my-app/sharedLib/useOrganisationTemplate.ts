import { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient, {
  apiGet,
  AxiosErrorWithValidation,
} from "./clientAxiosHelpers";
import { useGeneralNotificationStore } from "./useGeneralNotificationStore";
import { handleHookError, handleHookSuccess } from "./hookHandlers";

//#region fetch organisation templates
const fetchOrganisationTemplates = async () => {
  return apiGet<any>("/templateOrganisations");
};

export const useFetchOrganisationTemplates = (enabled: boolean) => {
  return useQuery<any, AxiosError>({
    queryKey: ["getOrganisationTemplates"],
    queryFn: () => fetchOrganisationTemplates(),
    enabled: enabled,
    refetchOnMount: true,
    staleTime: 0,
    gcTime: 0,
    retry: false,
  });
};
//#endregion

//#region create organisation from a templates
const createOrganisationFromTemplate = async (
  createOrganisationFromTemplateData: any
): Promise<any> => {
  return await apiClient.post(
    "/unauthenticatedRoutes/organisation/templateOrganisations",
    createOrganisationFromTemplateData
  );
};

export const useCreateOrganisationFromTemplate = () => {
  const queryClient = useQueryClient();
  const { setNotification } = useGeneralNotificationStore();
  return useMutation<unknown, AxiosErrorWithValidation, any>({
    mutationFn: createOrganisationFromTemplate,
    onSuccess: () => {
      handleHookSuccess(
        queryClient,
        setNotification,
        "We have sent you a reset link to the provided email. Please check to continue.",
        []
      );
    },
    onError: (error) => {
      handleHookError(
        setNotification,
        error,
        "Error sending password reset instructions:"
      );
    },
  });
};
//#endregion
