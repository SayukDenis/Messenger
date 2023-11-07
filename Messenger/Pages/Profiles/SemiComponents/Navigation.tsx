import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainGroupPage from "../GroupProfile/MainGroupPage/MainGroupPage";
import ChooseAuthor from "../SemiComponents/AuthorChoose";
import MainUserScreen from "../DialogueProfile/MainUserScreen/MainUserScreen";
import SettingsMenu from "../GroupProfile/SettingsMenu/SettingsMenu";
import EditGroup from "../GroupProfile/EditGroup/EditGroup";
import AuditLog from "../GroupProfile/AuditLog/AuditLog";
import Branches from "../GroupProfile/Branches/Branches";
import Role from "../GroupProfile/Role/Role";
import CreateRole from "../GroupProfile/Role/CreateRole/CreateRole";
import RolePermission from "../GroupProfile/Role/CreateRole/RolePermission/RolePermission";
import SettingsScreen from "../DialogueProfile/SettingsScreen/SettingsScreen";
import PermissionScreen from "../DialogueProfile/PermissionScreen/PermissionScreen";
import BranchesScreen from "../DialogueProfile/BranchesScreen/BranchesScreen";
import NewBranchScreen from "../DialogueProfile/BranchesScreen/NewBranchScreen/NewBranchScreen";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();
export default function StartPage() {
  const [dataLoaded] = useFonts({
    "JacquesFrancois-Regular": require("./Assets/JacquesFrancois-Regular.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ChooseAuthor"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="ChooseAuthor" component={ChooseAuthor} />
        <Stack.Screen name="MainGroupPage" component={MainGroupPage} />
        <Stack.Screen name="MainUserScreen" component={MainUserScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
        <Stack.Screen name="BranchesScreen" component={BranchesScreen} />
        <Stack.Screen name="NewBranchScreen" component={NewBranchScreen} />
        <Stack.Screen name="SettingsMenu" component={SettingsMenu} />
        <Stack.Screen name="AuditLog" component={AuditLog} />
        <Stack.Screen name="Branches" component={Branches} />
        <Stack.Screen name="Role" component={Role} />
        <Stack.Screen name="EditGroup" component={EditGroup} />
        <Stack.Screen name="CreateRole" component={CreateRole} />
        <Stack.Screen name="RolePermission" component={RolePermission} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
