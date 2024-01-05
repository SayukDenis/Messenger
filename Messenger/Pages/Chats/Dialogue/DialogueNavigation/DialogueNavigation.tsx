import { Stack } from "../../../../Navigation/Navigation";
import React from "react";
import Dialogue from "../Dialogue";

const ChatListNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Dialogue"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dialogue" component={Dialogue} />
      </Stack.Navigator>
    </>
  );
};

export default ChatListNavigation