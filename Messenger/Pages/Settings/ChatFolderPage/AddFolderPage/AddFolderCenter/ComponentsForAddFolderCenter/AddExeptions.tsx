import { Text, View } from "react-native";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";
import React from "react";
import ConteinerForAddFolderComp from "./ConteinerForAddFolderComp";
import AddMemberSVG from "../../../../../SemiComponents/AddMemberSVG";
interface ButtonForSettingsProps {
  text: string;
}

const AddExeptions: React.FC<ButtonForSettingsProps> = ({ text }) => {
  return (
    <ConteinerForAddFolderComp>
      <View style={{ alignSelf: "center", position: "relative" }}>
        <AddMemberSVG kef={screenHeight*0.0012} widthOfStroke={screenHeight*0.001}/>
      </View>
      <Text
          style={{
            fontSize: 20,
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