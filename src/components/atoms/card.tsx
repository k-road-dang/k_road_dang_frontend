import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { space, SpaceProps } from "styled-system";
import { palette } from "@theme/theme";

export type CardProps = SpaceProps & {
  children: ReactNode;
};

const StyledCard = styled.View(
  {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: palette["line-gray"],
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 15,
    elevation: 15,
  },
  space,
);

export const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};
