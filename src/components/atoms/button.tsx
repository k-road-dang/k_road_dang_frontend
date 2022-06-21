import React, { ReactNode } from "react";
import styled from "styled-components/native";
import {
  variant,
  position,
  width,
  flex,
  PositionProps,
  WidthProps,
  FlexProps,
  space,
  SpaceProps,
} from "styled-system";
import { Text } from "@components/atoms/text";
import { paletteType, fontSizeType } from "@theme/theme";

export type ButtonColor = "orange" | "yellow" | "black";
export type ButtonSize = "xl" | "lg" | "md" | "sm" | "xs";

const fontStyleItems: { color: ButtonColor; fontColor: paletteType; fontSize: fontSizeType }[] = [
  { color: "orange", fontColor: "main-white", fontSize: "h5" },
  { color: "yellow", fontColor: "main-black", fontSize: "h5" },
  { color: "black", fontColor: "main-white", fontSize: "h5" },
];

export type StyledButtonProps = SpaceProps &
  PositionProps &
  WidthProps &
  FlexProps & {
    color?: ButtonColor;
    size?: ButtonSize;
    fontSize?: fontSizeType;
    fontColor?: paletteType;
    children?: ReactNode;
  };

const size = variant({
  prop: "size",
  variants: {
    xl: {
      width: "340px",
      height: "45px",
    },
    lg: {
      width: "320px",
      height: "45px",
    },
    md: {
      width: "305px",
      height: "40px",
    },
    sm: {
      width: "287px",
      height: "40px",
    },
    xs: {
      width: "16px",
      height: "40px",
    },
  },
});

const color = variant({
  prop: "color",
  variants: {
    orange: {
      backgroundColor: "main-orange",
    },
    yellow: {
      backgroundColor: "main-yellow",
    },
    black: {
      backgroundColor: "main-black",
    },
  },
});

const StyledButton = styled.TouchableOpacity(
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 4,
  },
  color,
  position,
  size,
  width,
  flex,
  space,
);

export const Button: React.FunctionComponent<StyledButtonProps> = ({ children, ...rest }) => {
  const fontColor = fontStyleItems.find((item) => item.color === rest.color)?.fontColor;
  const fontSize = fontStyleItems.find((item) => item.color === rest.color)?.fontSize;

  return (
    <StyledButton {...rest}>
      {typeof children === "string" ? (
        <Text fontWeight="medium" fontSize={fontSize} color={fontColor}>
          {children}
        </Text>
      ) : (
        children
      )}
    </StyledButton>
  );
};
