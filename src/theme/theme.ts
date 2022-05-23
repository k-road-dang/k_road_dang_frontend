import { fonts, fontSizes, fontWeights, lineHeights, letterSpacings, text } from "@theme/fonts";
import { colors } from "@theme/colors";

const space = {
  space: [
    0, // 0
    8, // 1
    16, // 2
    24, // 3
    32, // 4
    40, // 5
    48, // 6
    56, // 7
    64, // 8
    72, // 9
    80, // 10
    88, // 11
    96, // 12
    104, // 13
    112, // 14
    120, // 15
    128, // 16
    136, // 17
    144, // 18
    152, // 19
    160, // 20
    168, // 21
    176, // 22
    184, // 23
    192, // 24
    200, // 25
    208, // 26
    216, // 27
    224, // 28
    232, // 29
    240, // 30
    248, // 31
    256, // 32
  ],
};

const sizes = {};

const borders = {
  default: `1px solid ${colors["line-gray"]}`,
  box: ` 1px solid ${colors["box-gray"]}`,
};

const borderWidths = {};
const borderStyles = {};

const radii = {
  default: 4,
};

const shadows = {
  card: "0px 1px 3px 0px #0000000a",
  inputButton: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
  box: "0px 1px 3px 0px rgba(0, 0, 0, 0.04)",
  circle: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
};

const zIndices = {};
const transitions = {};

const theme = {
  space,
  fontSizes,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  sizes,
  borders,
  borderWidths,
  borderStyles,
  radii,
  shadows,
  zIndices,
  transitions,
  text,
};

export default theme;

// https://system-ui.com/theme/
// https://styled-system.com/getting-started
