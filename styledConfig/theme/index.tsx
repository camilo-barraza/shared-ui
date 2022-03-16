import { colors } from "./colorPalette";
import { debugCss } from "./debugCss";
import { fontCss } from "./fontCss";
import { dimensionsCss } from "./dimensionsCss";
import { layoutCss } from "./layoutCss";
import { textCss } from "./textCss";
import { textStyles } from "./textStyles";
import { animations } from "./animations";
import { absolutePosition, marginCss, paddingCss } from "./positionCss";
import { globalCss } from "./globalCss";
import { mediaQueries } from "./mediaQueries";

export const getCssValue = (v) => v + (typeof v === "number" ? "px" : "");

export { colors };

export const appCss = {
  ...animations,
  ...dimensionsCss,
  ...layoutCss,
  ...textCss,
  ...textStyles,
  ...fontCss,
  ...debugCss,
  ...globalCss,
  ...absolutePosition,
  ...marginCss,
  ...paddingCss,
};

export const theme = {
  colors,
  textStyles,
  css: appCss,
  media: mediaQueries,
};
