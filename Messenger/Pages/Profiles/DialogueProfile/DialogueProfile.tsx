// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainUserScreen from "./MainUserScreen/MainUserScreen.tsx";
import SettingsScreen from "./SettingsScreen/SettingsScreen.tsx";
import PermissionScreen from "./PermissionScreen/PermissionScreen.tsx";
import BranchesScreen from "./BranchesScreen/BranchesScreen.tsx";
import NewBranchScreen from "./BranchesScreen/NewBranchScreen/NewBranchScreen.tsx";
import Navigation from "./Navigation.tsx";

const Stack = createStackNavigator();

const DialogueProfile = () => {
  return <Navigation />;
};

export default DialogueProfile;
