import React, { PropsWithChildren } from "react";
import { ThemeProvider as SyledThemeProvider } from "styled-components";
import theme from "@theme/theme";

export const ThemeProvider: React.FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => {
  return <SyledThemeProvider theme={theme}>{children}</SyledThemeProvider>;
};
