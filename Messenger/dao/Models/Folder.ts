import Model from './Model';
import Chat from './Chats/Chat';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Folder extends Model {
    constructor(folderName: string) {
        super();
        this.folderName = folderName;
    }
    @PrimaryGeneratedColumn()
    folderId?: number;

    @Column('text')
    folderName!: string;

    @ManyToMany(() => Chat, undefined, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    chats: Array<Chat>;
}