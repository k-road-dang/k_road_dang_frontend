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

export type TextVariant = "headline" | "subtitle" | "bodyText" | "smallText";

export type TextProps = BackgroundColorProps &
  FontSizeProps &
  FontWeightProps &
  SpaceProps &
  ColorProps & {
    variant?: TextVariant;
    children?: ReactNode;
  };

export const variants = variant({
  variants: {
    headline: {
      fontSize: "h2",
    },
    subtitle: {
      fontSize: "h3",
    },
    bodyText: {
      fontSize: "h5",
    },
    smallText: {
      fontSize: "s2",
    },
  },
});

const StyledText = styled.Text(color, fontSize, fontWeight, space, backgroundColor, variants);

export const Text: React.FunctionComponent<TextProps> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};
