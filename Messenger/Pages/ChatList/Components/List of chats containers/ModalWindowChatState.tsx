import React from "react";
import BlurAll from "../../../SemiComponents/BlurAll";
import { View } from "react-native";
import ChatMenu from "./ChatMenu";
import {
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";

interface ModalWindowChatStateProps {}

const ModalWindowChatState: React.FC<ModalWindowChatStateProps> = () => {
  return (
    <View
      style={{
        opacity: 0.8,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        zIndex: 100,
      }}
    >
      <ChatMenu isVisibleChatMenu={true} endAnimationChatMenuRef={() => {}} />
    </View>
  );
};

export default ModalWindowChatState;
