import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

import { FormInputLabel } from "../..";

import { Div, DivThemeCSSProps } from "../../styledConfig/utils";

export const HTMLInput = styled.input`
  position: relative;
  padding: 20px 16px;
  height: 68px;
  outline: none;

  border: 1px solid ${(props) => props.theme.colors.gray300};
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  -moz-appearance: textfield;

  ${(props) => props.theme.css.body1};

  ::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }

  :focus {
    border: 2px solid ${(props) => props.theme.colors.blue500};
    box-shadow: 0px 0px 8px ${(p) => p.theme.colors.blue500};
  }

  ${(props: any) =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
      pointer-events: none;
    `}
  ${(props: any) =>
    props.hasError &&
    css`
      padding-right: 50px;
      border: solid 2px ${(props) => props.theme.colors.error};
    `}
`;

const Icon = styled(Div)`
  position: absolute;
  right: 11px;
  top: 0;
  height: 100%;
`;

type Props = {
  label?: string;
  icon?: any;
  placeholder?: string;
  value: any;
  type?: string;
  onChange: any;
  onBlur?: any;
  isDisabled?: boolean;
  hasError?: boolean;
  onFocus?: any;
  withDebounce?: boolean;
  autoFocus?: boolean;
} & DivThemeCSSProps;

const TextInput = ({
  label = "",
  icon = null,
  placeholder = "",
  value,
  type = "text",
  onChange,
  onBlur = null,
  isDisabled = false,
  hasError = false,
  onFocus = null,
  withDebounce = true,
  autoFocus = false,
  ...props
}: Props): JSX.Element => {
  const res = usePasswordVisibleIcon(type);
  const { passwordVisibleIcon, isPasswordVisible } = res;
  const _icon = passwordVisibleIcon || icon;

  return (
    <Div w100 {...props}>
      <FormInputLabel isDisabled={isDisabled}>{label}</FormInputLabel>
      <Div pRelative mt={8}>
        <HTMLInput
          {...{ placeholder, isDisabled, onFocus, hasError, autoFocus }}
          type={isPasswordVisible ? "text" : type}
          value={value || ""}
          onChange={({ target: { value } }) => onChange(value)}
          onBlur={() => {
            if (onBlur) onBlur(value);
          }}
        />
        <Icon centered>{hasError ? errorIcon : _icon}</Icon>
      </Div>
    </Div>
  );
};

const PIcon = styled(Div)`
  ${(props) => {
    const c = props.theme.css;
    return [c.alignCenter, c.clickable];
  }};
`;
const usePasswordVisibleIcon = (type) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  if (type !== "password")
    return { passwordVisibleIcon: null, isPasswordVisible: null };

  const passwordVisibleIcon = isPasswordVisible ? (
    <PIcon title="Hide" mt={-2} onClick={() => setIsPasswordVisible(false)}>
      {hideIcon}
    </PIcon>
  ) : (
    <PIcon title="Show" onClick={() => setIsPasswordVisible(true)}>
      {viewIcon}
    </PIcon>
  );
  return { isPasswordVisible, passwordVisibleIcon };
};

const errorIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 5C11.5523 5 12 5.44772 12 6V11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11V6C10 5.44772 10.4477 5 11 5ZM11 14C11.5523 14 12 14.4477 12 15V15.5C12 16.0523 11.5523 16.5 11 16.5C10.4477 16.5 10 16.0523 10 15.5V15C10 14.4477 10.4477 14 11 14Z"
      fill="#CF4520"
    />
  </svg>
);

const hideIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.67969 3L21.6797 19"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M22.2679 13.2302C22.4458 12.5885 22.3647 11.8927 22.0246 11.3003C20.3114 8.31648 17.8496 6.09905 15 5.11633M19.6278 16.9999C17.4379 19.2279 14.6784 20.5564 11.6798 20.5564C7.44377 20.5564 3.68497 17.9054 1.33497 13.8124C0.888345 13.0345 0.888342 12.0783 1.33497 11.3004C2.93979 8.50518 5.20165 6.38253 7.82381 5.31743"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5892 11.8251C14.748 12.457 14.6968 13.1233 14.4434 13.7235C14.1899 14.3236 13.748 14.825 13.1844 15.1517C12.6208 15.4785 11.9662 15.6129 11.3194 15.5347C10.6726 15.4564 10.0689 15.1698 9.59949 14.7181C9.13007 14.2663 8.82045 13.6741 8.71743 13.0308C8.61441 12.3875 8.7236 11.7282 9.02848 11.1524C9.33337 10.5767 9.81738 10.1159 10.4074 9.83956C10.9973 9.56327 11.6612 9.48653 12.2987 9.62095"
      stroke="#333333"
      strokeWidth="2"
    />
  </svg>
);

const viewIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.33497 13.2561C0.888345 12.4782 0.888342 11.522 1.33497 10.7441C3.68496 6.65097 7.44378 4 11.6798 4C15.9158 4 19.6746 6.65094 22.0246 10.744C22.4712 11.5219 22.4712 12.4781 22.0246 13.256C19.6746 17.3491 15.9158 20 11.6798 20C7.44377 20 3.68497 17.3491 1.33497 13.2561Z"
      stroke="#333333"
      strokeWidth="2"
    />
    <circle cx="11.6797" cy="12" r="3" stroke="#333333" strokeWidth="2" />
  </svg>
);

export { TextInput };
