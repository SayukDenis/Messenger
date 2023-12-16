import Model from './Model';
import Tab from './Tab';
import User from './User';


export default class SelfProfile extends User {
    constructor(name: string, password: string, numberPhone: string) {
        super(name);
        this.password = password;
        this.numberPhone = numberPhone;
    }
    password!: string;
    //Additional
    email?: string;
    //Information about user
    timeLastEntry?: Date;
    tabs: Array<Tab> = new Array();

    static schema = {
        name: 'selfProfiles',
        properties: {
            userId: 'integer',
            name: 'text',
            password: 'text',
            numberPhone: 'text',
            //Additional
            email: 'text?',
            nickname: 'text?',
            description: 'text?',
            linkToPhoto: 'text?',
            //Information about user
            timeLastEntry: 'date?',
            tabs: { type: 'list', objectType: Tab },
        },
        primaryKey: 'userId',
    };
};