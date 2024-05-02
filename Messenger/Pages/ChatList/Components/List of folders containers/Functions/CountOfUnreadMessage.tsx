import React from "react";
import Chat from "../../../../../dao/Models/Chats/Chat";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import SelfProfile from "../../../../../dao/Models/SelfProfile";
import MainChat from "../../../../../dao/Models/Chats/MainChat";


export const CountOfUnreadMessages = (selfProfile:SelfProfile,chat:Chat) : number | null => {
  // const listOfLastWatchedMessage : ILastWatchedMessage[] = chat.lastWatchedMessage;
  // const ILastMessage: ILastWatchedMessage | undefined = (listOfLastWatchedMessage === undefined ? null : listOfLastWatchedMessage)?.find(
  //   (value: ILastWatchedMessage) => {
  //     return value.user.userId === selfProfile.userId;
  //   }
  // );
  // const  lastMessageId : number | undefined = (ILastMessage?.value !== undefined ? ILastMessage.value : null)?.messageId;
  // const lastMessage = chat.messages[chat.messages.length - 1];
  // if (lastMessage.author.userId === selfProfile.userId) {
  //   return null
  // } else if (lastMessageId) {
  //   const countOfMessage: number = chat.messages.length - lastMessageId;
  //   if (countOfMessage === 0) return null;
  //   return countOfMessage
  // }
  return null
}