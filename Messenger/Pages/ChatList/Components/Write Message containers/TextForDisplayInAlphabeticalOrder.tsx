import React from "react";
import { Text, View } from "react-native";
import BackGroundColorForComponents from "../../../SemiComponents/BackGroundColorForComponents";
import { screenHeight, screenWidth } from "../../Constants/ConstantsForChatlist";

interface TextForDisplayInAlphabeticalOrderProps {
  text: string;
}

const TextForDisplayInAlphabeticalOrder: React.FC<
  TextForDisplayInAlphabeticalOrderProps
> = ({ text }) => {
  return (
    <View style={{overflow:"hidden"}}>
      <Text style={{marginLeft:7,fontSize:16,marginVertical:3}}>{text}</Text>
      <BackGroundColorForComponents height={screenHeight*0.05} width={screenWidth}/>
    </View>
  );
};

export default TextForDisplayInAlphabeticalOrder;
