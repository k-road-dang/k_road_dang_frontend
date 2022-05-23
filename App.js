import React from "react";
import { View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Text } from "@components/atoms/text";
import { ThemeProvider } from "@providers";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <View>
        <Text type="h1" appearance="orange">
          히히dddddd
        </Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
