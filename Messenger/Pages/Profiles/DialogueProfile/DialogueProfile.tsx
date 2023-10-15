// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainUserScreen from "./MainUserScreen/MainUserScreen.tsx";
import SettingsScreen from "./SettingsScreen/SettingsScreen.tsx";
import PermissionScreen from "./PermissionScreen/PermissionScreen.tsx";

const Stack = createStackNavigator();

const DialogueProfile = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DialogueProfile;
