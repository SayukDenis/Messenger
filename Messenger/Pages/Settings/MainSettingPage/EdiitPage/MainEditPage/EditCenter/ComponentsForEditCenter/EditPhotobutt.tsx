import React from "react";
import { screenHeight,screenWidth } from "../../../../../../ChatList/Constants/ConstantsForChatlist";
import { Text, View } from "react-native";
import BackGroundColorForComponents from "../../../../../../SemiComponents/BackGroundColorForComponents";



const  EditPhotoButton=()=>{
  const heightOfEditContainer=screenHeight * 0.043;
  const widthOfEditContainer= screenWidth * 0.3;
  return <View style={{
    alignSelf: "center",
    marginTop: 20,
    height: heightOfEditContainer,
    width: widthOfEditContainer,
    borderRadius: 14.5,
    overflow: "hidden",
    justifyContent: "center"
  }}>
        <Text style={{
      alignSelf: "center",
      color: "#734CA5",
      fontSize: 17
    }}>
            {"Edit photo"}
        </Text>
        <BackGroundColorForComponents height={heightOfEditContainer} width={widthOfEditContainer} />
      </View>;
}
  
export default EditPhotoButton;