import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import StyleAddFolderHeader from "./StyleAddFolderHeader";
import { useEffect } from "react";
import { addNewFolder } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import BackButton from "../../../../SemiComponents/BackButton";

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
    
    return <View >
            <View style = {StyleAddFolderHeader.addFolderHeaderConteiner}>
                <TouchableOpacity style = {StyleAddFolderHeader.backButt} onPress={()=>navigation.goBack()} ><BackButton></BackButton></TouchableOpacity>
                <View style={StyleAddFolderHeader.NewFolderArticleConteiner}><Text style = {StyleAddFolderHeader.ArticleNewFolder}>New folder</Text></View>
                <TouchableOpacity style ={StyleAddFolderHeader.DoneButton} onPress={addItem} ><Text>Done</Text></TouchableOpacity>
            </View>
    </View>
}

export default AddFolderHeader;