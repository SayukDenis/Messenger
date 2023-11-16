import React, {useState} from "react";
import { View , Text, TextInput } from "react-native";
import StyleEditUseNameCenter from "./StyleEditUsernamecenter";

const EditUserNameCenter = () =>{
    const UserNames : string[] = ['Анна', 'Олег', 'Ірина', 'Павло'] ;
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');

     const handleChange = (newText) => {
        setText(newText);
        if(newText == ''){
            setDisplayText('');
        }else if (UserNames.includes(newText)) {
            setDisplayText('-');
        }else {
            setDisplayText('+');
        }
    };

    return <View>
        <Text style = {StyleEditUseNameCenter.styleText}>User name</Text>
        <View style ={StyleEditUseNameCenter.textInputConteiner}>
            <TextInput style ={StyleEditUseNameCenter.textInput} value={text} onChangeText={handleChange} placeholder="Введіть ім'я..."/>
            <Text>{displayText}</Text>
        </View>
    </View>
}

export default EditUserNameCenter;