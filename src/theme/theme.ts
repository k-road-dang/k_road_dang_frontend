export const palette = {
  "main-orange": "#F36D36",
  "main-yellow": "#FFC946",
  "font-gray": "#999999",
  "font-example": "#B3B3B3",
  "line-gray": "#E6E6E6",
  "button-inactive": "#F0F0F0",
  "box-gray": "#F5F5F5",
  "main-black": "#000000",
};

const theme = {
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
  colors: {
    ...palette,
  },
  fonts: {
    headline: "Noto Sans KR, sans-serif",
    subtitle: "Noto Sans KR, sans-serif",
    bodytext: "Noto Sans KR, sans-serif",
    label: "Noto Sans KR, sans-serif",
  },
  fontSizes: {
    h1: "32px",
    h2: "24px",
    h3: "18px",
    h4: "16px",
    h5: "14px",
    h6: "13px",
    s1: "12px",
    s2: "10px",
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    headline: 1.5,
    subtitle: 1.5,
    bodytext: 1.5,
    smalltext: 1.5,
  },
  letterSpacings: {
    headline: "normal",
    subtitle: "normal",
    bodytext: "normal",
    smalltext: "normal",
  },
  sizes: {},
  borders: {
    default: `1px solid ${palette["line-gray"]}`,
    box: ` 1px solid ${palette["box-gray"]}`,
  },
  borderWidths: {},
  borderStyles: {},
  radii: {
    default: 4,
  },
  shadows: {
    card: "0px 1px 3px 0px #0000000a",
    inputButton: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
    box: "0px 1px 3px 0px rgba(0, 0, 0, 0.04)",
    circle: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
  },
  zIndices: {},
  transitions: {},
};

export default theme;

// https://system-ui.com/theme/
// https://styled-system.com/getting-started
