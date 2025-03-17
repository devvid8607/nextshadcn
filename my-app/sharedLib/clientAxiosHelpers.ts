import { getErrorString } from "./errorManipulation";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

interface ValidationErrorResponse {
  errors: Record<string, string[]>;
}

export interface AxiosErrorWithValidation extends AxiosError {
  response?: AxiosResponse<ValidationErrorResponse>;
}

// Create an instance of Axios
const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_APP_PROTOCOL}://${process.env.NEXT_PUBLIC_APP_HOST}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

const redirectToLogin = () => {
  if (typeof window !== "undefined") {
    window.location.href = "/signin"; // or use router.push in a React component
  }
};

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response, // If response is successful, return it
  (error) => {
    console.log("error in client axios", error);
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        redirectToLogin();
      }
      //  else if (status === 500) {
      //   window.location.href = "/500";
      //   // redirectToLogin();
      // }
      else if (status === 400) {
        //for signup
        if (data.error) {
          const errorString = getErrorString(data.error);
          throw new Error(JSON.stringify(errorString));
        }
        throw error;
      } else if (status === 404) {
        throw new Error(error);
      } else {
        redirectToLogin();
      }
    } else {
      // If no response (e.g., network issues)
      // alert("Network error, please check your internet connection.");
    }

    return Promise.reject(error);
  }
);

// Define API calls using the apiClient instance
export const apiGet = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.get<T>(url, config);
  return response.data;
};

export const apiPost = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.post<T>(url, data, config);
  console.log(response.data);
  return response.data;
};

export const apiPut = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.put<T>(url, data, config);
  return response.data;
};

export const apiPatch = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.patch<T>(url, data, config);
  return response.data;
};

export const apiDelete = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.delete<T>(url, config);
  return response.data;
};

// Export the apiClient in case you need to access it directly
export default apiClient;
