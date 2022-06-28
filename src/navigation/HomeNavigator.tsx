import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@screens/home/main";
import { HomeScreens, HomeStackParamList } from "@navigation/types";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator initialRouteName={HomeScreens.Home}>
      <HomeStack.Screen name={HomeScreens.Home} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
