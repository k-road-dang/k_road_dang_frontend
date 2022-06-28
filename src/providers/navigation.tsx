import React, { PropsWithChildren } from "react";
import { NavigationContainer } from "@react-navigation/native";

export const NavigationProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
