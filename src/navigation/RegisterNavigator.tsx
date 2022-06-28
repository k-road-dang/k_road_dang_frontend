import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NicknameScreen } from "@screens/register/nickname";
import { CategoryScreen } from "@screens/register/category";
import { RegisterScreen } from "@screens/register/main";
import { BirthScreen } from "@screens/register/birth";
import { RegisterScreens, RegisterStackParamList } from "@navigation/types";

const RegisterStack = createNativeStackNavigator<RegisterStackParamList>();

export const RegisterNavigator: React.FC = () => {
  return (
    <RegisterStack.Navigator initialRouteName={RegisterScreens.Register}>
      <RegisterStack.Screen name={RegisterScreens.Register} component={RegisterScreen} />
      <RegisterStack.Screen name={RegisterScreens.Nickname} component={NicknameScreen} />
      <RegisterStack.Screen name={RegisterScreens.Category} component={CategoryScreen} />
      <RegisterStack.Screen name={RegisterScreens.Birth} component={BirthScreen} />
    </RegisterStack.Navigator>
  );
};
