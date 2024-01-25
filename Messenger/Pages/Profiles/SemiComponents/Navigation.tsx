import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChooseAuthor from "../SemiComponents/AuthorChoose";
import MainScreen from "./Screens/MainScreen/MainScreen";
import SettingsMenu from "../GroupProfile/SettingsMenu/SettingsMenu";
import EditGroup from "../GroupProfile/EditGroup/EditGroup";
import AuditLog from "../GroupProfile/AuditLog/AuditLog";
import Role from "../GroupProfile/Role/Role";
import CreateRole from "../GroupProfile/Role/CreateRole/CreateRole";
import RolePermission from "../GroupProfile/Role/CreateRole/RolePermission/RolePermission";
import DialogueSettingsScreen from "../DialogueProfile/SettingsScreen/DialogueSettingsScreen";
import PermissionScreen from "../DialogueProfile/PermissionScreen/PermissionScreen";
import BranchesScreen from "./Screens/BranchesScreen/BranchesScreen";
import NewBranchScreen from "./Screens/BranchesScreen/NewBranchScreen/NewBranchScreen";
import NewAlbumScreen from "./Screens/NewAlbumScreen/NewAlbumScreen";
import GalleryScreen from "./Screens/NewAlbumScreen/GalleryScreen";
import { useFonts } from "expo-font";
import ChangeBranchParentScreen from "./Screens/BranchesScreen/ChangeBranchScreen/ChangeBranchParentScreen";
import AlbumScreen from "./Screens/AlbumScreen/AlbumScreen";
import GalleryWhileAddingNewPhoto from "./Screens/AlbumScreen/GalleryWhileAddingNewPhoto";
import AvatarsAndInfoScreen from "../DialogueProfile/AvatarsAndInfoScreen/AvatarsAndInfoScreen";
import ChangeBranchChildScreen from "./Screens/BranchesScreen/ChangeBranchScreen/ChangeBranchChildScreen";
import PhotoScreen from "./Screens/PhotoScreen/PhotoScreen";
import SubscribersScreen from "../ChannelProfile/SubscribersScreen/SubscribersScreen";
import ChannelSettingsScreen from "../ChannelProfile/SettingsScreen/ChannelSettingsScreen";
import AuditLogScreen from "../ChannelProfile/AuditLogScreen/AuditLogScreen";
import RolesScreen from "../ChannelProfile/RoleScreen/RolesScreen";
import NewRoleScreen from "../ChannelProfile/RoleScreen/NewRoleScreen";
import PermissionRoleScreen from "../ChannelProfile/PermissionRoleScreen/PermissionRoleScreen";
import GroupSettingsScreen from "../GroupProfile/SettingsMenu/SettingsBranchesButton";
import ChangeRoleScreen from "../ChannelProfile/RoleScreen/ChangeRoleScreen";
import ForwardToChatsScreen from "./Screens/ForwardToChatsScreen/ForwardToChatsScreen";

const Stack = createStackNavigator();

export default function StartPage() {
  const [dataLoaded] = useFonts({
    "JacquesFrancois-Regular": require("./Assets/JacquesFrancois-Regular.ttf"),
    "Rubik-Regular": require("./Assets/Rubik-VariableFont_wght.ttf"),
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
        <Stack.Screen name="GroupNavigation" component={GroupNavigation} />
        <Stack.Screen name="UserNavigation" component={UserNavigation} />
        <Stack.Screen name="ChannelNavigation" component={ChannelNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainUserScreen"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="MainUserScreen" component={MainScreen} />
      <Stack.Screen name="SettingsScreen" component={DialogueSettingsScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      <Stack.Screen name="BranchesScreen" component={BranchesScreen} />
      <Stack.Screen name="NewBranchScreen" component={NewBranchScreen} />
      <Stack.Screen name="NewAlbumScreen" component={NewAlbumScreen} />
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      <Stack.Screen
        name="ChangeBranchParentScreen"
        component={ChangeBranchParentScreen}
      />
      <Stack.Screen
        name="ChangeBranchChildScreen"
        component={ChangeBranchChildScreen}
      />
      <Stack.Screen name="Album" component={AlbumScreen} />
      <Stack.Screen
        name="GalleryWhileAddingNewPhoto"
        component={GalleryWhileAddingNewPhoto}
      />
      <Stack.Screen
        name="AvatarsAndInfoScreen"
        component={AvatarsAndInfoScreen}
      />
      <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
      <Stack.Screen
        name="ForwardToChatsScreen"
        component={ForwardToChatsScreen}
      />
    </Stack.Navigator>
  );
};

const GroupNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainGroupScreen"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="MainGroupScreen" component={MainScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsMenu} />
      <Stack.Screen
        name="GroupSettingsScreen"
        component={GroupSettingsScreen}
      />
      <Stack.Screen name="Album" component={AlbumScreen} />
      <Stack.Screen name="NewAlbumScreen" component={NewAlbumScreen} />
      <Stack.Screen name="AuditLog" component={AuditLog} />
      <Stack.Screen name="BranchesScreen" component={BranchesScreen} />
      <Stack.Screen name="Role" component={Role} />
      <Stack.Screen name="EditGroup" component={EditGroup} />
      <Stack.Screen name="CreateRole" component={CreateRole} />
      <Stack.Screen name="RolePermission" component={RolePermission} />
      <Stack.Screen name="NewBranchScreen" component={NewBranchScreen} />
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      <Stack.Screen
        name="ChangeBranchParentScreen"
        component={ChangeBranchParentScreen}
      />
      <Stack.Screen
        name="ChangeBranchChildScreen"
        component={ChangeBranchChildScreen}
      />
      <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
      <Stack.Screen
        name="GalleryWhileAddingNewPhoto"
        component={GalleryWhileAddingNewPhoto}
      />
      <Stack.Screen
        name="ForwardToChatsScreen"
        component={ForwardToChatsScreen}
      />
    </Stack.Navigator>
  );
};

const ChannelNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainChannelScreen"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="MainChannelScreen" component={MainScreen} />
      <Stack.Screen name="SubscribersScreen" component={SubscribersScreen} />
      <Stack.Screen
        name="ForwardToChatsScreen"
        component={ForwardToChatsScreen}
      />
      <Stack.Screen name="Album" component={AlbumScreen} />
      <Stack.Screen name="NewAlbumScreen" component={NewAlbumScreen} />
      <Stack.Screen name="SettingsScreen" component={ChannelSettingsScreen} />
      <Stack.Screen name="BranchesScreen" component={BranchesScreen} />
      <Stack.Screen name="NewBranchScreen" component={NewBranchScreen} />
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      <Stack.Screen
        name="ChangeBranchParentScreen"
        component={ChangeBranchParentScreen}
      />
      <Stack.Screen
        name="ChangeBranchChildScreen"
        component={ChangeBranchChildScreen}
      />
      <Stack.Screen name="AuditLogScreen" component={AuditLogScreen} />
      <Stack.Screen name="RolesScreen" component={RolesScreen} />
      <Stack.Screen name="NewRoleScreen" component={NewRoleScreen} />
      <Stack.Screen
        name="PermissionRoleScreen"
        component={PermissionRoleScreen}
      />
      <Stack.Screen name="ChangeRoleScreen" component={ChangeRoleScreen} />
      <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
      <Stack.Screen
        name="GalleryWhileAddingNewPhoto"
        component={GalleryWhileAddingNewPhoto}
      />
    </Stack.Navigator>
  );
};
