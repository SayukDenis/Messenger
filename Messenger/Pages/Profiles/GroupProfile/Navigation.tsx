import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsMenu from "./SettingsMenu/SettingsMenu";
import EditGroup from "./EditGroup/EditGroup";
import AuditLog from "./AuditLog/AuditLog";
import Branches from "./Branches/Branches";
import Role from "./Role/Role";
import CreateRole from "./Role/CreateRole/CreateRole";
import RolePermission from "./Role/CreateRole/RolePermission/RolePermission";

const Stack = createStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SettingsMenu"
        screenOptions={{
          headerShown: false, // Приховуємо верхню шапку для всіх екранів
        }}
      >
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
