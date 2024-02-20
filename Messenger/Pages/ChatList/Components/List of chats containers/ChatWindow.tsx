import React, { memo } from "react";
import { Text, View } from "react-native";
import { modalWindowChatStateStyle } from "../../Styles/ModalWindowChatStateStyle";
import { connect, useSelector } from "react-redux";
import ChatWindowHeader from "./Chat window containers/ChatWindowHeader";
import ChatWindowMessages from "./Chat window containers/ChatWindowMessages";
import Dialogue from "../../../../dao/Models/Chats/Dialogue";
import Group from "../../../../dao/Models/Chats/Group";
import Channel from "../../../../dao/Models/Chats/Channel";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import User from "../../../../dao/Models/User";
import DialogueMessages from "../../../Chats/Dialogue/components/DialogueMessages";

interface ChatWindowProps {}

const user: SelfProfile = {
  userId: 0,
  name: "Denis",
  numberPhone: "",
  nickname: "Denis",
  description: "",
  linkToPhoto: "",
  password: "asdoapwd",
  email: "dopawdjpa",
  timeLastEntry: new Date(),
  tabs: new Array(),
  schema: {} as any,
};

const ChatWindow = memo(({}: ChatWindowProps) => {
  const currentChat = useSelector((state: any) => {
    return state.chatListReducer.chatForModalWindowChatState.chat;
  });

  const modalWindowChatStateComponent = () => {
    switch (currentChat.constructor) {
      case Dialogue:
        console.log("THIS IS DIALOGUE");
        return (
          <>
            <ChatWindowHeader
              chatPicture={currentChat.linkToPhoto}
              chatName={"Denis"}
              activityTime={"Online recently"}
            />
            <ChatWindowMessages>
              <DialogueMessages
                setMessageMenuVisible={() => {}}
                messageID={-1}
                listOfMessages={currentChat.messages.reverse()}
                isReply={false}
                isEdit={false}
                author={user as User}
                userMessageLastWatched={currentChat.lastWatchedMessage.find(
                  (obj: any) => obj.user.userId !== user.userId
                )}
                authorMessageLastWatched={currentChat.lastWatchedMessage.find(
                  (obj: any) => obj.user.userId === user.userId
                )}
                selecting={false}
                hasPinnedMessage={currentChat.pinnedMessage.length > 0}
                pinnedMessages={currentChat.pinnedMessage}
                setPinnedMessage={() => {}}
              />
            </ChatWindowMessages>
          </>
        );
      case Group:
        console.log("THIS IS GROUP");
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "yellow",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>THIS IS GROUP</Text>
          </View>
        );
      case Channel:
        console.log("THIS IS CHANNEL");
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "yellow",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>THIS IS CHANNEL</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={modalWindowChatStateStyle.chatWindowContainer}>
      {modalWindowChatStateComponent()}
    </View>
  );
});

export default connect(null)(ChatWindow);
