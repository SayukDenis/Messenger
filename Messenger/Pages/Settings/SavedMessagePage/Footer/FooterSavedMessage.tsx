import React from "react";
import { View,TouchableOpacity, TextInput, Image} from "react-native";
import StyleFooterSavedMessage from "./StyleFooterSavedMessage";
import Gallery from "./SvgImage/Gallery";
import Camera from "./SvgImage/Camera";

const FooterSavedMessage =()=>{
    return <View style={StyleFooterSavedMessage.footerConteiner}>
       <View style ={StyleFooterSavedMessage.svgConteiner}><Gallery></Gallery></View>
       <TextInput style ={StyleFooterSavedMessage.textInput} placeholder="Пиши блять..." placeholderTextColor={'#888282'}  ></TextInput>
       <View style ={StyleFooterSavedMessage.svgConteiner}><Camera></Camera></View>
    </View>
}

export default FooterSavedMessage;