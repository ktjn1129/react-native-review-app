import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { HomeStackNavigator } from "../screens/HomeStackNavigator";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};
