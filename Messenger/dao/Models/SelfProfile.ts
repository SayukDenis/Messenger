import Tab from './Tab';
import User from './User';
import Chat from './Chats/Chat';
import { Entity, Column, OneToMany } from "typeorm";

@Entity()
export default class SelfProfile extends User {
    constructor(name: string, nickname: string, password: string) {
        super(name, nickname);
        this.password = password;
    }
    @Column('text')
    password!: string;

    @Column('text', { nullable: true })
    email?: string;

    @Column('text')
    numberPhone: string;

    //Information about user
    @Column('datetime', { nullable: true })
    timeLastEntry?: Date;

    @OneToMany(() => Tab, (tab) => tab.selfProfile, {
        eager: false, // change from true
        cascade: true
    })
    tabs: Array<Tab>;

    //Blocked chats
    @Column('simple-array', { nullable: true })
    blockedChatsId: Array<number>;
};