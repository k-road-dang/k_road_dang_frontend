import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { color, height, space, SpaceProps, variant } from "styled-system";
import { Text } from "@components/atoms";
import { paletteType } from "@theme/theme";

export type LabelSize = "lg" | "md";
export type LabelAppearance = "black" | "gray" | "orange";

const fontStyleItems: { appearance: LabelAppearance; fontColor: paletteType }[] = [
  { appearance: "black", fontColor: "main-white" },
  { appearance: "gray", fontColor: "font-gray" },
  { appearance: "orange", fontColor: "main-white" },
];

export type LabelProps = SpaceProps & {
  size: LabelSize;
  appearance: LabelAppearance;
  children: ReactNode;
};

const size = variant({
  prop: "size",
  variants: {
    lg: {
      px: "6px",
      height: "25px",
      fontSize: "s1",
    },
    md: {
      px: "4px",
      height: "15px",
      fontSize: "s3",
    },
  },
});

const appearance = variant({
  prop: "appearance",
  variants: {
    black: {
      bg: "main-black",
    },
    gray: {
      bg: "box-gray",
    },
    orange: {
      bg: "main-orange",
    },
  },
});

const StyledLabel = styled.View(
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: "2px",
  },
  space,
  height,
  color,
  size,
  appearance,
);

export const Label: React.FunctionComponent<LabelProps> = ({ children, ...rest }) => {
  const fontColor = fontStyleItems.find((item) => item.appearance === rest.appearance)?.fontColor;

  return (
    <StyledLabel {...rest}>
      <Text appearance="xsmall-text" color={fontColor}>
        {children}
      </Text>
    </StyledLabel>
  );
};
