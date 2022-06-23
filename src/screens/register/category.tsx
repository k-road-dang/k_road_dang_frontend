import { Text, View, Button } from "@components/atoms";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RegisterStackParamList } from "@navigation/RegisterNavigator";

type CategoryNavigationProps = StackNavigationProp<RegisterStackParamList, "Category">;

interface CategoryScreenProps {
  navigation: CategoryNavigationProps;
}

export const CategoryScreen: React.FC<CategoryScreenProps> = ({ navigation }) => {
  return (
    <View alignItems="center" justifyContent="center" flex={1}>
      <Text>Category Screen</Text>
      <Button onPress={() => navigation.navigate("Birth")}>Go to Register</Button>
    </View>
  );
};
