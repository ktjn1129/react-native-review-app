import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MainTabNavigator } from "./MainTabNavigator";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};
