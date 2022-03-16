import { getCssValue } from "./index";
import { css } from "./common";

export const dimensionsCss = {
  w100: css`
    width: 100%;
  `,
  h100: css`
    height: 100%;
  `,
  h50: css`
    height: 50%;
  `,
  w: css`
    width: ${(p: any) => getCssValue(p.w)};
  `,
  h: css`
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
    /* minimum width in px */
    min-height: ${(p: any) => p.minh}px;
  `,
  br: css`
    /* border radius in px */
    border-radius: ${(p: any) => getCssValue(p.br)};
  `,
};
