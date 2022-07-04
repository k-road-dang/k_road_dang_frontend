import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { space, SpaceProps, variant } from "styled-system";

export type DividerColor = "gray";

export type DividerProps = SpaceProps & {
  color: DividerColor;
  children?: ReactNode;
};

const color = variant({
  prop: "color",
  variants: {
    gray: {
      borderBottomColor: "line-gray",
    },
  },
});

const StyledDivider = styled.View(
  {
    borderBottomWidth: 1,
  },
  space,
  color,
);

export const Divider: React.FC<DividerProps> = ({ ...rest }) => {
  return <StyledDivider {...rest} />;
};
