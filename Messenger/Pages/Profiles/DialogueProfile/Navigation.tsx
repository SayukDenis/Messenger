// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainUserScreen from "./MainUserScreen/MainUserScreen.tsx";
import SettingsScreen from "./SettingsScreen/SettingsScreen.tsx";
import PermissionScreen from "./PermissionScreen/PermissionScreen.tsx";
import BranchesScreen from "./BranchesScreen/BranchesScreen.tsx";
import NewBranchScreen from "./BranchesScreen/NewBranchScreen/NewBranchScreen.tsx";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainUserScreen"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="MainUserScreen" component={MainUserScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
        <Stack.Screen name="BranchesScreen" component={BranchesScreen} />
        <Stack.Screen name="NewBranchScreen" component={NewBranchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
