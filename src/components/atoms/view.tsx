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
  AlignSelfProps & {
    children?: ReactNode;
  };

const StyledView = styled.View(space, layout, typography, color, position, border, alignSelf);

export const View: React.FunctionComponent<ViewProps> = ({ children, ...rest }) => {
  return <StyledView {...rest}>{children}</StyledView>;
};
