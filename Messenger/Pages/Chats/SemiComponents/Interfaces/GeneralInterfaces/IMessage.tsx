import User from "../../../../../dao/Models/User";
import { EMessageType } from "../../../../../dao/Models/EMessageType";
import IUserReaction from "../../../../../dao/Models/IUserReaction ";

export interface TextMessageProps {
    messageId?: number;
    author: User;
    content: string;
    sendingTime: Date
    messageType: EMessageType;
    messageResponseId?: number;
    messageForwardId?: number;
    isEdited: boolean;
    sent: boolean;
    reactionOnMessage: Array<IUserReaction>;
}

export interface MessageProps extends TextMessageProps {
    fileContent?: string;
    fileName?: string;
}