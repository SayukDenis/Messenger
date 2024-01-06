// DialogueNavigation.js
import { Stack } from "../../../../Navigation/Navigation";
import React from "react";
import Dialogue from "../Dialogue";

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
      </Stack.Navigator>
    </>
  );
};

export default DialogueNavigation;
