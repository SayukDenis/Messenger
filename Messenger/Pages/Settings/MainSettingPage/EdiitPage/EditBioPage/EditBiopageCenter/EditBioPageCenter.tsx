import React , { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import StyleEditBioPageCenter from "./StyleEditBioPageCenter";
import CancelButton from "../EditSVG/CancelButton";

const windowHeight = Dimensions.get('window').height;

const EditBioCenter =()=>{
    const [text, setText] = useState('');
    const maxCharactersPerLine = 50;
    const handleTextChange = (inputText) => {
        let formattedText = inputText;
        let inputHeigth =windowHeight*0.07;
        if (formattedText.length % (maxCharactersPerLine + 1) === 0) {
            formattedText += '\n';
            setTextInputHeight(inputText.length +inputHeigth);
        }
        setText(formattedText);
        
    };
    const [textInputHeight, setTextInputHeight] = useState(windowHeight*0.07,);
      const resetCounter = () => {
        setText("");
        setTextInputHeight(windowHeight*0.07);
      };
    return <View>
        <Text style ={StyleEditBioPageCenter.textCenterConteiner}>Your Bio</Text>
        <View style ={[StyleEditBioPageCenter.textInputConteiner,{ height: textInputHeight }] }>
            <TouchableOpacity ><TextInput style ={[StyleEditBioPageCenter.textInput,{ height: textInputHeight }] } multiline  value={text}  onChangeText={handleTextChange} maxLength={50}  placeholder="De Nis pipiska"/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{resetCounter; setText(''); setTextInputHeight(windowHeight*0.07);}}>
                <View style={StyleEditBioPageCenter.counterConteinter}>
                    <CancelButton/>
                    <Text> {text.length}/50</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
}

export default EditBioCenter;