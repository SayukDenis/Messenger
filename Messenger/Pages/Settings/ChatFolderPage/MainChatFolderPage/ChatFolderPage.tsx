import React from "react";
import { View, StyleSheet } from 'react-native';
import StyleChatFolder from "./StyleChatFolder";
import ChatFolderHeader from "./ChatFolderHeader/ChatFolderHeader";
import ChatFolderCenter from "./ChatFolderCenter/ChatFolderCenter";
import FolderSvg from "./SvgComponents/FoldersSvg";

const ChatFolderPage : React.FC<any> = ({ navigation })=>{
    return <View style = {StyleChatFolder.mainConteiner}>
        <ChatFolderHeader navigation ={navigation}/>
        <View style ={{alignItems:'center',marginTop:'3%'}}>
        <FolderSvg/>
        </View>
        <ChatFolderCenter  navigation ={navigation}/>
    </View>
}

export default ChatFolderPage;