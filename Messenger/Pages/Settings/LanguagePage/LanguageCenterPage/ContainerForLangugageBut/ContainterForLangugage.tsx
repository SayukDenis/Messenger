import { Text, View } from "react-native";
import { screenWidth, screenHeight } from "../../../../ChatList/Constants/ConstantsForChatlist";
import React from "react";
import ContainerForButtonForSettings from "../../../../SemiComponents/ContainerForButtonForSettings";
interface ContainterForLangugageProps {
  text: string;
}

const ContainterForLangugageButt: React.FC<ContainterForLangugageProps> = ({ text }) => {
  return (
    <ContainerForButtonForSettings>
      <Text
        style={{
          fontSize: 16,
          marginLeft: 15,
          alignSelf: "center",
          color: "#6A38AD",
        }}
      >
        {text}
      </Text>
      <View
        style={{ alignSelf: "center", marginRight: 10, position: "relative" }}
      >
      </View>
    </ContainerForButtonForSettings>
  );
};
export default ContainterForLangugageButt;
