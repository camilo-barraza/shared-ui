import { getCssValue } from ".";
import { css } from "../themeType";

export const dimensionsCss = {
  w50: css`
    width: 50%;
  `,
  w100: css`
    width: 100%;
  `,
  h100: css`
    height: 100%;
  `,
  w: css`
    /* width in px when w is type number */
    width: ${(p: any) => getCssValue(p.w)};
  `,
  h: css`
    /* height in px when h is type number */
    height: ${(p: any) => getCssValue(p.h)};
  `,
  dim: css`
    height: ${(p: any) => getCssValue(p.dim)};
    width: ${(p: any) => getCssValue(p.dim)};
  `,
  maxw: css`
    /* maximum width in px */
    max-width: ${(p: any) => p.maxw}px;
  `,
  maxh: css`
    /* maxinum height in px */
    max-height: ${(p: any) => p.maxh}px;
  `,
  minw: css`
    /* minimum width in px */
    min-width: ${(p: any) => p.minw}px;
  `,
  minh: css`
    /* minimum height in px */
    min-height: ${(p: any) => p.minh}px;
  `,
  br: css`
    /* border radius in px */
    border-radius: ${(p: any) => p.br}px;
  `,
};
