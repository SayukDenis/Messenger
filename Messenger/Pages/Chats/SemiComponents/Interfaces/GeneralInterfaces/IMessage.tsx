import User from "../../../../../dao/Models/User";
import { EMessageType } from "../../../../../dao/Models/EMessageType";
import IUserReaction from "../../../../../dao/Models/IUserReaction ";

export interface MessageProps {
    messageId?: number;
    author: User;
    content: string;
    fileContent?: string;
    fileName?: string;
    sendingTime: Date
    messageType: EMessageType;
    messageResponseId?: number;
    messageForwardId?: number;
    isEdited: boolean;
    isDeleted: boolean;
    reactionOnMessage: Array<IUserReaction>;
}