import Message from '../Message';
import Role from './Role';
import Model from './../Model';

export default class Branch extends Model {
    branchId!: number;
    messages: Array<Message>;
    internalBranches: Array<Branch>;
    pinnedMessage: Array<Message>;
    pinnedMessageForAll: Array<Message>;
    //access
    haveAccess: Array<Role>;
    //schema
    static schema = {
        name: 'branchs',
        properties: {
            branchId: { type: 'integer', indexed: true },
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