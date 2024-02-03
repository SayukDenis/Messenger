import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import AddMemberSVG from "../../../../SemiComponents/AddMemberSVG";
import BackGroundColorForComponents from "../../../../SemiComponents/BackGroundColorForComponents";
import StyleEditNotificationCenter from "../../../Notification/EditNotificationPage/EditNotificationCenter/StyleEditNotificationCenter";
import { screenWidth,screenHeight } from "../../../../ChatList/Constants/ConstantsForChatlist";
import AddExeptions from "../../AddFolderPage/AddFolderCenter/ComponentsForAddFolderCenter/AddExeptions";
import ConteinerForAddFolderComp from "../../AddFolderPage/AddFolderCenter/ComponentsForAddFolderCenter/ConteinerForAddFolderComp";
import StyleAddNewChatToFolderCenter from "./StyleAddNewChatToFolderCenter";

const AddNewChatToFolderCenter: React.FC<any> = ({ navigation, route }) => {
  let nameOfFolder: string = route.params.nameOfFolder;
  let listOfExeptionsForPrivatesChats: string[] = [];
  const [inputText, setinputText] = useState(nameOfFolder);

  let ExeptionsOrAddmemberText :string;
  if(nameOfFolder!== "Channels" && nameOfFolder!== "Groups" && nameOfFolder!==  "Important"&& nameOfFolder!== "News" && nameOfFolder!==  "Personal chats"){
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
                        onFocus={() => setinputText(nameOfFolder)}
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
                    )  : (
                            <TouchableOpacity onPress={() => navigation.navigate("")} style={{ marginTop: "5%" }}>
                                <AddExeptions text={ExeptionsOrAddmemberText} />
                            </TouchableOpacity>
            )}
        </View>
  );
};

export default AddNewChatToFolderCenter;