import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Model from '../Model';
import MainChat from './MainChat';

@Entity()
export default class Role extends Model {

    constructor(name: string, emoji: string) {
        super();
        this.name = name;
        this.emoji = emoji;
    }

    @PrimaryGeneratedColumn()
    roleId!: number;

    @Column('text')
    name!: string;

    @Column('text')
    emoji!: string;

    //permissions basic
    @Column('boolean', { default: false })
    removeMembers: boolean = false;

    @Column('boolean', { default: false })
    blockMembers: boolean = false;

    @Column('boolean', { default: false })
    manageRoles: boolean = false;

    @Column('boolean', { default: false })
    manageBranches: boolean = false;

    @Column('boolean', { default: false })
    seeAuditLog: boolean = false;

    @Column('boolean', { default: false })
    considerChannels: boolean = false;

    @Column('boolean', { default: false })
    manageServer: boolean = false;

    //for members
    @Column('boolean', { default: true })
    sendMessage: boolean = true;

    @Column('boolean', { default: true })
    sendVoiceMessage: boolean = true;
    
    @ManyToOne(() => MainChat, (mainChat) => mainChat.roles)
    mainChat!: MainChat;
}