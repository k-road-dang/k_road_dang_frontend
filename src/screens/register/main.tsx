import { RegisterScreenProps } from "@navigation/types";
import { Button, Text, View } from "@components/atoms";
import React from "react";

export const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation, route }) => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>RegisterMain Screen</Text>
      <Button onPress={() => navigation.navigate("Nickname")}>Go to Register</Button>
    </View>
  );
};
