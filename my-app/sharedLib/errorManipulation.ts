import { AxiosErrorWithValidation } from "./clientAxiosHelpers";

export function getErrorString(errorData: any) {
  let errorString = "";
  for (const key in errorData) {
    if (errorData.hasOwnProperty(key)) {
      errorString += errorData[key].join("\n") + "\n";
    }
  }
  return errorString.trim();
}
export function getErrorArray(errorData: any) {
  let errorArray: string[] = [];
  for (const key in errorData) {
    if (errorData.hasOwnProperty(key)) {
      errorArray = errorArray.concat(errorData[key]);
    }
  }
  return errorArray;
}

export function handleError(error: AxiosErrorWithValidation) {
  console.error("in hook error", error);
  let errorDetails = null;

  if (error.response?.data?.errors) {
    console.error("input", error.response.data.errors);
    errorDetails = getErrorArray(error.response.data.errors);
    console.error("output", errorDetails);
  }

  return errorDetails;
}
