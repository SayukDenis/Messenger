import { Text, View } from "react-native";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";
import React from "react";
import ConteinerForAddFolderComp from "./ConteinerForAddFolderComp";
import AddButton from "../../../MainChatFolderPage/SvgComponents/AddButton";
interface ButtonForSettingsProps {
  text: string;
}

const AddExeptions: React.FC<ButtonForSettingsProps> = ({ text }) => {
  return (
    <ConteinerForAddFolderComp>
    <View style={{ alignSelf: "center", position: "relative" }}>
    <AddButton></AddButton>
      </View>
      <Text
        style={{
          fontSize: 16,
          marginLeft: 5,
          alignSelf: "center",
          color: "#6A38AD",
        }}
      >
        {text}
      </Text>
    </ConteinerForAddFolderComp>
  );
};
export default AddExeptions;