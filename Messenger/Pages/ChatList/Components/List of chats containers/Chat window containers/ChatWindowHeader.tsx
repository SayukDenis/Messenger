import React from "react";
import { View, Text, Image } from "react-native";
import { modalWindowChatStateStyle } from "../../../Styles/ModalWindowChatStateStyle";

interface ChatWindowHeaderProps {
  chatPicture: string | undefined;
  chatName: string | undefined;
  activityTime: Date | string;
}

const ChatWindowHeader: React.FC<ChatWindowHeaderProps> = ({
  chatPicture,
  chatName,
  activityTime,
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
            style={
              modalWindowChatStateStyle.chatWindowHeaderChatInfoActivityTime
            }
          >
            {activityTime.toString()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatWindowHeader;
