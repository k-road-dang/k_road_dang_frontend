import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommunityScreen } from "@screens/community/main";
import { CommunityScreens, CommunityStackParamList } from "@navigation/types";

const CommunityStack = createNativeStackNavigator<CommunityStackParamList>();

export const CommunityNavigator: React.FC = () => {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen name={CommunityScreens.Community} component={CommunityScreen} />
    </CommunityStack.Navigator>
  );
};
