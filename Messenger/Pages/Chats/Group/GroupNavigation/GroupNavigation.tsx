import { Stack } from "../../../../Navigation/Navigation";
import React from "react";
import Group from "../Group";

export const GroupNavigation = ({route}:any) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Group"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Group"
          component={Group}
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