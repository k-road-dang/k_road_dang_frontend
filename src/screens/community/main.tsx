import { Text, View } from "@components/atoms";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { CommunityStackParamList } from "@navigation/CommunityNavigator";

type CommunityScreenNavigationProp = StackNavigationProp<CommunityStackParamList, "Community">;

interface CommunityScreenProps {
  navigation: CommunityScreenNavigationProp;
}

export const CommunityScreen: React.FC<CommunityScreenProps> = () => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>Community Screen</Text>
    </View>
  );
};
