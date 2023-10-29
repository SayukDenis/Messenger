import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { footerstyles } from "../../Styles/FooterStyle";

import Chat from "../../1HelpFullFolder/Chat";

interface ChatModalWindowProps {
  chat:Chat
  positionY: number;
  positionYInContainer: number;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ChatModalWindow: React.FC<ChatModalWindowProps> = ({
  chat,
  positionY,
  positionYInContainer,
}) => {
    const getStylePosition=(position:number)=>{
        if(position<screenWidth*0.65){
            return {left:position}
        }
        else if(position>screenWidth*0.65){
            return {right:screenWidth-position}
        }
        return {}
    }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
      ]}
    >
      <View style={footerstyles.containerForModalWindowText}>
        <Text style={footerstyles.modalWindowText}>Add chat</Text>
      </View>
      <View style={footerstyles.containerForModalWindowText}>
        <Text style={footerstyles.modalWindowText}>Edit folder</Text>
      </View>
      <View style={footerstyles.containerForModalWindowText}>
        <Text style={footerstyles.modalWindowText}>On notifications</Text>
      </View>
      <View style={footerstyles.containerForModalWindowText}>
        <Text style={footerstyles.modalWindowText}>Sort folders</Text>
      </View>
      <View style={footerstyles.containerForModalWindowText}>
        <Text style={[footerstyles.modalWindowText, { color: "red" }]}>
          Delete
        </Text>
      </View>
      <View
        style={[
          footerstyles.triangle,
        ]}
      />
    </TouchableOpacity>
  );
};

export default ChatModalWindow;
