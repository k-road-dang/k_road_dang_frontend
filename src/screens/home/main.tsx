import { Text, View } from "@components/atoms";
import React from "react";
import { HomeScreenProps } from "@navigation/types";

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>Home Screen</Text>
    </View>
  );
};
