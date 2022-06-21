import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { color, height, space, SpaceProps, variant } from "styled-system";
import { Text } from "@components/atoms";
import { paletteType } from "@theme/theme";

export type ChipSize = "lg" | "md" | "sm";
export type ChipAppearance = "black" | "gray" | "orange" | "gray-outline" | "orange-outline";

const fontStyleItems: { appearance: ChipAppearance; fontColor: paletteType }[] = [
  { appearance: "black", fontColor: "main-white" },
  { appearance: "gray", fontColor: "font-gray" },
  { appearance: "orange", fontColor: "main-white" },
  { appearance: "gray-outline", fontColor: "font-gray" },
  { appearance: "orange-outline", fontColor: "main-orange" },
];

export type ChipProps = SpaceProps & {
  size: ChipSize;
  appearance: ChipAppearance;
  children: ReactNode;
  leftChild: ReactNode;
  rightChild: ReactNode;
  onPress?: () => void;
};

const size = variant({
  prop: "size",
  variants: {
    lg: {
      px: "11px",
      height: "30px",
    },
    md: {
      px: "11px",
      height: "26px",
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
      bg: "button-inactive",
    },
    orange: {
      bg: "main-orange",
    },
    "gray-outline": {
      borderColor: "line-gray",
      borderWidth: 1,
    },
  },
});

const StyledChip = styled.TouchableOpacity(
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 20,
  },
  space,
  height,
  color,
  size,
  appearance,
);

export const Chip: React.FunctionComponent<ChipProps> = ({
  children,
  onPress,
  leftChild,
  rightChild,
  ...rest
}) => {
  const fontColor = fontStyleItems.find((item) => item.appearance === rest.appearance)?.fontColor;

  return (
    <StyledChip onPress={onPress} {...rest}>
      {leftChild}
      <Text appearance="xsmall-text" color={fontColor}>
        {children}
      </Text>
      {rightChild}
    </StyledChip>
  );
};
