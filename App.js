import React from "react";
import { View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Text } from "@components/atoms/text";
import { ThemeProvider } from "./src/providers";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <View>
        <Text size="big" appearance="hint">
          히히dddddd
        </Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
