import { css } from "../themeType";

export const fontCss = {
  normal: css`
    font-weight: 400;
  `,
  semiBold: css`
    font-weight: 500;
  `,
  bold: css`
    font-weight: 600;
  `,
  extraBold: css`
    font-weight: 700;
  `,
  fontweight_800: css`
    font-weight: 800;
  `,
  italic: css`
    font-style: italic;
  `,
  DM4: css`
    font-family: DM Serif Text;
    font-weight: 400;
  `,
  fs: css`
    /* font size in px */
    font-size: ${(props: any) => props.fs}px;
  `,
  lh: css`
    /* line height in px */
    line-height: ${(props: any) => props.lh}px;
  `,
  ls: css`
    /* letter spacing in px */
    letter-spacing: ${(props: any) => props.ls}px;
  `,
};
