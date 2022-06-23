import { Button, Text, View } from "@components/atoms";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RegisterStackParamList } from "@navigation/RegisterNavigator";

type NicknameScreenNavigationProp = StackNavigationProp<RegisterStackParamList, "Nickname">;

interface NicknameScreenProps {
  navigation: NicknameScreenNavigationProp;
}

export const NicknameScreen: React.FC<NicknameScreenProps> = ({ navigation }) => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>Nickname Screen</Text>
      <Button onPress={() => navigation.navigate("Category")}>Go to RegisterCategory</Button>
    </View>
  );
};
