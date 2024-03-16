import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationForSettings from "../Pages/Settings/NavigationForSettings";
import NavigationForAuthorization from "../Pages/Authorization/NavigationForAuthorization";
import { connect } from "react-redux";
import ChatListNavigation from "../Pages/ChatList/СhatListNavigation/ChatListNavigation";
import DialogueNavigation from "../Pages/Chats/Dialogue/DialogueNavigation/DialogueNavigation";
import { GroupNavigation } from "../Pages/Chats/Group/GroupNavigation/GroupNavigation";
import { ChannelNavigation } from "../Pages/Chats/Channel/ChannelNavigation/ChannelNavigation";
import {
  ChannelProfileNavigation,
  GroupProfileNavigation,
  UserProfileNavigation,
} from "../Pages/Profiles/SemiComponents/Navigation";

export const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ChatListNavigation"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="ChatListNavigation"
          component={ChatListNavigation}
        />
        <Stack.Screen
          name="NavigationForSettings"
          component={NavigationForSettings}
        />
        <Stack.Screen
          name="NavigationForAuthorization"
          component={NavigationForAuthorization}
        />
        <Stack.Screen
          name="DialogueNavigation"
          component={DialogueNavigation}
        />
        <Stack.Screen name="ChannelNavigation" component={ChannelNavigation} />
        <Stack.Screen name="GroupNavigation" component={GroupNavigation} />
        <Stack.Screen
          name="UserProfileNavigation"
          component={UserProfileNavigation}
        />
        <Stack.Screen
          name="ChannelProfileNavigation"
          component={ChannelProfileNavigation}
        />
        <Stack.Screen
          name="GroupProfileNavigation"
          component={GroupProfileNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default connect(null)(Navigation);
