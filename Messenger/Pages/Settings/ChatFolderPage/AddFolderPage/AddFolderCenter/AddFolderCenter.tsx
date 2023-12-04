import React, {useState} from "react";
import { View, Text, TextInput,TouchableOpacity, Button } from "react-native";
import { useDispatch } from "react-redux";
import StyleAddFolderCenter from "./StyleAddFolderCenter";
import { setInputText } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";

const AddFolderCenter  = ()=>{
    const [inputText, setinputText] = useState('');
    const dispatch = useDispatch();
  
    const saveText = () => {
        let  text :string = inputText;
       if(text.trim()!=""){
        dispatch(setInputText(text));
       }
    };

    return <View>
        <Text style ={StyleAddFolderCenter.styleAddFolderText}>Name Folder</Text>
        <TextInput placeholder="Write name of folder" style = {StyleAddFolderCenter.styleAddFolderInputText} value={inputText} onChangeText={setinputText} onBlur={saveText} ></TextInput>
        <Text style ={StyleAddFolderCenter.styleAddFolderText}>Exceptions</Text>
        <TouchableOpacity style = {StyleAddFolderCenter.styleAddFolderInputText}><Text>+ Exeption</Text></TouchableOpacity>
    </View>
}

export default AddFolderCenter;