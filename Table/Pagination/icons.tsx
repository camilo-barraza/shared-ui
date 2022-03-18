import React from "react";
import styled, { css } from "styled-components";
import { Div, DivThemeCSSProps } from "../../styledConfig/utils";

type IconContainerProps = {
  isDisabled?: boolean;
};
const IconContainer = styled(Div)<IconContainerProps>`
  ${(p) => p.theme.css.centered};
  color: ${(p) => p.theme.colors.gray900};
  border-radius: 4px;
  height: 24px;
  width: 24px;
  ${(p) =>
    p.isDisabled
      ? css`
          color: ${(p) => p.theme.colors.disabled3};
        `
      : css`
          :hover {
            cursor: pointer;

            background-color: ${(p) => p.theme.colors.gray100};
          }
        `}
`;

type PaginationIconProps = {
  isDisabled?: boolean;
  children: JSX.Element;
} & DivThemeCSSProps;
export const PaginationIcon = ({
  isDisabled = false,
  children,
  ...props
}: PaginationIconProps) => {
  return (
    <IconContainer ml={10} isDisabled={isDisabled} {...props}>
      {children}
    </IconContainer>
  );
};

export const previousPage = (
  <svg
    width="8"
    height="13"
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00623 0.90802L1.26688 6.3505L7.00623 11.793"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const nextPage = (
  <svg
    width="8"
    height="13"
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.24243 0.90802L6.98177 6.3505L1.24243 11.793"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const jumpToFirst = (
  <svg
    width="24"
    height="19"
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.4547 3.90802L10.7154 9.3505L16.4547 14.793"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.59399 14.069L6.59399 4.68966"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const jumpToLast = (
  <svg
    width="25"
    height="19"
    viewBox="0 0 25 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.23022 14.8506L13.9696 9.40811L8.23023 3.96563"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0909 4.68964L18.0909 14.0689"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
