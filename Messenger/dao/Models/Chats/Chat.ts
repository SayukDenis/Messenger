import Message from '../Message';
import Model from '../Model';
import Branch from './Branch';
import ILastWatchedMessage from './ILastWatchedMessage';

export default class Chat extends Model {
    constructor(linkToPhoto?: string, messages?: Array<Message>, branches?: Array<Branch>,
        pinnedMessage?: Array<Message>, pinnedMessageForAll?: Array<Message>,
        lastWatchedMessage?: Array<ILastWatchedMessage>) {
        super();

        this.linkToPhoto = linkToPhoto ;
        this.messages = messages ?? new Array;
        this.branches = branches ?? new Array;
        this.pinnedMessage = pinnedMessage ?? new Array;
        this.pinnedMessageForAll = pinnedMessageForAll ?? new Array;
        this.lastWatchedMessage = lastWatchedMessage ?? new Array;
    }
    linkToPhoto?: string;
    messages: Array<Message>;
    branches: Array<Branch>;
    pinnedMessage: Array<Message>;
    pinnedMessageForAll: Array<Message>;
    //last watched message of each User
    lastWatchedMessage: Array<ILastWatchedMessage>;
    //schema
    static schema = {
        name: 'chats',
        properties: {
            linkToPhoto: 'text?',
            messages: { type: 'list', objectType: Message },
            branches: { type: 'list', objectType: Branch },
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            lastWatchedMessage: { type: 'list', objectType: {} as ILastWatchedMessage },
        },
        embedded: true,
    }
};