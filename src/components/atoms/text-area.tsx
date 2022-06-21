import React from "react";
import styled from "styled-components/native";
import { backgroundColor, space, SpaceProps, BackgroundProps } from "styled-system";

export type TextAreaProps = SpaceProps &
  BackgroundProps & {
    value?: string;
    placeholder?: string;
    onChangeText?: ((text: string) => void) | undefined;
  };

const StyledTextInput = styled.TextInput(space, backgroundColor);

export const TextArea: React.FunctionComponent<TextAreaProps> = ({
  value,
  placeholder,
  onChangeText,
  ...rest
}) => {
  return (
    <StyledTextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      multiline
      {...rest}
    />
  );
};
