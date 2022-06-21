import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components/native";
import { space, SpaceProps } from "styled-system";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { palette, paletteType } from "@theme/theme";

export type CheckBoxShape = "circle" | "square";

const colorItems: { color: paletteType; borderColor: paletteType }[] = [
  { color: "main-orange", borderColor: "line-gray" },
  { color: "main-yellow", borderColor: "line-gray" },
  { color: "main-black", borderColor: "line-gray" },
];

export type CheckBoxProps = SpaceProps & {
  size?: number;
  shape: CheckBoxShape;
  color: paletteType;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
};

const StyledCheckBox = styled(BouncyCheckbox)(space);

export const CheckBox: React.FunctionComponent<CheckBoxProps> = ({
  size = 25,
  shape,
  color,
  isChecked,
  setIsChecked,
  ...rest
}) => {
  const borderColor = colorItems.find((item) => item.color === color)?.borderColor || "box-gray";
  const borderRadius = shape === "circle" ? 50 : 0;

  return (
    <StyledCheckBox
      size={size}
      fillColor={palette[color]}
      iconStyle={{ borderColor: palette[borderColor], borderRadius }}
      onPress={() => setIsChecked(!isChecked)}
      {...rest}
    />
  );
};
