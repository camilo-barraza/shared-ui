import { animations } from "./animations";
import { debugCss } from "./debugCss";
import { dimensionsCss } from "./dimensionsCss";
import { fontCss } from "./fontCss";
import { globalCss } from "./globalCss";
import { layoutCss } from "./layoutCss";
import { absolutePosition, marginCss, paddingCss } from "./positionCss";
import { textCss } from "./textCss";

export const getCssValue = (v: any) => v + (typeof v === "number" ? "px" : "");

export const appCss = {
  ...animations,
  ...dimensionsCss,
  ...layoutCss,
  ...textCss,
  ...fontCss,
  ...debugCss,
  ...globalCss,
  ...marginCss,
  ...absolutePosition,
  ...paddingCss,
};
