import React, { ReactNode } from "react";
import styled from "styled-components/native";
import {
  variant,
  backgroundColor,
  fontSize,
  fontWeight,
  space,
  color,
  BackgroundColorProps,
  FontSizeProps,
  FontWeightProps,
  SpaceProps,
  ColorProps,
} from "styled-system";

export type TextAppearance = "head-line" | "subtitle" | "body-text" | "small-text" | "xsmall-text";

export type TextProps = BackgroundColorProps &
  FontSizeProps &
  FontWeightProps &
  SpaceProps &
  ColorProps & {
    appearance?: TextAppearance;
    children?: ReactNode;
  };

const appearance = variant({
  prop: "appearance",
  variants: {
    "head-line": {
      fontSize: "h2",
    },
    subtitle: {
      fontSize: "h3",
    },
    "body-text": {
      fontSize: "h5",
    },
    "small-text": {
      fontSize: "s2",
    },
    "xsmall-text": {
      fontSize: "s1",
    },
  },
});

const StyledText = styled.Text(color, fontSize, fontWeight, space, backgroundColor, appearance);

export const Text: React.FunctionComponent<TextProps> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};
