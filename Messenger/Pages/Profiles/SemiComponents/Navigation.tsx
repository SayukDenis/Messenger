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
import DialogueSettingsScreen from "../DialogueProfile/SettingsScreen/DialogueSettingsScreen";
import PermissionScreen from "../DialogueProfile/PermissionScreen/PermissionScreen";
import BranchesScreen from "./BranchesScreen/BranchesScreen";
import NewBranchScreen from "./BranchesScreen/NewBranchScreen/NewBranchScreen";
import NewAlbumScreen from "../DialogueProfile/NewAlbumScreen/NewAlbumScreen";
import GalleryScreen from "../DialogueProfile/NewAlbumScreen/GalleryScreen";
import { useFonts } from "expo-font";
import ChangeBranchParentScreen from "./BranchesScreen/ChangeBranchScreen/ChangeBranchParentScreen";
import Album from "../DialogueProfile/Album/Album";
import GalleryWhileAddingNewPhoto from "../DialogueProfile/Album/GalleryWhileAddingNewPhoto";
import AvatarsAndInfoScreen from "../DialogueProfile/AvatarsAndInfoScreen/AvatarsAndInfoScreen";
import ChangeBranchChildScreen from "./BranchesScreen/ChangeBranchScreen/ChangeBranchChildScreen";
import PhotoScreen from "../DialogueProfile/PhotoScreen/PhotoScreen";
import MainChannelScreen from "../ChannelProfile/MainChannelScreen/MainChannelScreen";
import SubscribersScreen from "../ChannelProfile/SubscribersScreen/SubscribersScreen";
import AddSubscriberScreen from "../ChannelProfile/SubscribersScreen/AddSubscriberScreen/AddSubscriberScreen";
import ChannelSettingsScreen from "../ChannelProfile/SettingsScreen/ChannelSettingsScreen";
import AuditLogScreen from "../ChannelProfile/AuditLogScreen/AuditLogScreen";
import RolesScreen from "../ChannelProfile/RoleScreen/RolesScreen";
import NewRoleScreen from "../ChannelProfile/RoleScreen/NewRoleScreen";
import PermissionRoleScreen from "../ChannelProfile/PermissionRoleScreen/PermissionRoleScreen";
import GroupSettingsScreen from "../GroupProfile/SettingsMenu/SettingsBranchesButton";
import ChangeRoleScreen from "../ChannelProfile/RoleScreen/ChangeRoleScreen";
import AddSubscriberRoleScreen from "../ChannelProfile/RoleScreen/AddSubscriberRoleScreen";

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
      <Stack.Screen name="MainUserScreen" component={MainUserScreen} />
      <Stack.Screen
        name="DialogueSettingsScreen"
        component={DialogueSettingsScreen}
      />
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
      <Stack.Screen name="Album" component={Album} />
      <Stack.Screen
        name="GalleryWhileAddingNewPhoto"
        component={GalleryWhileAddingNewPhoto}
      />
      <Stack.Screen
        name="AvatarsAndInfoScreen"
        component={AvatarsAndInfoScreen}
      />
      <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
    </Stack.Navigator>
  );
};

const GroupNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainGroupPage"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="MainGroupPage" component={MainGroupPage} />
      <Stack.Screen name="SettingsMenu" component={SettingsMenu} />
      <Stack.Screen
        name="GroupSettingsScreen"
        component={GroupSettingsScreen}
      />
      <Stack.Screen name="AuditLog" component={AuditLog} />
      <Stack.Screen name="BranchesScreen" component={BranchesScreen} />
      <Stack.Screen name="Role" component={Role} />
      <Stack.Screen name="EditGroup" component={EditGroup} />
      <Stack.Screen name="CreateRole" component={CreateRole} />
      <Stack.Screen name="RolePermission" component={RolePermission} />
      <Stack.Screen name="NewBranchScreen" component={NewBranchScreen} />
      <Stack.Screen
        name="ChangeBranchParentScreen"
        component={ChangeBranchParentScreen}
      />
      <Stack.Screen
        name="ChangeBranchChildScreen"
        component={ChangeBranchChildScreen}
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
      <Stack.Screen name="MainChannelScreen" component={MainChannelScreen} />
      <Stack.Screen name="SubscribersScreen" component={SubscribersScreen} />
      <Stack.Screen
        name="AddSubscriberScreen"
        component={AddSubscriberScreen}
      />
      <Stack.Screen
        name="ChannelSettingsScreen"
        component={ChannelSettingsScreen}
      />
      <Stack.Screen name="BranchesScreen" component={BranchesScreen} />
      <Stack.Screen name="NewBranchScreen" component={NewBranchScreen} />
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
      <Stack.Screen
        name="AddSubscriberRoleScreen"
        component={AddSubscriberRoleScreen}
      />
    </Stack.Navigator>
  );
};
