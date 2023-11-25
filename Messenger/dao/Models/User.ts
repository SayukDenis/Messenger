import Model from './Model';


export default class User extends Model {
  constructor(name: string) {
    super();
    this.name = name;
  }
  userI?: number;
  name!: string;
  numberPhone?: string;
  nickname?: string;
  description?: string;
  linkToPhoto?: string;
  //schema
  static schema = {
    name: 'users',
    properties: {
      userId: { type: 'integer', indexed: true },
      name: 'string',
      numberPhone: 'text?',
      nickname: 'text?',
      description: 'text?',
      linkToPhoto: 'text?',
    },
    primaryKey: 'userId',
  };
};
