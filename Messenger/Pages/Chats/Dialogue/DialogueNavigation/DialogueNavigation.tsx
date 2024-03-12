// DialogueNavigation.js
import { Stack } from "../../../../Navigation/Navigation";
import React from "react";
// import Dialogue from "../Dialogue";
import Dialogue from "../DialougeUsingClass";
import PinnedMessageScreen from "../../SemiComponents/Screens/PinnedMessageScreen";
import { useDispatch } from "react-redux";

const DialogueNavigation = ({route}:any) => {

  const dispatch = useDispatch();

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
          initialParams={{...route.params, dispatch}}
        />
        <Stack.Screen 
          name='PinnedMessages'
          component={PinnedMessageScreen}
          initialParams={{...route.params, dispatch}}
        />
      </Stack.Navigator>
    </>
  );
};

export default DialogueNavigation;
