import React from "react";
import { ImageSourcePropType, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { width as styledWidth, height as styledHeight, space, SpaceProps } from "styled-system";

export type ImageProps = SpaceProps & {
  source: ImageSourcePropType;
  width: number;
  height: number;
  onClick?: () => void;
};

const StyledImage = styled.Image(space, styledWidth, styledHeight);

export const Image: React.FunctionComponent<ImageProps> = ({ source, width, height, onClick, ...rest }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <StyledImage source={source} width={width} height={height} {...rest} />
    </TouchableOpacity>
  );
};
