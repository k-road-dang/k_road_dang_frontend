import { Text, View } from "@components/atoms";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "@navigation/HomeNavigator";

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, "Home">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>Home Screen</Text>
    </View>
  );
};
