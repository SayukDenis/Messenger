import React, {useState , useEffect} from "react";
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

    useEffect(()=>{
        saveText();
    },[inputText])

    return(
        <View>
            <Text style ={StyleAddFolderCenter.styleAddFolderText}>Name Folder</Text>
            <ConteinerForAddFolderComp>
                <TextInput 
                placeholder="Write name of folder" 
                placeholderTextColor="black" 
                value={inputText} 
                onChangeText={setinputText} 
                onBlur={saveText}
                style ={{width:"100%"}}/>
            </ConteinerForAddFolderComp>
            <Text style ={StyleAddFolderCenter.styleAddFolderText}>Add chat</Text>
            <TouchableOpacity>
                <AddExeptions text="Add chat"/>
            </TouchableOpacity>
        </View>
    )
}

export default AddFolderCenter;