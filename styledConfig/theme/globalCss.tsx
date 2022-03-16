import { css } from "../themeType";
import { colors } from "./colorPalette";
import { mediaQueries } from "./mediaQueries";

export const globalCss = {
  clickable: css`
    user-select: none;
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `,
  disabledWhen: css`
    ${(p: any) =>
      p.disabledWhen &&
      css`
        pointer-events: none;
      `}
  `,
  selectNone: css`
    user-select: none;
  `,
  yscroll: css`
    overflow-y: scroll;
  `,
  overflowHidden: css`
    overflow: hidden;
  `,
  rotate180: css`
    transform: rotate(180deg);
  `,
  forMobile: css`
    @media all and ${mediaQueries.desktop} {
      display: none;
    }
  `,
  forDesktop: css`
    @media all and ${mediaQueries.mobile} {
      display: none;
    }
  `,
  mcontainer: css`
    @media all and ${mediaQueries.mobile} {
      padding-left: 6%;
      padding-right: 6%;
    }
  `,
  c: css`
    /* set color based on colors defined in theme */
    color: ${(props: any) => props.c};
  `,
  bg: css`
    /* set background color based on colors defined in theme  */
    background-color: ${(props: any) => props.bg};
  `,
  css: css`
    ${(p: any) => p.css};
  `,
  scrollbarDark: css`
    scrollbar-width: thin;
    scrollbar-color: ${colors.gray400} transparent;
    /* width */
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      opacity: 0.3;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.gray400};
      opacity: 0.3;
      border-radius: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      border-radius: 3px;
      background-color: ${colors.gray400};
    }
  `,
};
