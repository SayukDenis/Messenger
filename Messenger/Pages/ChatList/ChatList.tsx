import { Platform, StatusBar, View } from "react-native";
import { Text, StyleSheet, Dimensions } from "react-native";
import Header from "./Components/Header";
import React, { useState } from "react";
import Main from "./Components/Main";
import { LinearGradient } from "expo-linear-gradient";
import { initialization } from "../../Initialization/Initialization";
import SelfProfile from "../../dao/Models/SelfProfile";
import { useSelector } from "react-redux";
interface ChatListProps{
  navigation:any
}
 const ChatList:React.FC<ChatListProps>=({navigation})=> {
  const [touchable, setTouchable] = useState<boolean>(false);
  const onPress = () => {
    setTouchable(!touchable);
  };
  //const selfProfile:SelfProfile=initialization();
 // console.log(selfProfile.tabs[1].folders[1].chats)
 const selfProfile=useSelector((state:any)=>{
    const self:SelfProfile=state.selfProfileUser;
    return self
 })
  console.log(selfProfile.nickname) 
  return (
    <>
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        locations={[0.25, 0.5, 0.75]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Header
          onPress={onPress}
          isTouchableHeader={touchable}
          navigation={navigation}
        />
        <Main
          onPressForTouchableHeader={onPress}
          isTouchableForHeader={touchable}
        />
      </LinearGradient>
    </>
  );
}
export default ChatList


