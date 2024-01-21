import Chat from "../dao/Models/Chats/Chat";
import Message from "../dao/Models/Message";
import User from "../dao/Models/User";
import { EMessageType } from "../dao/Models/EMessageType";
import MainChat from "../dao/Models/Chats/MainChat";
import { getRandomElementsFromArray, getRandomNumber } from './functions';


export function addMessages(chat: Chat, count: number, users: User[], texts: string[] = []) {
    let idMessageToCreate = 0
    if (chat.messages.length > 0) idMessageToCreate = chat.messages[chat.messages.length - 1].messageId! + 1;

    if (users.length === 0) throw new Error("must be more than 1 users");

    for (let i = 0; i < count; i++) {
        let content: string;

        if (texts.length == 0)
            content = `Random message content ${idMessageToCreate}`;
        else
            content = texts[getRandomNumber(texts.length)];

        const message = new Message(users[getRandomNumber(users.length)], content, new Date(), EMessageType.text);
        message.messageId = idMessageToCreate++;
        // Additional properties can be set if needed
        if (Math.random() < 0.15) message.messageResponseId = idMessageToCreate - 2; // Set response ID to the previous message ID
        if (Math.random() < 0.35) message.isEdited = true; // Set isEdited 
        // Add the message to the array
        chat.messages.push(message);
    }
}
export function initializationLastWatchedMessageChat(chat: MainChat) {
    if (chat.branches.length > 0) {
        for (let branch of chat.branches) {
            initializationLastWatchedMessageBranch(branch, chat.users);
        }
    } else {
        for (let user of chat.users) {
            chat.lastWatchedMessage.push({ user: user, value: chat.messages[getRandomNumber(chat.messages.length)] })
        }
    }

}
export function initializationLastWatchedMessageBranch(chat: Chat, users: User[]) {
    if (chat.branches.length > 0) {
        for (let branch of chat.branches) {
            initializationLastWatchedMessageBranch(branch, users)
        }
    } else {
        for (let user of users) {
            chat.lastWatchedMessage.push({ user: user, value: chat.messages[getRandomNumber(chat.messages.length)] })
        }
    }

}
export function initializationPinnedMessage(chat: Chat, count_max?: number) {
    chat.pinnedMessage.push(...getRandomElementsFromArray(chat.messages, count_max));
}

export function initializationPinnedMessageForAll(chat: Chat, count_max?: number) {
    chat.pinnedMessageForAll.push(...getRandomElementsFromArray(chat.messages, count_max));
}