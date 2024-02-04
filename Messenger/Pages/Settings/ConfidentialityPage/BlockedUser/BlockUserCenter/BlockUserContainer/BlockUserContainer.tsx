import { Text, View } from "react-native";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";
import React from "react";
import ContainerForButtonForSettings from "../../../../../SemiComponents/ContainerForButtonForSettings";
interface ContainerForButtonForSettings {
    children?: React.ReactNode;
}

const BlockUserContainer: React.FC<ContainerForButtonForSettings> = ({ children }) => {
  return (
    <ContainerForButtonForSettings>
    <View style={{ alignItems: "center", position: "relative", flexDirection:'row', justifyContent:'center', marginLeft:5 }}>
    {children}  
    </View>
     
        
      
    </ContainerForButtonForSettings>
  );
};
export default BlockUserContainer;