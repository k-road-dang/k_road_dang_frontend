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
  JustifyItemsProps,
  JustifyContentProps,
  AlignItemsProps,
  alignItems,
  FlexProps,
  flex,
} from "styled-system";
import styled from "styled-components/native";

export type ViewProps = SpaceProps &
  JustifyItemsProps &
  JustifyContentProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  PositionProps &
  BorderProps &
  AlignSelfProps &
  AlignItemsProps &
  FlexProps & {
    children?: ReactNode;
  };

const StyledView = styled.View(
  space,
  layout,
  typography,
  color,
  position,
  border,
  alignSelf,
  alignItems,
  flex,
);

export const View: React.FC<ViewProps> = ({ children, ...rest }) => {
  return <StyledView {...rest}>{children}</StyledView>;
};
