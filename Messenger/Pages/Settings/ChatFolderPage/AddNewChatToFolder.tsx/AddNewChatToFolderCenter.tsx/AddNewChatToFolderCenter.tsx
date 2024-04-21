import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, TextInput, Modal } from "react-native";
import AddMemberSVG from "../../../../SemiComponents/AddMemberSVG";
import BackGroundColorForComponents from "../../../../SemiComponents/BackGroundColorForComponents";
import StyleEditNotificationCenter from "../../../Notification/EditNotificationPage/EditNotificationCenter/StyleEditNotificationCenter";
import { screenWidth,screenHeight } from "../../../../ChatList/Constants/ConstantsForChatlist";
import AddExeptions from "../../AddFolderPage/AddFolderCenter/ComponentsForAddFolderCenter/AddExeptions";
import ConteinerForAddFolderComp from "../../AddFolderPage/AddFolderCenter/ComponentsForAddFolderCenter/ConteinerForAddFolderComp";
import StyleAddNewChatToFolderCenter from "./StyleAddNewChatToFolderCenter";
import ContainerForButtonForSettings from "../../../../SemiComponents/ContainerForButtonForSettings";
import DeleteSvgButton from "./SVGvomponent/DeleteButton";
import StyleLogOutModalWindow from "../../../MainSettingPage/settingsPage/Center/LogoutModalWindow/LogoutModalWindowStyle.";
import { RemoveFolderFromList } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { useDispatch } from "react-redux";
import { AddRecomendedFolderBackToList } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";

const AddNewChatToFolderCenter: React.FC<any> = ({ navigation, route }) => {
  let nameOfFolder: string = route.params.nameOfFolder;
  let listOfExeptionsForPrivatesChats: string[] = [];
  const [inputText, setinputText] = useState(nameOfFolder);
  const [firstFocus, setFirstFocus] = useState(true);
  const [isModalVisible, setVisibleModal] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () =>{
    setVisibleModal(!isModalVisible)
  }

  const handleFocus = () => {
    if (firstFocus) {
      setinputText(nameOfFolder);
      setFirstFocus(false); 
    }
  };

  const DeleteClick =(folderName : string) =>{
    setVisibleModal(!isModalVisible);
    navigation.goBack();
    dispatch(RemoveFolderFromList(folderName));
    console.log("click")
    if(inputText == "Channels" || inputText == "Groups" ||  inputText== "News" || inputText=="Personal chats"){
      dispatch(AddRecomendedFolderBackToList(inputText));
    }
  }

  let ExeptionsOrAddmemberText :string;
  if(nameOfFolder!== "Channels" && nameOfFolder!== "Groups" &&  nameOfFolder!== "News" && nameOfFolder!==  "Personal chats"){
    ExeptionsOrAddmemberText = "Add chat"
  }else{
    ExeptionsOrAddmemberText = "Exceptions"
  }
  return (
    <View>
      <Text style = {StyleAddNewChatToFolderCenter.StyleArticleName}>Name Folder</Text>
      <ConteinerForAddFolderComp>
          <TextInput
            style = {{width:"100%"}}
            placeholder="Enter folder name"
            placeholderTextColor="black"
            value={inputText}
            onFocus={handleFocus}
            onChangeText={(text) => setinputText(text)}
            />
      </ConteinerForAddFolderComp>
      <Text style = {StyleAddNewChatToFolderCenter.StyleArticleExeptions}>Exeptions</Text>
      {listOfExeptionsForPrivatesChats.length > 0 ? (
      listOfExeptionsForPrivatesChats.map((item: string, index) => (
        <View style = {StyleEditNotificationCenter.userExeptionsButtons} key={index}>
          <Text>{item}</Text>
          <BackGroundColorForComponents width={screenWidth*0.94} height={screenHeight*0.07}></BackGroundColorForComponents>
        </View>
      ))
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("AddExeptionsNotifiPage", { NameOfPage:nameOfFolder  })} style={{ marginTop: "5%" }}>
          <AddExeptions text={ExeptionsOrAddmemberText} />
        </TouchableOpacity>
      )}
      <View style ={{marginTop:20}}>
        <ContainerForButtonForSettings>
          <TouchableOpacity onPress={toggleModal} style ={{alignItems:'center',marginLeft:'3%',flexDirection:"row", width:"100%"}}>
              <DeleteSvgButton></DeleteSvgButton>
              <Text style ={{fontSize:19, paddingTop:4, color:"#CE2500"}}>Delete folder</Text>
          </TouchableOpacity>
        </ContainerForButtonForSettings>
      </View>
      <Modal 
            animationType="none"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}> 
                        <View style = {StyleLogOutModalWindow.LogoutModalContainer}>
                            <View style = {StyleLogOutModalWindow.LogoutModalWindow}>
                                <View style = {StyleLogOutModalWindow.containerLogoutText}>
                                    <Text style = {StyleLogOutModalWindow.TextStyle}>Do you really want to delete?</Text>
                                </View>
                                <View style = {StyleLogOutModalWindow.containerOfButtons}>
                                    <TouchableOpacity style = {StyleLogOutModalWindow.AgreeButtonStyle} onPress={()=>{DeleteClick(inputText)}}>
                                        <Text style = {StyleLogOutModalWindow.TextStyle}>Agree</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {StyleLogOutModalWindow.DisagreeButtonStyle} onPress={toggleModal}>
                                        <Text style ={StyleLogOutModalWindow.DisadgreeTextStyle}>Disagree</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>                                
      </Modal>
    </View>
  );
};

export default AddNewChatToFolderCenter;