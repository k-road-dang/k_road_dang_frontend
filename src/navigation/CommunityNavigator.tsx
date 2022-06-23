import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommunityScreen } from "@screens/community/main";

export type CommunityStackParamList = {
  Community: undefined;
};

const CommunityStack = createNativeStackNavigator<CommunityStackParamList>();

export const CommunityNavigator: React.FC = () => {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen name="Community" component={CommunityScreen} />
    </CommunityStack.Navigator>
  );
};
