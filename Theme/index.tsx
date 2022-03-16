import React from "react";
import { ThemeProvider } from "styled-components";
import { colors } from "./colors";
import { appCss } from "./appCss";
import { mediaQueries, mediaQueryBreakpoints } from "./appCss/mediaQueries";

export const theme = {
  colors,
  css: appCss,
  mediaQueries,
  mediaQueryBreakpoints,
};

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children, ...props }) => (
  <ThemeProvider theme={theme} {...props}>
    {children}
  </ThemeProvider>
);

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
