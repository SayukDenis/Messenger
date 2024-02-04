import Role from './Role';
import User from '../User';
import Chat from './Chat';
import { ChildEntity, Column, JoinColumn, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import IMessageLog from './IMessageLog';
import Branch from './Branch';

@ChildEntity()
export default class MainChat extends Chat {

    @ManyToMany(() => User, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    users: Array<User>;

    @OneToMany(() => Role, (role) => role.mainChat)
    roles: Array<Role>;

    @Column('simple-json')
    auditLog: Array<IMessageLog>;

    @OneToMany(() => Branch, (branch) => branch.mainChat, {
        eager: true,
        cascade: true
    })
    @JoinColumn()
    branches: Array<Branch>;
};