import Header from "./Components/Header";
import React from "react";
import Main from "./Components/Main";
import { LinearGradient } from "expo-linear-gradient";
export const booleanForLogging:boolean=false;
interface ChatListProps{
  navigation:any
}
 const ChatList:React.FC<ChatListProps>=({navigation})=> {

  return (
    <>
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        locations={[0.25, 0.5, 0.75]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Header

          navigation={navigation}
        />
        <Main/>
      </LinearGradient>
    </>
  );
}
export default ChatList


