import styled, { css } from "styled-components";
import { Div, DivThemeCSSProps } from "../utils";

const types = ["primary", "secondary", "tertiary"] as const;
export type ButtonTypes = typeof types[number];

type ButtonStyles = {
  [K in ButtonTypes]: any;
};
const styles: ButtonStyles = {
  primary: css`
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.pink500};

    border: solid 4px ${(props) => props.theme.colors.pink500};
    box-sizing: border-box;

    :hover {
      background: ${(props) => props.theme.colors.pink500};
      box-shadow: 0px 0px 8px ${(props) => props.theme.colors.pink500};
    }
    :active {
      background: ${(props) => props.theme.colors.pink500};
      border: 4px solid ${(props) => props.theme.colors.pink700};
    }
    :focus {
      background: ${(props) => props.theme.colors.pink500};
      box-shadow: 0px 0px 8px ${(props) => props.theme.colors.pink500};
    }
    ${(props: any) =>
      props.isDisabled &&
      css`
        background: ${(props) => props.theme.colors.interactiveDisabled};
        box-shadow: 0px;
        border: none;
      `}
  `,
  secondary: css`
    background: ${(props) => props.theme.colors.white};
    box-sizing: border-box;
    border: solid 1px ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.black};
    & > svg {
      & > path {
        fill: ${(props) => props.theme.colors.black};
      }
    }
    :hover {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);
    }
    :active {
      border: 2px solid ${(props) => props.theme.colors.black};
      background: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};
      & > svg {
        & > path {
          fill: ${(props) => props.theme.colors.white};
        }
      }
    }
    :focus {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);
    }
    ${(props: any) =>
      props.isDisabled &&
      css`
        border: 2px solid ${(props) => props.theme.colors.gray390};
        color: ${(props) => props.theme.colors.gray390};
        & > svg {
          & > path {
            fill: ${(props) => props.theme.colors.gray390};
          }
        }
      `}
  `,
  tertiary: css`
    background: transparent;
    border: solid 1px transparent;
    color: ${(props) => props.theme.colors.text};
    :hover {
      background: ${(props) => props.theme.colors.white50};
    }
    :active {
      background: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};
    }
    ${(props: any) =>
      props.isDisabled &&
      css`
        color: ${(props) => props.theme.colors.gray300};
      `}
  `,
};

export type BtnProps = {
  onClick?: () => void;
  variant?: ButtonTypes;
  children: any;
  isDisabled?: boolean;
} & DivThemeCSSProps;
export const ButtonWrapper = styled(Div)<BtnProps>`
  height: 48px;

  border: solid 1px black;
  border-radius: 24px;

  font-family: DM Sans;

  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }

  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
    `}
  ${(props) => {
    const c = props.theme.css;
    return [c.centered, c.buttonText];
  }};

  ${(props) => styles[props.variant || "primary"]};
`;

export const Button = ({
  onClick = null,
  isDisabled = false,
  variant = "primary",
  children,
  ...props
}: BtnProps): JSX.Element => {
  return (
    <ButtonWrapper
      w100
      h={48}
      onKeyDown={({ code }) => {
        if (code === "Space" || (code === "Enter" && onClick)) onClick();
      }}
      tabIndex={0}
      {...{ variant, isDisabled, onClick, ...props }}
    >
      <>{children}</>
    </ButtonWrapper>
  );
};
