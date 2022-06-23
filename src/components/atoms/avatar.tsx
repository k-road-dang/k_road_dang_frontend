import React from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import { width as styledWidth, height as styledHeight, space, SpaceProps } from "styled-system";

export type AvatarProps = SpaceProps & {
  source: ImageSourcePropType;
  size: number;
};

const StyledAvatar = styled.Image({ borderRadius: 50 }, space, styledWidth, styledHeight);

export const Avatar: React.FC<AvatarProps> = ({ source, size, ...rest }) => {
  return <StyledAvatar source={source} width={size} height={size} {...rest} />;
};
