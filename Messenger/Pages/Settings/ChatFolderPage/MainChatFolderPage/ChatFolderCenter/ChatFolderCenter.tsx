import React, { useEffect } from "react";
import { View,Text, TouchableOpacity, ScrollView } from "react-native";
import { useSelector, connect } from 'react-redux';
import StyleChatFolderCenter from "./StyleChatFolderCenter";
import AddButton from "../SvgComponents/AddButton";
import ContineButtForFolders from "../SvgComponents/ContinueButtonforFolders";

const mapStateToProps = (state) => {
  return({
  arrayOfFolderNames:  state.SettingsPagesReducers.AddNewFolder.listOfNewFolder,
})};

const ChatFolderCenter : React.FC<any> = ({ navigation })=>{
    let arrayOfFolderNames :string[] = useSelector((state :any) => state.SettingsPagesReducers.AddNewFolder.listOfNewFolder)
    let recomendedFolders : String[] = ["Personal chats", "Channels", "Groups"]
      return <View>
        {arrayOfFolderNames.length > 0 ? (
        <View>
            <Text style ={StyleChatFolderCenter.articleFolderTextStyle}>Folders</Text>
                    <TouchableOpacity style ={{ justifyContent:'flex-end'}}  onPress={() => navigation.navigate('AddFolderPage')} >
                        <View style ={StyleChatFolderCenter.newFodlerButton} ></View>
                        <View style ={ {position:'absolute',flexDirection:'row', marginLeft:'5%',width:"26%",height:"70%",alignItems:'center', paddingBottom:'1.5%'}}>
                          <View style ={{paddingLeft:"6%"}}><AddButton></AddButton></View>
                          <Text style={StyleChatFolderCenter.styleChatFolderText}>New Folder</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style ={StyleChatFolderCenter.foldersButt} >
                      <Text style={StyleChatFolderCenter.stylechatFolderButtonText}>All Chats</Text>
                      </TouchableOpacity>
                    {arrayOfFolderNames.map((item, index) => (
                    <TouchableOpacity key={index} style ={StyleChatFolderCenter.foldersButt} >
                      <Text style={StyleChatFolderCenter.stylechatFolderButtonText}>{item}</Text>
                      <ContineButtForFolders></ContineButtForFolders>
                      </TouchableOpacity>
                  ))}
                    <Text style ={StyleChatFolderCenter.articleFolderTextStyle}>Recomended folders</Text>
                    {recomendedFolders.map((item, index) => (
                    <TouchableOpacity key={index} style ={StyleChatFolderCenter.foldersButt} ><Text style={StyleChatFolderCenter.stylechatFolderButtonText}>{item}</Text><Text style={StyleChatFolderCenter.stylechatFolderButtonText}>+</Text></TouchableOpacity>
                  ))}
        </View>
      ) : (
        <View>
          <Text style ={StyleChatFolderCenter.articleFolderTextStyle}>Folders</Text>
                    <TouchableOpacity style ={{ justifyContent:'flex-end'}}  onPress={() => navigation.navigate('AddFolderPage')} >
                        <View style ={StyleChatFolderCenter.newFodlerButton} ></View>
                        <View style ={ {position:'absolute',flexDirection:'row', marginLeft:'5%',width:"26%",height:"70%",alignItems:'center', paddingBottom:'1.5%'}}>
                          <View style ={{paddingLeft:"6%"}}><AddButton></AddButton></View>
                          <Text style={StyleChatFolderCenter.styleChatFolderText}>New Folder</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style ={StyleChatFolderCenter.foldersButt} >
                      <Text style={StyleChatFolderCenter.stylechatFolderButtonText}>All Chats</Text>
                      <ContineButtForFolders></ContineButtForFolders>
                      </TouchableOpacity>
                      <Text style ={StyleChatFolderCenter.articleFolderTextStyle}>Recomended folders</Text>
                    {recomendedFolders.map((item, index) => (
                    <TouchableOpacity key={index} style ={StyleChatFolderCenter.foldersButt} ><Text style={StyleChatFolderCenter.stylechatFolderButtonText}>{item}</Text><Text style={StyleChatFolderCenter.stylechatFolderButtonText}>+</Text></TouchableOpacity>
                  ))}
        </View>
      )}
    </View>
}

export default connect(mapStateToProps)(ChatFolderCenter);