import React, { CSSProperties } from "react";
import toast, { ToastBar, Toaster, ToastPosition } from "react-hot-toast";
import { ToastOptions, ToastType } from "react-hot-toast/dist/core/types";
import styled from "styled-components";
import { defaultCheckIcon, greenCheckIcon, redXIcon } from "../icons";
import { colors } from "../styledConfig/theme/colorPalette";
import { Div } from "../styledConfig/utils";

const defaultDuration = 5000;
const defaultPosition: ToastPosition = "bottom-right";
const toastBorderRadius = 4;
const toastMaxWidth = "85%";

export const addToast = (
  msg: JSX.Element | string,
  type: ToastType = "blank",
  toastOptions: ToastOptions = {}
): void => {
  const _toastOptions: ToastOptions = {
    duration: defaultDuration,
    position: defaultPosition,
    ...toastOptions,
  };
  const toastFn = type === "blank" ? toast : toast[type];
  toastFn(msg, _toastOptions);
};

const toastContainerCss: CSSProperties = {
  padding: 0,
  borderRadius: toastBorderRadius,
  boxShadow: "none",
  maxWidth: toastMaxWidth,
};

const toastTypeStyles = {
  success: {
    backgroundColor: colors.blue50,
    color: colors.text,
    icon: greenCheckIcon,
  },
  error: {
    color: colors.red800,
    backgroundColor: colors.red100,
    icon: redXIcon,
  },
  blank: {
    backgroundColor: colors.white,
    color: colors.text,
    icon: defaultCheckIcon,
  },
};

const ToastWrapper = styled(Div)`
  padding: 10px;
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.1);
  border-radius: ${toastBorderRadius}px;
  ${(p) => p.theme.css.alignCenter};
`;

const Toast = () => {
  return (
    <Toaster
      toastOptions={{
        style: toastContainerCss,
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ message, icon: hotToastIcon }) => {
            const { icon, color, backgroundColor } =
              toastTypeStyles[t.type] || {};
            return (
              <ToastWrapper c={color} bg={backgroundColor}>
                <Div alignCenter>{icon || hotToastIcon}</Div>
                <Div alignCenter>{message}</Div>
                <Div p={5} clickable onClick={() => toast.dismiss(t.id)}>
                  {closeIcon}
                </Div>
              </ToastWrapper>
            );
          }}
        </ToastBar>
      )}
    </Toaster>
  );
};

export { Toast };

const closeIcon = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 2.5L7.82258 7.82258"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 7.82251L7.82258 2.49993"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
