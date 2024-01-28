// DialogueNavigation.js
import { Stack } from "../../../../Navigation/Navigation";
import React from "react";
import Dialogue from "../Dialogue";
import PinnedMessageScreen from "../Screens/PinnedMessageScreen";

const DialogueNavigation = ({route}:any) => {

  return (
    <>
      <Stack.Navigator
        initialRouteName="Dialogue"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Dialogue"
          component={Dialogue}
          initialParams={route.params}
        />
        <Stack.Screen 
          name='PinnedMessages'
          component={PinnedMessageScreen}
          initialParams={route.params}
        />
      </Stack.Navigator>
    </>
  );
};

export default DialogueNavigation;
