import Dialogue from './Chats/Dialogue';
import Channel from './Chats/Channel';
import Group from './Chats/Group';
import Chat from './Chats/Chat';
import Folder from './Folder';
import Message from './Message';
import Model from './Model';


export default class Tab extends Model {
    constructor(title: string, isDialogueMessageOn: boolean = true,
        isGroupsMessageOn: boolean = true, isChannelMessageOn: boolean = true,
        exceptionsDialogues?: Array<Dialogue>, exceptionsGroups?: Array<Group>,
        exceptionsChannels?: Array<Channel>, blockedChats?: Array<Chat>,
        folders?: Array<Folder>) {
        super();
        this.title = title;
        this.isDialogueMessageOn = isDialogueMessageOn;
        this.isGroupsMessageOn = isGroupsMessageOn;
        this.isChannelMessageOn = isChannelMessageOn;
        this.exceptionsDialogues = exceptionsDialogues ?? new Array;
        this.exceptionsGroups = exceptionsGroups ?? new Array;
        this.exceptionsChannels = exceptionsChannels ?? new Array;
        this.blockedChats = blockedChats ?? new Array;
        this.folders = folders ?? new Array;
    }
    tabId?: number;
    title!: string;
    //Notifications
    isDialogueMessageOn: boolean;
    isGroupsMessageOn: boolean;
    isChannelMessageOn: boolean;
    //Exceptions "MessageOn"
    exceptionsDialogues: Array<Dialogue>;
    exceptionsGroups: Array<Group>;
    exceptionsChannels: Array<Channel>;
    //Blocked chats
    blockedChats: Array<Chat>;
    //Information about user
    folders: Array<Folder>;

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