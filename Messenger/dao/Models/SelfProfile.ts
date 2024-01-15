import Model from './Model';
import Tab from './Tab';
import User from './User';


export default class SelfProfile extends User {
    constructor(name: string, password: string, email?: string, timeLastEntry?: Date, tabs?: Array<Tab>, numberPhone?: string,
        nickname?: string, description?: string, linkToPhoto?: string) {
        super(name, numberPhone, nickname, description, linkToPhoto);
        this.password = password;
        this.email = email;
        this.timeLastEntry = timeLastEntry;
        this.tabs = tabs ?? new Array;
    }
    password!: string;
    //Additional
    email?: string;
    //Information about user
    timeLastEntry?: Date;
    tabs: Array<Tab>;

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