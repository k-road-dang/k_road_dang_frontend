import React, { ReactNode, useCallback } from "react";
import styled from "styled-components/native";
import { backgroundColor, space, SpaceProps, variant } from "styled-system";
import { Image } from "@components/atoms";

export type TextInputVariant = "line" | "box";

export type TextInputProps = SpaceProps & {
  children?: ReactNode;
  value?: string;
  placeholder?: string;
  onChangeText?: ((text: string) => void) | undefined;
};

const appearance = variant({
  prop: "appearance",
  variants: {
    line: {
      borderBottomColor: "line-gray",
      borderBottomWidth: 1,
      fontSize: "h5",
      pb: "11px",
    },
    box: {
      bg: "box-gray",
      fontSize: "h5",
      py: "9px",
      px: "10px",
      borderRadius: "4px",
    },
  },
});

const StyledTextInput = styled.TextInput(space, backgroundColor);
const StyledTextInputView = styled.View(space, appearance, {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const TextInput: React.FunctionComponent<TextInputProps> = ({
  value,
  placeholder,
  onChangeText,
  ...rest
}) => {
  const handleImagePress = useCallback(() => {
    onChangeText?.("");
  }, [onChangeText]);

  return (
    <StyledTextInputView {...rest}>
      <StyledTextInput value={value} placeholder={placeholder} onChangeText={onChangeText} />
      {value ? (
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          width={16}
          height={16}
          onPress={handleImagePress}
        />
      ) : null}
    </StyledTextInputView>
  );
};
