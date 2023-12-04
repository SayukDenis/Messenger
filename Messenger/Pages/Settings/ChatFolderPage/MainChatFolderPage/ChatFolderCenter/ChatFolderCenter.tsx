import React, { useEffect } from "react";
import { View,Text, TouchableOpacity, ScrollView } from "react-native";
import { useSelector, connect } from 'react-redux';
import StyleChatFolderCenter from "./StyleChatFolderCenter";

const mapStateToProps = (state) => {
  return({
  arrayOfFolderNames:  state.SettingsPagesReducers.AddNewFolder.listOfNewFolder,
})};

const ChatFolderCenter : React.FC<any> = ({ navigation })=>{
    let arrayOfFolderNames :string[] = useSelector((state :any) => state.SettingsPagesReducers.AddNewFolder.listOfNewFolder)
    let recomendedFolders : String[] = ["Personal chats", "Channels", "Groups"]
      return <ScrollView>
        <Text style ={StyleChatFolderCenter.articleFolderTextStyle}>Folders</Text>
        <TouchableOpacity style ={StyleChatFolderCenter.newFodlerButton} onPress={() => navigation.navigate('AddFolderPage')} ><Text style={StyleChatFolderCenter.styleChatFolderText}>+</Text><Text style={StyleChatFolderCenter.styleChatFolderText}>New Folder</Text></TouchableOpacity>
        {arrayOfFolderNames.map((item, index) => (
        <TouchableOpacity key={index} style ={StyleChatFolderCenter.foldersButt} ><Text style={StyleChatFolderCenter.stylechatFolderButtonText}>{item}</Text></TouchableOpacity>
      ))}
        <Text style ={StyleChatFolderCenter.articleFolderTextStyle}>Recomended folders</Text>
        {recomendedFolders.map((item, index) => (
        <TouchableOpacity key={index} style ={StyleChatFolderCenter.foldersButt} ><Text style={StyleChatFolderCenter.stylechatFolderButtonText}>{item}</Text><Text style={StyleChatFolderCenter.stylechatFolderButtonText}>+</Text></TouchableOpacity>
      ))}
    </ScrollView>
}

export default connect(mapStateToProps)(ChatFolderCenter);