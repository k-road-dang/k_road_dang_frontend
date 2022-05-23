import React from "react";
import styled from "styled-components/native";

import { variant } from "styled-system";

export type TextProps = {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "s1" | "s2";
  appearance?: "default" | "hint" | "disabled" | "alternative" | "red" | "green";
};

export const size = variant({
  prop: "type",
  variants: {
    h1: {
      fontSize: "h1",
      fontWeight: "black",
    },
    h2: {
      fontSize: "h2",
      fontWeight: "medium",
    },
    h3: {
      fontSize: "h3",
      fontWeight: "medium",
    },
    h4: {
      fontSize: "h4",
      fontWeight: "medium",
    },
    h5: {
      fontSize: "h5",
      fontWeight: "regular",
    },
    h6: {
      fontSize: "h6",
      fontWeight: "medium",
    },
    s1: {
      fontSize: "s1",
      fontWeight: "regular",
    },
    s2: {
      fontSize: "s2",
      fontWeight: "regular",
    },
  },
});

export const appearance = variant({
  prop: "appearance",
  variants: {
    orange: {
      color: "main-orange",
    },
    yellow: {
      color: "main-yellow",
    },
    gray: {
      color: "font-gray",
    },
    example: {
      color: "font-example",
    },
    black: {
      color: "black",
    },
  },
});

const StyledText = styled.Text<TextProps>(size, appearance);

export const Text: React.FunctionComponent<TextProps> = (props) => {
  return <StyledText {...props} />;
};
