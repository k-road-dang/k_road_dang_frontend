import { Button, Text, View } from "@components/atoms";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RegisterStackParamList } from "@navigation/RegisterNavigator";
import { RouteProp } from "@react-navigation/native";

interface RegisterScreenProps<T extends keyof RegisterStackParamList> {
  route: RouteProp<RegisterStackParamList, T>;
  navigation: StackNavigationProp<RegisterStackParamList>;
}

export const RegisterScreen: React.FC<RegisterScreenProps<"Register">> = ({ navigation, route }) => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>RegisterMain Screen</Text>
      <Button onPress={() => navigation.navigate("Nickname")}>Go to Register</Button>
    </View>
  );
};
