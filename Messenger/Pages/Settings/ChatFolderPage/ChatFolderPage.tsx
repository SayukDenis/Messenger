import React from "react";
import { View } from 'react-native';
import StyleChatFolder from "./StyleChatFolder";
import FolderSvg from "./SvgComponents/FoldersSvg";

const ChatFolderPage =() =>{
    return <View style = {StyleChatFolder.mainConteiner}>
        <FolderSvg/>
    </View>
}

export default ChatFolderPage;