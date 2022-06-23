import React from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import { width as styledWidth, height as styledHeight, space, SpaceProps } from "styled-system";
import { TouchableOpacity } from "@components/atoms";

export type ImageProps = SpaceProps & {
  source: ImageSourcePropType;
  width: number;
  height: number;
  onPress?: () => void;
};

const StyledImage = styled.Image(space, styledWidth, styledHeight);

export const Image: React.FC<ImageProps> = ({ source, width, height, onPress, ...rest }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledImage source={source} width={width} height={height} {...rest} />
    </TouchableOpacity>
  );
};
