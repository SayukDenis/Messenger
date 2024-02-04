import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import StyleHeaderLangugage from "./StyleLanguageHeader";
import BackButton from "../../../SemiComponents/BackButton";

const LangugageHeader : React.FC<any> = ({ navigation })=>{
    return (
        <View style = {StyleHeaderLangugage.container} >
            <TouchableOpacity style = {StyleHeaderLangugage.backButt}  onPress={()=>navigation.goBack()}>
                <BackButton/>
            </TouchableOpacity>
            <View style= {StyleHeaderLangugage.LangugeContainerConteiner} >
                <Text style = {StyleHeaderLangugage.LangugeContainerText} >Folders</Text>
            </View>
            <TouchableOpacity style = {StyleHeaderLangugage.DoneButton}>
                <Text style = {StyleHeaderLangugage.DoneButtonTextStyle}>Done</Text>
            </TouchableOpacity>
       </View>
    )
}

export default LangugageHeader;