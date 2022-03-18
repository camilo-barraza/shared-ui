import { css as cssBase, ThemedCssFunction } from "styled-components";
import { theme } from "./theme";

// prevents circular definition since:
// - type for `css` is  ThemedCssFunction<DefaultTheme>
// - theme will be used to define DefaultTheme
export const css = cssBase as ThemedCssFunction<null>;
// `css` shouldn't use ${(props) => props.theme.css.};

export type ThemeType = typeof theme;
