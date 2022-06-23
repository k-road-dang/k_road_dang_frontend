import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NicknameScreen } from "@screens/register/nickname";
import { CategoryScreen } from "@screens/register/category";
import { RegisterScreen } from "@screens/register/main";
import { BirthScreen } from "@screens/register/birth";

export type RegisterStackParamList = {
  Register: undefined;
  Nickname: undefined;
  Category: undefined;
  Birth: undefined;
};

const RegisterStack = createNativeStackNavigator<RegisterStackParamList>();

export const RegisterNavigator: React.FC = () => {
  return (
    <RegisterStack.Navigator initialRouteName="Register">
      <RegisterStack.Screen name="Register" component={RegisterScreen} />
      <RegisterStack.Screen name="Nickname" component={NicknameScreen} />
      <RegisterStack.Screen name="Category" component={CategoryScreen} />
      <RegisterStack.Screen name="Birth" component={BirthScreen} />
    </RegisterStack.Navigator>
  );
};
