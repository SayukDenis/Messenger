import Model from './Model';


export default class SelfProfile extends Model{
    // Necessary
    userId!: number;
    name!: string;
    hashPassword!: string;
    numberPhone!: string;
    //Additional
    email?: string;
    nickname?: string;
    description?: string;
    linkToPhoto?: string;
    //Information about user
    timeLastEntry?: Date;

    static schema = {
        name: 'SelfProfile',
        properties: {
            userId: {type: 'integer' , indexed: true},
            name: 'text',
            hashPassword: 'text',
            numberPhone: 'text',
            //Additional
            email: { type: 'text', optional: true },
            nickname: { type: 'text', optional: true },
            description: { type: 'text', optional: true },
            linkToPhoto: { type: 'text', optional: true },            
            //Information about user
            timeLastEntry: { type: 'date', optional: true },
        },
        primaryKey: 'userId',
    };
};