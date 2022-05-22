import React from "react";
import styled from "styled-components/native";

import { variant } from "styled-system";

export type TextProps = {
  size?: "big" | "small";
  appearance?: "default" | "hint" | "disabled" | "alternative" | "red" | "green";
};

export const size = variant({
  prop: "size",
  variants: {
    big: {
      fontSize: "h1",
    },
    small: {
      fontSize: "h4",
    },
  },
});

export const appearance = variant({
  prop: "appearance",
  variants: {
    default: {
      color: "black",
    },
    hint: {
      color: "hint",
    },
    disabled: {
      color: "disabled",
    },
    red: {
      color: "red",
    },
    blue: {
      color: "blue",
    },
    green: {
      color: "green",
    },
  },
});

const StyledText = styled.Text<TextProps>(size, appearance);

export const Text: React.FunctionComponent<TextProps> = (props) => {
  return <StyledText {...props} />;
};
