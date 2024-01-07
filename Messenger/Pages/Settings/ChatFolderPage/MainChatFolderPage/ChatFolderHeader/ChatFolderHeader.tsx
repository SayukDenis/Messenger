import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import StyleChatfolderHeader from "./StyleChatFolderHeader";
import BackButton from "../../../../SemiComponents/BackButton";

const ChatFolderHeader: React.FC<any> = ({ navigation })=>{
    return <View style ={StyleChatfolderHeader.chatFolderHeaderconteiner}>
            <TouchableOpacity style ={StyleChatfolderHeader.backButt} onPress={()=>navigation.goBack()}><BackButton></BackButton></TouchableOpacity>
            <View style={StyleChatfolderHeader.articleOfPage}><Text style ={StyleChatfolderHeader.arcticleStyleText}>Folders</Text></View>
            <TouchableOpacity style ={StyleChatfolderHeader.DoneButton}><Text>Done</Text></TouchableOpacity>
       </View>
}

export default ChatFolderHeader;