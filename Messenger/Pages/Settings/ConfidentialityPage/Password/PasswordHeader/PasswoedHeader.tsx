import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import StylePasswordHeader from "./StylePasswordHeader";
import BackButton from "../../../../SemiComponents/BackButton";


const PasswordHeader: React.FC<any> = ({ navigation })=>{
    return(
        <View style = {StylePasswordHeader.container}>
            <TouchableOpacity style = {StylePasswordHeader.backButt} onPress={()=> navigation.goBack()}><BackButton/></TouchableOpacity>
            <View style ={StylePasswordHeader.LockCodeArticleConteiner}><Text style = {StylePasswordHeader.LockCodeArticleText}>Lock code</Text></View>
        </View>
    )
}

export default PasswordHeader;