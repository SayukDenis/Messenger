import { ChildEntity, Column, Entity} from 'typeorm';
import MainChat from './MainChat';

@ChildEntity()
export default class Group extends MainChat {
    constructor(title: string) {
        super();
        this.title = title;
    }

    @Column('text')
    title!: string;
}