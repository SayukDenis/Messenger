import Message from '../Message';
import Role from './Role';
import Model from '../Model';
import Chat from './Chat';
import ILastWathedMessage from './ILastWathedMessage';

export default class Branch extends Chat {
    constructor(title: string) {
        super();
        this.title = title;
    }
    branchId?: number;
    title!: string;
    //access
    haveAccess: Array<Role> = new Array;
    //schema
    static schema = {
        name: 'branchs',
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
            lastWathedMessage: { type: 'list', objectType: {} as ILastWathedMessage },
        },
        primaryKey: 'branchId',
        embedded: false,
    }
};
