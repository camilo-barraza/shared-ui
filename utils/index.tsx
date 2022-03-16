import React from "react";
import styled from "styled-components";
import { appCss } from "../Theme/appCss";

export const propsToThemeCSS = (props: any) =>
  Object.keys(props)
    .map((p) => props.theme.css[p])
    .filter((c) => c);

export type ThemeCSSProps =
  | {
      [K in keyof typeof appCss]?: any;
    }
  | { name: string; key: string };

// may be used to avoid adding styled components prop types
// keeps component prop references to css snippets in theme
export type ThemeCSSAnyProps = ThemeCSSProps | { [key: string]: any };

export const Div = styled.div<ThemeCSSProps>(propsToThemeCSS);

export const HTMLButton = styled.button<ThemeCSSProps>(propsToThemeCSS);

export const Span = styled.span<ThemeCSSProps>(propsToThemeCSS);

export const HtmlP = styled.p<ThemeCSSProps>(propsToThemeCSS);
export const HtmlH1 = styled.h1<ThemeCSSProps>(propsToThemeCSS);
export const HtmlH2 = styled.h2<ThemeCSSProps>(propsToThemeCSS);
export const HtmlH3 = styled.h3<ThemeCSSProps>(propsToThemeCSS);
export const HtmlH4 = styled.h4<ThemeCSSProps>(propsToThemeCSS);
export const HtmlLabel = styled.label<ThemeCSSProps>(propsToThemeCSS);

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type DivThemeCSSProps = Omit<DivProps, "onChange" | "onSubmit"> &
  ThemeCSSProps;
export type ButtonThemeCSSProps = HTMLButtonProps & ThemeCSSProps;

export * from "./hooks";
