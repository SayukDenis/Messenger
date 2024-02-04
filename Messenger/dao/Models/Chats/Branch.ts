import Chat from './Chat';
import { Column, Entity, ManyToOne, Tree, TreeChildren, TreeParent } from 'typeorm';
import MainChat from './MainChat';

@Entity()
@Tree("closure-table")
export default class Branch extends Chat {
    constructor(title: string) {
        super();
        this.title = title;
    }

    @Column('text')
    title!: string;

    @Column('simple-array', { nullable: true })
    haveAccessRoleId: Array<number>; //id Roles

    @TreeParent({ onDelete: 'CASCADE' })
    parent!: Branch

    @TreeChildren({ cascade: true })
    branches: Array<Branch>;

    @ManyToOne(() => MainChat, (chat) => chat.branches, { onDelete: 'CASCADE' })
    mainChat!: MainChat
};
