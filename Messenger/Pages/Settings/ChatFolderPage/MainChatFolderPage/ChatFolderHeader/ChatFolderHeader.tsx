import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import StyleChatfolderHeader from "./StyleChatFolderHeader";

const ChatFolderHeader: React.FC<any> = ({ navigation })=>{
    return <View style ={StyleChatfolderHeader.header}>
       <View style ={StyleChatfolderHeader.chatFolderHeaderconteiner}>
            <TouchableOpacity onPress={()=>navigation.goBack()}><Text>but</Text></TouchableOpacity>
            <Text>Folders</Text>
            <TouchableOpacity><Text>Done</Text></TouchableOpacity>
       </View>
    </View>
}

export default ChatFolderHeader;