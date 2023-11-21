import { Platform, StatusBar, View } from "react-native";
import { Text, StyleSheet, Dimensions } from "react-native";
import Header from "./Components/Header";

import { mySelfUser } from "./1HelpFullFolder/Initialization";
import React, { useState } from "react";
import Main from "./Components/Main";
import { LinearGradient } from "expo-linear-gradient";
interface ChatListProps{
  navigation:any
}
 const ChatList:React.FC<ChatListProps>=({navigation})=> {
  const [touchable, setTouchable] = useState<boolean>(false);
  const onPress = () => {
    setTouchable(!touchable);
  };

  return (
    <>
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        locations={[0.25, 0.5, 0.75]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Header
          mySelfUser={mySelfUser}
          onPress={onPress}
          isTouchableHeader={touchable}
          navigation={navigation}
        />
        <Main
          user={mySelfUser}
          onPressForTouchableHeader={onPress}
          isTouchableForHeader={touchable}
        />
      </LinearGradient>
    </>
  );
}
export default ChatList


