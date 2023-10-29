import React from "react";
import { View, Text, TextInput } from "react-native";
import StyleEditBioPageCenter from "./StyleEditBioPageCenter";

const EditBioCenter =()=>{
    return <View>
        <Text style ={StyleEditBioPageCenter.textCenterConteiner}>Your Bio</Text>
        <TextInput style ={StyleEditBioPageCenter.textInput} placeholder="De Nis pipiska"/>
    </View>
}

export default EditBioCenter;