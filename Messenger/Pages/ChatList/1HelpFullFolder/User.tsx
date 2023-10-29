import StatusEnum from "../Components/Status Content/StatusEnum";
import IUser from "./IUser";

export default class User implements IUser {
  public nickname: string;
  public urlForPicture: string;
  public id: number;
  public status:StatusEnum;
  constructor(nickname: string, urlForPicture: string, id: number,status:StatusEnum) {
    this.nickname = nickname;
    this.urlForPicture = urlForPicture;
    this.id = id;
    this.status=status
  }
}
