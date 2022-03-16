const gray = {
  gray5: "#F9FAFB",
  gray10: "#FCFCFD",
  gray50: "#F8F8F9",
  gray100: "#F0F0F1",
  gray200: "#E4E4E5",
  gray300: "#CAC4BF",
  gray390: "#BFBFBF",
  gray400: "#B1B1B2",
  gray500: "#989898",
  gray600: "#7F7F7F",
  gray700: "#4D4D4D",
  gray800: "#4C4C4C",
  gray900: "#333333",
  gray1000: "#1C1C1C",
};

const red = {
  red50: "#E6DBDB",
  red100: "#FCEDEA",
  red200: "#F8DCD4",
  red300: "#F2B9AA",
  red400: "#EB967F",
  red500: "#E57354",
  error: "#CF4520",
  red600: "#CF4520",
  red700: "#A9381A",
  red800: "#842C14",
  red900: "#5E1F0F",
  red1000: "#381309",
  red2000: "#87464614",
};

const green = {
  green50: "#EDFBEF",
  green100: "#C3F2CC",
  green200: "#9DEAAB",
  green300: "#62DD79",
  green400: "#2AC046",
  green500: "#25AA3E",
  green600: "#209135",
  green700: "#1A782C",
  green800: "#155F23",
  green900: "#0F4519",
  green1000: "#0A2C10",
};

const blue = {
  blue50: "#CDFCEC",
  blue100: "#CDFBFB",
  blue400: "#71FCE4",
  blue500: "#0EBEBE",
  blue900: "#025B5B",
};

const pink = {
  pink100: "#FED7DE",
  pink300: "#FE889C",
  pink500: "#FD395A",
  pink700: "#CA2E48",
  pink900: "#651724",
};

const orange = {
  orange50: "#FAF8F6",
  orange100: "##FDEAC7",
  orange200: "#FBDCA0",
  orange300: "#FACD78",
  orange400: "#F8BE51",
  orange500: "#EF9F09",
  orange600: "#CD8808",
  orange700: "#AA7106",
  orange800: "#885A05",
  orange900: "#654304",
  orange1000: "#432D03",
};

const white = {
  white: "white",
  white50: "#F3F2F1",
};

export const colorPalette = {
  ...orange,
  ...green,
  ...gray,
  ...blue,
  ...red,
  ...white,
  ...pink,
  red: "red",
  black: "black",
  gold: "#d0a617",
};

export const colorLabels = {
  interactiveDisabled: "#FEB0BD",
  error: colorPalette.red600,
  highlight01: colorPalette.blue500,
  outlineInputs: colorPalette.gray300,
  text: colorPalette.gray1000,
  textPrim: colorPalette.black,
  textSec: colorPalette.gray700,
  textTert: colorPalette.gray700,
  textLink: colorPalette.blue500,
  placeholder: colorPalette.gray300,
  disabled1: colorPalette.gray50,
  disabled2: colorPalette.gray300,
  disabled3: colorPalette.gray400,
  background: colorPalette.gray10,
};

export const colors = { ...colorPalette, ...colorLabels };
