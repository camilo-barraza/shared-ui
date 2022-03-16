import { css } from "./common";
import { getCssValue } from "./index";

export const absolutePosition = {
  top: css`
    top: ${(p: any) => getCssValue(p.top)};
  `,
  bottom: css`
    bottom: ${(p: any) => getCssValue(p.bottom)};
  `,
  left: css`
    left: ${(p: any) => getCssValue(p.left)};
  `,
  right: css`
    right: ${(p: any) => getCssValue(p.right)};
  `,
};

export const marginCss = {
  mt: css`
    margin-top: ${(p: any) => getCssValue(p.mt)};
  `,
  mb: css`
    margin-bottom: ${(p: any) => getCssValue(p.mb)};
  `,
  ml: css`
    margin-left: ${(p: any) => getCssValue(p.ml)};
  `,
  mr: css`
    margin-right: ${(p: any) => getCssValue(p.mr)};
  `,
  m: css`
    margin: ${(p: any) => getCssValue(p.m)};
  `,
};

export const paddingCss = {
  pt: css`
    padding-top: ${(p: any) => getCssValue(p.pt)};
  `,
  pb: css`
    padding-bottom: ${(p: any) => getCssValue(p.pb)};
  `,
  pl: css`
    padding-left: ${(p: any) => getCssValue(p.pl)};
  `,
  pr: css`
    padding-right: ${(p: any) => getCssValue(p.pr)};
  `,
  p: css`
    padding: ${(p: any) => getCssValue(p.p)};
  `,
};
