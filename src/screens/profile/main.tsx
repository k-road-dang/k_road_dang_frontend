import { Text, View } from "@components/atoms";
import React from "react";
import { ProfileScreenProps } from "@navigation/types";

export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>ProfileMain Screen</Text>
    </View>
  );
};
