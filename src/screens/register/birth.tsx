import { Text, View, Button } from "@components/atoms";
import React from "react";
import { BirthScreenProps } from "@navigation/types";

export const BirthScreen: React.FC<BirthScreenProps> = ({ navigation }) => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>Birth Screen</Text>
      <Button onPress={() => navigation.navigate("Nickname")}>Go to Register</Button>
    </View>
  );
};
