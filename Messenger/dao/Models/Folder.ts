import Model from './Model';
import Chat from './Chats/Chat';

export default class Folder extends Model {
    folderId!: number;
    folderName!: string;
    chats: Array<Chat>;
    //schema
    static schema = {
        name: 'folders',
        properties: {
            folderId: { type: 'integer', indexed: true },
            folderName: 'text',
            chats: { type: 'list', objectType: Chat }
        },
        primaryKey: 'folderId',
    }
}
