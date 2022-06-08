import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { variant, color, backgroundColor, position, width, flex } from "styled-system";
import { TextProps, Text } from "@components/atoms/text";
import { paletteType, fontSizeType } from "@theme/theme";

export type ButtonColor = "main-orange" | "main-yellow" | "main-black";
export type ButtonSize = "xl" | "lg" | "md" | "sm" | "xs";

export type StyledButtonProps = {
  bg?: ButtonColor;
  size?: ButtonSize;
  fontSize?: fontSizeType;
  fontColor?: paletteType;
  children?: ReactNode;
};

export const size = variant({
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

const StyledButton = styled.TouchableOpacity(
  {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
  },
  backgroundColor,
  color,
  position,
  size,
  width,
  flex,
);

const ButtonText = (props: TextProps & { fontSize?: fontSizeType } & { fontColor?: paletteType }) => {
  const { fontSize = "h5", fontColor = "main-black" } = props;

  return <Text {...props} fontWeight="medium" fontSize={fontSize} color={fontColor} />;
};

export const Button: React.FunctionComponent<StyledButtonProps> = ({
  children,
  fontSize,
  fontColor,
  ...rest
}) => {
  return (
    <StyledButton {...rest}>
      <ButtonText fontSize={fontSize} fontColor={fontColor}>
        {children}
      </ButtonText>
    </StyledButton>
  );
};
