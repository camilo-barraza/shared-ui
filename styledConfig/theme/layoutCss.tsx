import { css } from "../themeType";

export const layoutCss = {
  dflex: css`
    display: flex;
  `,
  centered: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
  flexColumnCentered: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  flexRowReverse: css`
    display: flex;
    flex-direction: row-reverse;
  `,
  spaceBetween: css`
    display: flex;
    justify-content: space-between;
  `,
  spaceBetweenAligned: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  spaceAround: css`
    display: flex;
    justify-content: space-around;
  `,
  justifyEnd: css`
    display: flex;
    justify-content: flex-end;
  `,
  justifyCenter: css`
    display: flex;
    justify-content: center;
  `,
  alignEnd: css`
    display: flex;
    align-items: flex-end;
  `,
  alignStart: css`
    display: flex;
    align-items: flex-start;
  `,
  alignCenter: css`
    display: flex;
    align-items: center;
  `,
  grow: css`
    display: flex;
    flex-grow: 1;
  `,
  pAbsolute: css`
    position: absolute;
  `,
  pRelative: css`
    position: relative;
  `,
  pSticky: css`
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
  `,
  floatLeft: css`
    float: left;
  `,
};
