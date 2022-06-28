import { Text, View } from "@components/atoms";
import React from "react";
import { CommunityScreenProps } from "@navigation/types";

export const CommunityScreen: React.FC<CommunityScreenProps> = () => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>Community Screen</Text>
    </View>
  );
};
