import React from "react";
import styled from "styled-components/native";
import { space, SpaceProps } from "styled-system";
import { Image } from "@components/atoms";
import plus from "@assets/images/plus.png";

export type FloatingButtonProps = SpaceProps;

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

export const FloatingButton: React.FC<FloatingButtonProps> = ({ ...rest }) => {
  return (
    <StyledFloatingButton {...rest}>
      <Image source={plus} width={15} height={15} />
    </StyledFloatingButton>
  );
};
