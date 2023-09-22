import IUser from "./IUser";

export default class User implements IUser {
  public nickname: string;
  public urlForPicture: string;
  public id: number;

  constructor(nickname: string, urlForPicture: string, id: number) {
    this.nickname = nickname;
    this.urlForPicture = urlForPicture;
    this.id = id;
  }
}
