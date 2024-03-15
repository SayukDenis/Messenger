import React, { useMemo } from "react";
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
import getNameOfChat from "../Functions/GetNameOfChat";

interface ChatWindowProps {}

const ChatWindow = ({}: ChatWindowProps) => {
  const currentChat = useSelector((state: any) => {
    return state.chatListReducer.chatForModalWindowChatState.chat;
  });

  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });
  const nameOfChat = useMemo(
    () => getNameOfChat(currentChat, selfProfile),
    [currentChat]
  );

  const chatWindowComponent = () => {
    switch (currentChat.constructor) {
      case Dialogue:
        return (
          <>
            <ChatWindowHeader
              chatPicture={currentChat.linkToPhoto}
              chatName={nameOfChat}
              chatStatus={"Online recently"}
            />
            <View style={modalWindowChatStateStyle.chatWindowMessagesContainer}>
              <DialogueMessages
                setMessageMenuVisible={() => {}}
                messageID={-1}
                listOfMessages={currentChat.messages.reverse()}
                isReply={false}
                isEdit={false}
                author={selfProfile as User}
                userMessageLastWatched={currentChat.lastWatchedMessage.find(
                  (obj: any) => obj.user.userId !== selfProfile.userId
                )}
                authorMessageLastWatched={currentChat.lastWatchedMessage.find(
                  (obj: any) => obj.user.userId === selfProfile.userId
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
          <>
            <ChatWindowHeader
              chatPicture={currentChat.linkToPhoto}
              chatName={currentChat.title}
              chatStatus={`${currentChat.users.length} members`}
            />
            <View style={modalWindowChatStateStyle.chatWindowMessagesContainer}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>THIS IS A GROUP</Text>
              </View>
            </View>
          </>
        );
      case Channel:
        return (
          <>
            <ChatWindowHeader
              chatPicture={currentChat.linkToPhoto}
              chatName={currentChat.title}
              chatStatus={`${currentChat.users.length} subscribers`}
            />
            <View style={modalWindowChatStateStyle.chatWindowMessagesContainer}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>THIS IS A CHANNEL</Text>
              </View>
            </View>
          </>
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
