import React from "react";
import { ThemeProvider, NavigationProvider } from "@providers";
import { RootNavigator } from "./src/navigation/RootNavigator";

const App = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <RootNavigator />
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
