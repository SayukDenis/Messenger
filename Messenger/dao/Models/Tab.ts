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
    isgroupsMessageOn: boolean = true;
    isChannelMessageOn: boolean = true;
    //Exceptions "MessageOn"
    exceptionsDialogues: Array<Dialogue> = new Array;
    exceptionsgroups: Array<Group> = new Array;
    exceptionsChannels: Array<Channel> = new Array;
    //Blocked chats
    blockedChats: Array<Chat> = new Array;
    //Information about user
    folders: Array<Folder> = new Array;
    messages: Array<Message> = new Array;

    static schema = {
        name: 'tabs',
        properties: {
            tabId: { type: 'integer', indexed: true },
            title: 'text',
            //Notifications
            isDialogueMessageOn: { type: 'bool', default: true },
            isgroupsMessageOn: { type: 'bool', default: true },
            isChannelMessageOn: { type: 'bool', default: true },
            //Exceptions "MessageOn"
            exceptionsDialogues: { type: 'list', objectType: Dialogue },
            exceptionsgroups: { type: 'list', objectType: Group },
            exceptionsChannels: { type: 'list', objectType: Channel },
            //Blocked chats
            blockedChats: { type: 'list', objectType: Chat },
            //Information about user
            folders: { type: 'list', objectType: Folder },
            messages: { type: 'list', objectType: Message },
        },
        primaryKey: 'tabId',
    };
}