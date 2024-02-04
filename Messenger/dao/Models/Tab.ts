import Folder from './Folder';
import Model from './Model';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import SelfProfile from './SelfProfile';

@Entity()
export default class Tab extends Model {
    constructor(title: string) {
        super();
        this.title = title;
    }
    @PrimaryGeneratedColumn()
    tabId!: number;

    @Column('text')
    title!: string;

    //Notifications
    @Column('boolean', { default: true })
    isDialogueMessageOn: boolean = true;

    @Column('boolean', { default: true })
    isGroupsMessageOn: boolean = true;

    @Column('boolean', { default: true })
    isChannelMessageOn: boolean = true;

    @ManyToMany(() => Folder, undefined, {
        eager: true,
        cascade: true,
        onDelete: 'CASCADE'
    })
    @JoinTable()
    folders: Array<Folder>;

    //Exceptions "MessageOn"
    @Column('simple-array')
    exceptionsDialoguesId: Array<number>;

    @Column('simple-array')
    exceptionsGroupsId: Array<number>;

    @Column('simple-array')
    exceptionsChannelsId: Array<number>;

    @ManyToOne(() => SelfProfile, (selfProfile) => selfProfile.tabs, { onDelete: 'CASCADE' })
    selfProfile: SelfProfile;
}