import { ChildEntity, Column } from 'typeorm';
import MainChat from './MainChat';

@ChildEntity()
export default class Channel extends MainChat {
    constructor(title: string) {
        super();
        this.title = title;
    }

    @Column('text')
    title!: string;

    @Column('simple-array')
    adminUserId: Array<number>;
}