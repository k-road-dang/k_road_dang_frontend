import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "@navigation/TabNavigator";
import { RegisterNavigator } from "@navigation/RegisterNavigator";
import { RootStackParamList } from "@navigation/types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Tab" component={TabNavigator} />
      <RootStack.Screen name="Register" component={RegisterNavigator} />
    </RootStack.Navigator>
  );
};
