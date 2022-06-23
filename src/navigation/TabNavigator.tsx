import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "@navigation/HomeNavigator";
import { CommunityNavigator } from "@navigation/CommunityNavigator";
import { ProfileNavigator } from "@navigation/ProfileNavigator";

export type TabStackParamList = {
  Home: undefined;
  Community: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Community" component={CommunityNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};
