import Model from '../Model';

export default class Role extends Model {
    constructor(name: string, emoji: string) {
        super();
        this.name = name;
        this.emoji = emoji;
    }
    roleId?: number;
    name!: string;
    emoji!: string;
    //permissions basic
    removeMembers: boolean = false;
    blockMembers: boolean = false;
    manageRoles: boolean = false;
    manageBranches: boolean = false;
    seeAuditLog: boolean = false;
    considerChannels: boolean = false;
    manageServer: boolean = false;
    //for members
    sendMessage: boolean = true;
    sendVoiceMessage: boolean = true;

    //scheme
    static schema = {
        name: 'roles',
        properties: {
            roleId: 'integer',
            name: { type: 'text', indexed: true },
            emoji: 'text',
            removeMembers: { type: 'bool', default: false },
            blockMembers: { type: 'bool', default: false, },
            manageRoles: { type: 'bool', default: false, },
            manageBranches: { type: 'bool', default: false, },
            seeAuditLog: { type: 'bool', default: false, },
            considerChannels: { type: 'bool', default: false, },
            manageServer: { type: 'bool', default: false, },
            //for members
            sendMessage: { type: 'bool', default: true, },
            sendVoiceMessage: { type: 'bool', default: true, },
        },
        primaryKey: 'roleId',
    }
}