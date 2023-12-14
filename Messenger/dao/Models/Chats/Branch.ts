import Message from '../Message';
import Role from './Role';
import Model from '../Model';

export default class Branch extends Model {
    constructor(title: string) {
        super();
        this.title = title;
    }
    branchId?: number;
    title!: string;
    messages: Array<Message> = new Array;
    internalBranches: Array<Branch> = new Array;
    pinnedMessage: Array<Message> = new Array;
    pinnedMessageForAll: Array<Message> = new Array;
    //access
    haveAccess: Array<Role> = new Array;
    //schema
    static schema = {
        name: 'branchs',
        properties: {
            branchId: { type: 'integer', indexed: true },
            title: 'text',
            messages: { type: 'list', objectType: Message },
            internalBranches: { type: 'list', objectType: Branch },
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            //access
            haveAccess: { type: 'list', objectType: Role },
        },
        primaryKey: 'branchId',
    }
};