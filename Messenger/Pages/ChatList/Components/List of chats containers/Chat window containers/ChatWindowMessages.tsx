import React, { ReactNode } from "react";
import { View } from "react-native";
import { modalWindowChatStateStyle } from "../../../Styles/ModalWindowChatStateStyle";
import BackGroundGradinetView from "../../../../SemiComponents/BackGroundGradientView";

interface ChatWindowMessagesProps {
  children?: ReactNode;
}

const ChatWindowMessages: React.FC<ChatWindowMessagesProps> = ({
  children,
}) => {
  return (
    <View style={modalWindowChatStateStyle.chatWindowMessagesContainer}>
      <BackGroundGradinetView>{children}</BackGroundGradinetView>
    </View>
  );
};

export default ChatWindowMessages;
