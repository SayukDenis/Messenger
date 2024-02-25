import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import ChatWindowHeader from "./ChatWindowHeader";
import Dialogue from "../../../../../dao/Models/Chats/Dialogue";
import Group from "../../../../../dao/Models/Chats/Group";
import Channel from "../../../../../dao/Models/Chats/Channel";
import SelfProfile from "../../../../../dao/Models/SelfProfile";
import User from "../../../../../dao/Models/User";
import DialogueMessages from "../../../../Chats/Dialogue/components/DialogueMessages";
import { modalWindowChatStateStyle } from "../../../Styles/ModalWindowChatStateStyle";
import BackGroundGradinetView from "../../../../SemiComponents/BackGroundGradientView";

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

const ChatWindow = ({}: ChatWindowProps) => {
  const currentChat = useSelector((state: any) => {
    return state.chatListReducer.chatForModalWindowChatState.chat;
  });

  const chatWindowComponent = () => {
    switch (currentChat.constructor) {
      case Dialogue:
        return (
          <>
            <ChatWindowHeader
              chatPicture={currentChat.linkToPhoto}
              chatName={"Denis"}
              chatStatus={"Online recently"}
            />
            <View style={modalWindowChatStateStyle.chatWindowMessagesContainer}>
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
            </View>
          </>
        );
      case Group:
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "yellow",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>THIS IS A GROUP</Text>
          </View>
        );
      case Channel:
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "yellow",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>THIS IS A CHANNEL</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <BackGroundGradinetView>{chatWindowComponent()}</BackGroundGradinetView>
  );
};

export default React.memo(ChatWindow);
