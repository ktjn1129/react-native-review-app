import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MainTabNavigator } from "./MainTabNavigator";
import { AuthScreen } from "../screens/AuthScreen";

export const AppNavigator = () => {
  const user = null;

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};
