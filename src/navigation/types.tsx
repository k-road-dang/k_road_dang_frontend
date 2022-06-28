import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export enum CommunityScreens {
  Community = "Community",
}

export enum HomeScreens {
  Home = "Home",
}

export enum ProfileScreens {
  Profile = "Profile",
}

export enum RegisterScreens {
  Register = "Register",
  Nickname = "Nickname",
  Category = "Category",
  Birth = "Birth",
}

export enum RootScreens {
  Tab = "Tab",
  Register = "Register",
}

export enum TabScreens {
  Home = "Home",
  Community = "Community",
  Profile = "Profile",
}

export type CommunityStackParamList = {
  Community: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type RegisterStackParamList = {
  Register: undefined;
  Nickname: undefined;
  Category: undefined;
  Birth: undefined;
};

export type RootStackParamList = {
  Tab: undefined;
  Register: undefined;
};

export type TabStackParamList = {
  Home: undefined;
  Community: undefined;
  Profile: undefined;
};

export type CommunityScreenProps = {
  navigation: StackNavigationProp<CommunityStackParamList, CommunityScreens.Community>;
};

export type HomeScreenProps = {
  navigation: StackNavigationProp<HomeStackParamList, HomeScreens.Home>;
};

export type ProfileScreenProps = {
  navigation: StackNavigationProp<ProfileStackParamList, ProfileScreens.Profile>;
};

export type BirthScreenProps = {
  navigation: StackNavigationProp<RegisterStackParamList, RegisterScreens.Birth>;
};

export type CategoryScreenProps = {
  navigation: StackNavigationProp<RegisterStackParamList, RegisterScreens.Category>;
};

export type RegisterScreenProps = {
  route: RouteProp<RegisterStackParamList>;
  navigation: StackNavigationProp<RegisterStackParamList, RegisterScreens.Register>;
};

export type NicknameScreenProps = {
  navigation: StackNavigationProp<RegisterStackParamList, RegisterScreens.Nickname>;
};
