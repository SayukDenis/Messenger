import { Text, View } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../ChatList/Constants/ConstantsForChatlist";
import React from "react";
import ArrowForSettingsButton from "../ChatList/Components/SVG/ArrowForSettingsButton";
import ContainerForButtonForSettings from "./ContainerForButtonForSettings";
interface ButtonForSettingsProps {
  text: string;
}

const ButtonForSettings: React.FC<ButtonForSettingsProps> = ({ text }) => {
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
        <ArrowForSettingsButton />
      </View>
    </ContainerForButtonForSettings>
  );
};
export default ButtonForSettings;
