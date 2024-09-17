import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../types/navigation";
import { HomeScreen } from "./HomeScreen";
import { ShopScreen } from "./ShopScreen";

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: "#000" }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};
