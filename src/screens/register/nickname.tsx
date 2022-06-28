import { NicknameScreenProps } from "@navigation/types";
import { Button, Text, View } from "@components/atoms";
import React from "react";

export const NicknameScreen: React.FC<NicknameScreenProps> = ({ navigation }) => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>Nickname Screen</Text>
      <Button onPress={() => navigation.navigate("Category")}>Go to RegisterCategory</Button>
    </View>
  );
};
