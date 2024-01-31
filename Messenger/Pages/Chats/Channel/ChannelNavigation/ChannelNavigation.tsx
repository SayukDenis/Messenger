import { Stack } from "../../../../Navigation/Navigation";
import React from "react";
import Channel from "../Channel";

const ChannelNavigation = ({route}:any) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Channel"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Channel"
          component={Channel}
          initialParams={route.params}
        />
        {/* <Stack.Screen 
          name='PinnedMessages'
          component={PinnedMessageScreen}
          initialParams={route.params}
        /> */}
      </Stack.Navigator>
    </>
  );
}