import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import StyleAddFolderHeader from "./StyleAddFolderHeader";
import { useEffect } from "react";
import { State } from "react-native-gesture-handler";
import { addNewFolder } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";

const AddFolderHeader: React.FC<any> = ({ navigation })=>{

    let nameFolder : string = useSelector((state: any) => {
        console.log(state.SettingsPagesReducers.SaveInputText.TextInput + "GlibPitux")
        return state.SettingsPagesReducers.SaveInputText.TextInput
    });
    const dispatch = useDispatch();

    const addItem = () => {
        if(nameFolder.trim() != ""){
            dispatch(addNewFolder(nameFolder)); 
            console.log("dispatch " + nameFolder )
        }
        navigation.goBack();
    };
    
    return <View style = {StyleAddFolderHeader.header}>
            <View style = {StyleAddFolderHeader.addFolderHeaderConteiner}>
                <TouchableOpacity onPress={()=>navigation.goBack()} ><Text>but</Text></TouchableOpacity>
                <Text>New folder</Text>
                <TouchableOpacity onPress={addItem} ><Text>Done</Text></TouchableOpacity>
            </View>
    </View>
}

export default AddFolderHeader;