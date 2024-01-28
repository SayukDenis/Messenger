import Message from '../Message';
import Role from './Role';
import Model from '../Model';
import Chat from './Chat';
import ILastWatchedMessage from './ILastWatchedMessage';

export default class Branch extends Chat {
    constructor(title: string, haveAccess?: Array<Role>, linkToPhoto?: string, messages?: Array<Message>, branches?: Array<Branch>,
        pinnedMessage?: Array<Message>, pinnedMessageForAll?: Array<Message>,
        lastWatchedMessage?: Array<ILastWatchedMessage>) {
        super(linkToPhoto, messages, branches, pinnedMessage, pinnedMessageForAll, lastWatchedMessage);
        this.title = title;
        this.haveAccess = haveAccess ?? new Array;
    }
    branchId?: number;
    title!: string;
    //access
    haveAccess: Array<Role>;
    //schema
    static schema = {
        name: 'branches',
        properties: {
            branchId: { type: 'integer', indexed: true },
            title: 'text',
            linkToPhoto: 'text?',
            messages: { type: 'list', objectType: Message },
            branches: { type: 'list', objectType: Branch },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            pinnedMessage: { type: 'list', objectType: Message },
            //access
            haveAccess: { type: 'list', objectType: Role },
            lastWatchedMessage: { type: 'list', objectType: {} as ILastWatchedMessage },
        },
        primaryKey: 'branchId',
        embedded: false,
    }
};
