import React from "react";
import { Button } from "../Button";
import { addToast, Toast } from "./index";

export default {
  component: Toast,
  title: "Overlay/Toast",
};

export const Success = () => {
  const SucessToaster = () => {
    return (
      <Button
        w={300}
        onClick={() =>
          addToast("Success message", "success", {
            position: "top-center",
          })
        }
      >
        Create toast
      </Button>
    );
  };

  return (
    <>
      <Toast />
      <SucessToaster />
    </>
  );
};

export const Error = () => {
  const ErrorToaster = () => {
    return (
      <Button
        w={300}
        onClick={() =>
          addToast("Error message", "error", {
            position: "top-center",
          })
        }
      >
        Create toast
      </Button>
    );
  };

  return (
    <>
      <Toast />
      <ErrorToaster />
    </>
  );
};
