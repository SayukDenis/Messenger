import Model from './Model';


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
        },
        primaryKey: 'userId',
    };
};