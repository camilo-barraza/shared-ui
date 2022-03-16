import React from "react";
import styled, { css } from "styled-components";
import { appCss } from "./theme";

export const themeProps = css`
  ${(props: any) =>
    Object.keys(props)
      .map((p) => props.theme.css[p])
      .filter((c) => c)};
`;

export type CSSProps = {
  [K in keyof typeof appCss]?: any;
};

// may be used to avoid adding styled components prop types
// keeps component prop references to css snippets in theme
export type CSSAnyProps = CSSProps | { [key: string]: any };

export const Div = styled.div<CSSProps>`
  ${themeProps};
`;

export const Span = styled.span<CSSProps>`
  ${themeProps};
`;

export const P = styled.p<CSSProps>`
  ${themeProps};
`;

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type DivThemeCSSProps = DivProps & CSSProps;
