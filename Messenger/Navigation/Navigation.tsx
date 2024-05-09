import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationForSettings from "../Pages/Settings/NavigationForSettings";
import NavigationForAuthorization from "../Pages/Authorization/NavigationForAuthorization";
import { connect, useDispatch } from "react-redux";
import ChatListNavigation from "../Pages/ChatList/СhatListNavigation/ChatListNavigation";
import DialogueNavigation from "../Pages/Chats/Dialogue/DialogueNavigation/DialogueNavigation";
import { GroupNavigation } from "../Pages/Chats/Group/GroupNavigation/GroupNavigation";
import { ChannelNavigation } from "../Pages/Chats/Channel/ChannelNavigation/ChannelNavigation";
import {
  ChannelProfileNavigation,
  GroupProfileNavigation,
  UserProfileNavigation,
} from "../Pages/Profiles/SemiComponents/Navigation";
import { initialization } from "../Initialization/Initialization";
import { dataSource } from "../dao/local/database";
import { setFolderSelectedArray } from "../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import { setDialogues, setSelfProfileUser } from "../ReducersAndActions/UserReducersAndActions/Actions/UserActions";
import { Text, View } from "react-native";
import SelfProfile from "../dao/Models/SelfProfile";

export const Stack = createStackNavigator();

const Navigation = () => {

  const dispatch = useDispatch();

  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // const fetchData = async () => {
    //   await initialization()
    //   .then(spu => {
    //     console.log('INITIALIZATION COMPLETE', (spu[0] as SelfProfile).tabs[0].folders.map((_, index) => index === 0));
    //     dispatch(setFolderSelectedArray(
    //       (spu[0] as SelfProfile).tabs[0].folders.map(
    //         (_, index) => index === 0
    //       ),
    //     ));
    //     dispatch(setDialogues(spu[1]));
    //     dispatch(setSelfProfileUser(spu[0]));
    //     setTimeout(() => {
    //       setFetching(false);
    //     }, 1000);
    //   });
    //   // if (!dataSource.isInitialized) await dataSource.initialize();
    // };
    // fetchData();
    setFetching(false);
  }, []);

  return !fetching ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DialogueNavigation" // ChatListNavigation
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
  ) : (<View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    <Text>Fetching...</Text>
  </View>);
};
export default connect(null)(Navigation);
