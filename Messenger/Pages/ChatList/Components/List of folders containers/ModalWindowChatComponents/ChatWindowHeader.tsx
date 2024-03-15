import React from "react";
import { View, Text, Image } from "react-native";
import { modalWindowChatStateStyle } from "../../../Styles/ModalWindowChatStateStyle";

interface ChatWindowHeaderProps {
  chatPicture: string | undefined;
  chatName: string | undefined;
  chatStatus: Date | string;
}

const ChatWindowHeader: React.FC<ChatWindowHeaderProps> = ({
  chatPicture,
  chatName,
  chatStatus,
}) => {
  return (
    <View style={modalWindowChatStateStyle.chatWindowHeaderContainer}>
      <View style={modalWindowChatStateStyle.chatWindowHeaderChatInfoContainer}>
        <Image
          source={{ uri: chatPicture }}
          style={modalWindowChatStateStyle.chatWindowHeaderChatInfoImage}
        />
        <View
          style={
            modalWindowChatStateStyle.chatWindowHeaderChatInfoTextContainer
          }
        >
          <Text
            style={modalWindowChatStateStyle.chatWindowHeaderChatInfoChatName}
          >
            {chatName}
          </Text>
          <Text
            style={modalWindowChatStateStyle.chatWindowHeaderChatInfoChatStatus}
          >
            {chatStatus.toString()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatWindowHeader;
