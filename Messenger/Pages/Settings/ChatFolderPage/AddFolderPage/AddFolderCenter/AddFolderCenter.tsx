import React, {useState} from "react";
import { View, Text, TextInput,TouchableOpacity, Button } from "react-native";
import { useDispatch } from "react-redux";
import StyleAddFolderCenter from "./StyleAddFolderCenter";
import { setInputText } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import AddExeptions from "./ComponentsForAddFolderCenter/AddExeptions";
import ConteinerForAddFolderComp from "./ComponentsForAddFolderCenter/ConteinerForAddFolderComp";

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
        <ConteinerForAddFolderComp>
        <TextInput placeholder="Write name of folder" value={inputText} onChangeText={setinputText} onBlur={saveText}></TextInput>
        </ConteinerForAddFolderComp>
        <Text style ={StyleAddFolderCenter.styleAddFolderText}>Exceptions</Text>
        <TouchableOpacity><AddExeptions text="Exeptions"></AddExeptions></TouchableOpacity>
    </View>
}

export default AddFolderCenter;