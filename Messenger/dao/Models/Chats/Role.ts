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
            removeMembers: { type: 'boolean', default: false },
            blockMembers: { type: 'boolean', default: false, },
            manageRoles: { type: 'boolean', default: false, },
            manageBranches: { type: 'boolean', default: false, },
            seeAuditLog: { type: 'boolean', default: false, },
            considerChannels: { type: 'boolean', default: false, },
            manageServer: { type: 'boolean', default: false, },
            //for members
            sendMessage: { type: 'boolean', default: true, },
            sendVoiceMessage: { type: 'boolean', default: true, },
        },
        primaryKey: 'roleId',
    }
}