import React from "react";
import styled, { css } from "styled-components";
import { colors, CSSProps, Div, themeProps } from "./styledConfig";

type MenuItemProps = {
  isSelected?: boolean;
  isLast?: boolean;
};
export const MenuItem = styled(Div)<MenuItemProps>`
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  ${(p) =>
    !p.isLast &&
    css`
      margin-bottom: 8px;
    `}
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.text};
  ${(props) => props.theme.css.body1}
  ${(p) => p.theme.css.selectNone};
  ${(p) =>
    p.isSelected &&
    css`
      color: ${(p) => p.theme.colors.blue500};
    `}
  :hover {
    background: ${(props) => props.theme.colors.blue100};
    cursor: pointer;
  }
`;

type LabelProps = {
  isDisabled?: boolean;
};
export const FormInputLabel = styled(Div)<LabelProps>`
  ${(props) => props.theme.css.body4};
  color: ${(props) => props.theme.colors.text};
  ${(props: any) =>
    props.isDisabled &&
    css`
      color: ${(props) => props.theme.colors.gray500};
    `}
`;

export const InfoDivider = ({ msg }) => {
  return (
    <Div dflex alignCenter mt={7} mb={7}>
      <Div w100 h={1} bg={colors.gray300} />
      <Div w100 textAlignCenter c={colors.gray700} body1 centered p={20}>
        {msg}
      </Div>
      <Div w100 h={1} bg={colors.gray300} />
    </Div>
  );
};

export const Avatar = styled.img<CSSProps>`
  ${themeProps};
  border-radius: 100%;
  height: 36px;
  width: 36px;
`;

export const Divider = styled(Div)`
  width: 100%;
  height: 1px;
  background: ${colors.black};
`;

export * from "./api";
export * from "./icons";
export * from "./inputs";
export * from "./Table";
export * from "./buttons";
export * from "./Toast";
export * from "./Modal";
export * from "./Spinner";
export * from "./TooltipProvider";
