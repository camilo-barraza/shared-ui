import { addToast } from "../Toast";
import { isString } from "../utils";

type HandleError = (err: any, errorMsg?: string) => void;

const getErrorMessage = (response: any) => {
  if (response?.data?.errors) return response?.data?.errors;
  else if (response?.data?.error_message) return response?.data?.error_message;
  else if (response?.data?.message) return response?.data?.message;
  else if (isString(response?.data?.error?.message)) {
    return response?.data?.error?.message;
  } else if (isString(response?.data?.error)) return response?.data?.error;
  return "An error ocurred, please try again later";
};

export const handleSuccess = (msg: string) => {
  addToast(msg, "success");
};

export const handleError: HandleError = (err, errMsg = null) => {
  let msg = "Connection Error";
  let errorType = "";
  if (errMsg) msg = errMsg;
  else if (err.response) {
    switch (err.response.status) {
      case 500:
        msg = "An error has occurred on our server. Please try again later";
        errorType = "error";
        break;
      case 422:
        errorType = "error";
        msg = getErrorMessage(err.response);
        break;
      default:
        msg = getErrorMessage(err.response);
        break;
    }
  }
  // handle error message
  if (errorType) {
    addToast(msg, "error");
  } else {
    addToast(msg);
  }
};
