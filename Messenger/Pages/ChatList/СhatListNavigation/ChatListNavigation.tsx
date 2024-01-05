import { Stack } from "../../../Navigation/Navigation";
import React from "react";
import ChatList from "../ChatList";
import SearchForAllPages from "../Components/SearchForAllPages";

const ChatListNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="ChatList"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="SearchForAllPages" component={SearchForAllPages}/>
      </Stack.Navigator>
    </>
  );
};

export default ChatListNavigation