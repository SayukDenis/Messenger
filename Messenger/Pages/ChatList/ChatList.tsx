import Header from "./Components/Header";
import React from "react";
import Main from "./Components/Main";
import { LinearGradient } from "expo-linear-gradient";
import BackGroundGradientView from "../SemiComponents/BackGroundGradientView";
export const booleanForLogging:boolean=false;
interface ChatListProps{
  navigation:any
}
 const ChatList:React.FC<ChatListProps>=({navigation})=> {

  return (
    <BackGroundGradientView>
        <Header
          navigation={navigation}
        />
        <Main/>
    </BackGroundGradientView>
  );
}
export default ChatList


