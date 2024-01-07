import React, { useEffect } from "react";
import { View,Text, TouchableOpacity, ScrollView } from "react-native";
import { useSelector, connect } from 'react-redux';
import StyleChatFolderCenter from "./StyleChatFolderCenter";
import AddButton from "../SvgComponents/AddButton";
import ButtonForSettings from "../../../../SemiComponents/ButtonForSettings";
import ButtonForAllChat from "./ComponentForAllChat/AllChatButton";
import RecommendFolderButt from "./ComponentForAllChat/RecommendFolderButt";

const mapStateToProps = (state :any) => {
  return({
  arrayOfFolderNames:  state.SettingsPagesReducers.AddNewFolder.listOfNewFolder,
})};

const ChatFolderCenter : React.FC<any> = ({ navigation })=>{
    let arrayOfFolderNames :string[] = useSelector((state :any) => state.SettingsPagesReducers.AddNewFolder.listOfNewFolder)
    let recomendedFolders : string[] = ["Personal chats", "Channels", "Groups"]
      return <View>
        {arrayOfFolderNames.length > 0 ? (
        <View>
            <Text style ={StyleChatFolderCenter.articleFolderTextStyle}>Folders</Text>
                    <TouchableOpacity style ={{ justifyContent:'flex-end',}}  onPress={() => navigation.navigate('AddFolderPage')} >
                        <View style ={StyleChatFolderCenter.newFodlerButton} ></View>
                        <View style ={ {position:'absolute',flexDirection:'row', marginLeft:'5%',width:"26%",height:"70%",alignItems:'center', paddingBottom:'1.5%'}}>
                          <View style ={{paddingLeft:"6%"}}><AddButton></AddButton></View>
                          <Text style={StyleChatFolderCenter.styleChatFolderText}>New Folder</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:'0.5%'}} >
                      <ButtonForAllChat text="All Chats"></ButtonForAllChat>
                      </TouchableOpacity>
                    {arrayOfFolderNames.map((item, index) => (
                    <TouchableOpacity style={{marginTop:"0.5%"}} key={index}  >
                      <ButtonForSettings text={item}></ButtonForSettings>
                      </TouchableOpacity>
                  ))}
                     <Text style ={StyleChatFolderCenter.articleFolderTextStyle}>Recomended folders</Text>
                    {recomendedFolders.map((item, index) => (
                    <TouchableOpacity style={{marginTop:"0.5%"}} key={index}  >
                    <RecommendFolderButt text={item}></RecommendFolderButt></TouchableOpacity>
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
                    <TouchableOpacity style={{marginTop:'0.5%'}} >
                      <ButtonForAllChat text="All Chats"></ButtonForAllChat>
                      </TouchableOpacity>
                      <Text style ={StyleChatFolderCenter.articleFolderTextStyle}>Recomended folders</Text>
                    {recomendedFolders.map((item, index) => (
                    <TouchableOpacity style={{marginTop:"0.5%"}} key={index}  >
                    <RecommendFolderButt text={item}></RecommendFolderButt></TouchableOpacity>
                  ))}
        </View>
      )}
    </View>
}

export default connect(mapStateToProps)(ChatFolderCenter);