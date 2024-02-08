import React from "react";
import { View, TouchableOpacity, TextInput, Image } from "react-native";
import StyleFooterSavedMessage from "./StyleFooterSavedMessage";
import FooterGallaryButton from "../../../Chats/SemiComponents/SVG/FooterGallaryButton";
import FooterVideoButton from "../../../Chats/SemiComponents/SVG/FooterVideoButton";
import BackGroundColorForComponents from "../../../SemiComponents/BackGroundColorForComponents";
import { screenHeight,screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";

const FooterSavedMessage = () => {
  return (
    <View style={StyleFooterSavedMessage.footerConteiner}>
      <TouchableOpacity style={StyleFooterSavedMessage.svgConteinerForVideo}>
        <FooterVideoButton></FooterVideoButton>
      </TouchableOpacity>
     <View style = {{width:"65 %"}}>
      <TextInput
          style={StyleFooterSavedMessage.textInput}
          placeholder="Пиши блять..."
          placeholderTextColor={"#888282"}
        />
     </View>
      <TouchableOpacity style={StyleFooterSavedMessage.svgConteinerForGallery}>
        <FooterGallaryButton></FooterGallaryButton>
      </TouchableOpacity>
      <View style={{width:"100%",height:screenHeight*0.1,position: "absolute",
            backgroundColor: "white",
            zIndex: -1,
            opacity: 0.5,}}>
       </View>
    </View>
  );
};

export default FooterSavedMessage;
