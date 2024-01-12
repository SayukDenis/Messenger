import Dialogue from './Chats/Dialogue';
import Channel from './Chats/Channel';
import Group from './Chats/Group';
import Chat from './Chats/Chat';
import Folder from './Folder';
import Message from './Message';
import Model from './Model';


export default class Tab extends Model {
    constructor(title: string) {
        super();
        this.title = title;
    }
    tabId?: number;
    title!: string;
    //Notifications
    isDialogueMessageOn: boolean = true;
    isGroupsMessageOn: boolean = true;
    isChannelMessageOn: boolean = true;
    //Exceptions "MessageOn"
    exceptionsDialogues: Array<Dialogue> = new Array;
    exceptionsGroups: Array<Group> = new Array;
    exceptionsChannels: Array<Channel> = new Array;
    //Blocked chats
    blockedChats: Array<Chat> = new Array;
    //Information about user
    folders: Array<Folder> = new Array;

    static schema = {
        name: 'tabs',
        properties: {
            tabId: { type: 'integer', indexed: true },
            title: 'text',
            //Notifications
            isDialogueMessageOn: { type: 'boolean', default: true },
            isGroupsMessageOn: { type: 'boolean', default: true },
            isChannelMessageOn: { type: 'boolean', default: true },
            //Exceptions "MessageOn"
            exceptionsDialogues: { type: 'list', objectType: Dialogue },
            exceptionsGroups: { type: 'list', objectType: Group },
            exceptionsChannels: { type: 'list', objectType: Channel },
            //Blocked chats
            blockedChats: { type: 'list', objectType: Chat },
            //Information about user
            folders: { type: 'list', objectType: Folder }
        },
        primaryKey: 'tabId',
    };
}