import Role from './Role';
import User from '../User';
import Chat from './Chat';
import { ChildEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, TableInheritance } from 'typeorm';
import IMessageLog from './IMessageLog';
import Branch from './Branch';

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
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