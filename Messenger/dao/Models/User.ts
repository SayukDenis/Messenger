import Model from './Model';


export default class User extends Model{
  userId!: number;
  name!: string;
  numberPhone?: string;
  nickname?: string;
  description?: string;
  linkToPhoto?: string; 
  //schema
  static schema ={
    name: 'users',
    properties: {
      userId: {type: 'integer', indexed: true},
      name: 'string',
      numberPhone: { type: 'text', optional: true },
      nickname:    { type: 'text', optional: true },
      description: { type: 'text', optional: true },
      linkToPhoto: { type: 'text', optional: true },      
    },
    primaryKey: 'userId',  
  };
};
