import React, { ReactNode } from "react";
import {
  space,
  layout,
  typography,
  color,
  position,
  border,
  alignSelf,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  PositionProps,
  BorderProps,
  AlignSelfProps,
} from "styled-system";
import styled from "styled-components/native";

export type TouchableOpacityProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  PositionProps &
  BorderProps &
  AlignSelfProps & {
    children?: ReactNode;
    onPress?: () => void;
  };

const StyledTouchableOpacity = styled.TouchableOpacity(
  space,
  layout,
  typography,
  color,
  position,
  border,
  alignSelf,
);

export const TouchableOpacity: React.FC<TouchableOpacityProps> = ({ children, onPress, ...rest }) => {
  return (
    <StyledTouchableOpacity onPress={onPress} {...rest}>
      {children}
    </StyledTouchableOpacity>
  );
};
