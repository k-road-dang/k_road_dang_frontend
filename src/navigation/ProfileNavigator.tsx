import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "@screens/profile/main";
import { ProfileScreens, ProfileStackParamList } from "@navigation/types";

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator: React.FC = () => {
  return (
    <ProfileStack.Navigator initialRouteName={ProfileScreens.Profile}>
      <ProfileStack.Screen name={ProfileScreens.Profile} component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
