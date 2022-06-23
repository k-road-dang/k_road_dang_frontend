import { Text, View } from "@components/atoms";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackParamList } from "@navigation/ProfileNavigator";

type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList, "Profile">;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>ProfileMain Screen</Text>
    </View>
  );
};
