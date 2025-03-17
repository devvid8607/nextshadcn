import { QueryClient } from "@tanstack/react-query";
import { AxiosErrorWithValidation } from "./clientAxiosHelpers";
import { handleError } from "./errorManipulation";

// Common function to handle mutation success
const handleHookSuccess = (
  queryClient: QueryClient,
  setNotification: (
    type: "error" | "success" | "warning" | "info" | null,
    message: string,
    details: string[] | null
  ) => void,
  message: string,
  queryKeys: string[]
) => {
  queryKeys.forEach((queryKey) =>
    queryClient.invalidateQueries({ queryKey: [queryKey] })
  );
  setNotification("success", message, null);
};

// Common function to handle mutation error
const handleHookError = (
  setNotification: (
    type: "error" | "success" | "warning" | "info" | null,
    message: string,
    details: string[] | null
  ) => void,
  error: AxiosErrorWithValidation,
  message: string
) => {
  const errorDetails = handleError(error);
  setNotification("error", message, errorDetails);
};

export { handleHookSuccess, handleHookError };
