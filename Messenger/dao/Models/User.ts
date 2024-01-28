import Model from './Model';


export default class User extends Model {
  constructor(name: string, numberPhone?: string, nickname?: string, description?: string, linkToPhoto?: string) {
    super();
    this.name = name;
    this.numberPhone = numberPhone;
    this.nickname = nickname;
    this.description = description;
    this.linkToPhoto = linkToPhoto;
  }
  userId?: number;
  name!: string;
  numberPhone?: string;
  nickname?: string;
  description?: string;
  linkToPhoto?: string;
  //schema
  static schema = {
    name: 'users',
    properties: {
      userId: 'integer',
      name: 'string',
      numberPhone: 'text?',
      nickname: 'text?',
      description: 'text?',
      linkToPhoto: 'text?',
    },
    primaryKey: 'userId',
  };
};
