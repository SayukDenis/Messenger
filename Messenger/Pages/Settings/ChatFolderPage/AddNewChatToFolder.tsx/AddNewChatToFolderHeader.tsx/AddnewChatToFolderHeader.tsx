import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import StyleAddNewChatToFolder from "./StyleAddnewChatToFolderHeader";
import BackButton from "../../../../SemiComponents/BackButton";

const AddNewChatFolderHeader  : React.FC<any> = ({ navigation} )=>{

    return (
        <View style = {StyleAddNewChatToFolder.container}>
            <TouchableOpacity style = {StyleAddNewChatToFolder.backButt} onPress={()=> navigation.goBack()}>
                <BackButton/>
            </TouchableOpacity>
            <View style = {StyleAddNewChatToFolder.EditFolderConteiner}>
                <Text style = {StyleAddNewChatToFolder.EditFolderText}>Edit folder</Text>
            </View>
            <TouchableOpacity style = {StyleAddNewChatToFolder.DoneButt} onPress={()=> navigation.goBack()}>
                <Text style = {StyleAddNewChatToFolder.StyleDoneButtonText}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddNewChatFolderHeader;