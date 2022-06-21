import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { space, SpaceProps } from "styled-system";
import { Image } from "@components/atoms";

export type FloatingButtonProps = SpaceProps & {
  children: ReactNode;
};

const StyledFloatingButton = styled.TouchableOpacity(
  {
    borderRadius: 50,
    backgroundColor: "black",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 16,
    bottom: 15,
  },
  space,
);

export const FloatingButton: React.FunctionComponent<FloatingButtonProps> = ({ ...rest }) => {
  return (
    <StyledFloatingButton {...rest}>
      {/* FIXME: change source (plus icon) */}
      <Image source={{ uri: "https://reactjs.org/logo-og.png" }} width={15} height={15} />
    </StyledFloatingButton>
  );
};
