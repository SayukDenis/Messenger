import React, { useEffect } from "react";
import { View,Text, TouchableOpacity, ScrollView } from "react-native";
import { useSelector, connect, useDispatch } from 'react-redux';
import StyleChatFolderCenter from "./StyleChatFolderCenter";
import AddButton from "../SvgComponents/AddButton";
import ButtonForSettings from "../../../../SemiComponents/ButtonForSettings";
import ButtonForAllChat from "./ComponentForAllChat/AllChatButton";
import RecommendFolderButt from "./ComponentForAllChat/RecommendFolderButt";
import { addNewFolder, removeRecomendedFolder } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import ChatFolderButtComp from "./ComponentForAllChat/CharFollderChatsComp";
import { RemoveFolderFromList } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
interface Folder{
  nameOfFolder: string;
  chats: string[];
  listofexeptions:string[]
}

const mapStateToProps = (state :any) => {
  return({
  arrayOfFolderNames:  state.SettingsPagesReducers.AddNewFolder.listOfNewFolder,
  recomendedFolders: state.SettingsPagesReducers.AddRecomendedFoldert.recomdendedFolders,
})};


const ChatFolderCenter : React.FC<any> = ({ navigation })=>{
    const dispatch = useDispatch();
    let arrayOfFolderNames :Folder[] = useSelector((state :any) => state.SettingsPagesReducers.AddNewFolder.listOfNewFolder);
    //
    if (arrayOfFolderNames.length ==1  && arrayOfFolderNames[0].nameOfFolder == null) {
        dispatch(RemoveFolderFromList(arrayOfFolderNames[0].nameOfFolder));
    }
    //костиль який треба прибрати
    console.log( useSelector((state :any) => state.SettingsPagesReducers.AddNewFolder.listOfNewFolder));
    let recomendedFolders : string[] = useSelector ((state:any)=> state.SettingsPagesReducers.AddRecomendedFoldert.recomdendedFolders);
    
    useEffect(()=>{
      recomendedFolders =recomendedFolders.sort();
    },[recomendedFolders]);

    let counerOfGroups : number = useSelector ((state:any)=> state.SettingsPagesReducers.AddRecomendedFoldert.numberOfRecommendedFolders)
    const addItem = (nameFolder: string) => {
      if (nameFolder.trim() !== "") {
        dispatch(removeRecomendedFolder(nameFolder));
        dispatch(addNewFolder(nameFolder));
      }
    };
      return <View>
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
                  {arrayOfFolderNames.map((item, index) => (
                    <TouchableOpacity  onPress={() => navigation.navigate("AddNewChatToFolder", { nameOfFolder: item.nameOfFolder })} style={{marginTop:"0.5%"}} key={index}  >
                      <ChatFolderButtComp text={item.nameOfFolder}></ChatFolderButtComp>
                    </TouchableOpacity>
                  ))}
                  {counerOfGroups > 0 && (
                      <Text style={StyleChatFolderCenter.articleFolderTextStyle}>Recomended folders</Text>
                  )}
                {recomendedFolders.map((item, index) => (
                  <TouchableOpacity style={{marginTop:"0.5%"}} key={index} onPress={() => addItem(item)}>
                      <RecommendFolderButt text={item}></RecommendFolderButt>
                  </TouchableOpacity>
              ))}
    </View>
}

export default connect(mapStateToProps)(ChatFolderCenter);