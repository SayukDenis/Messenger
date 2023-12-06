import Model from './Model';
import Tab from './Tab';


export default class SelfProfile extends Model {
    constructor(name: string, password: string, numberPhone: string) {
        super();
        this.name = name;
        this.password = password;
        this.numberPhone = numberPhone;
    }
    // Necessary
    userId?: number;
    name!: string;
    password!: string;
    numberPhone!: string;
    //Additional
    email?: string;
    nickname?: string;
    description?: string;
    linkToPhoto?: string;
    //Information about user
    timeLastEntry?: Date;
    tabs: Array<Tab> = new Array();

    static schema = {
        name: 'selfProfiles',
        properties: {
            userId: { type: 'integer', indexed: true },
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
            tabs: {type: 'list', objectType: Tab},
        },
        primaryKey: 'userId',
    };
};