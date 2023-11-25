import Model from './Model';
import Chat from './Chats/Chat';

export default class Folder extends Model {
    constructor(folderName: string) {
        super();
        this.folderName = folderName;
    }
    folderId?: number;
    folderName!: string;
    chats: Array<Chat> = new Array;
    //schema
    static schema = {
        name: 'folders',
        properties: {
            folderId: 'integer',
            folderName: 'text',
            chats: { type: 'list', objectType: Chat }
        },
        primaryKey: 'folderId',
    }
}
