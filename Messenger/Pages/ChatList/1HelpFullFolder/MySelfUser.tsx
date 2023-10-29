import StatusEnum from "../Components/Status Content/StatusEnum";
import Folder from "./Folder";
import IUser from "./IUser";

export default class MySelfUser implements IUser 
{
  public nickname: string;
  public urlForPicture: string;
  public id: number;
  public folders:Folder[];
  public status:StatusEnum;
  constructor(nickname: string, urlForPicture: string, id: number,folders:Folder[]=[],status:StatusEnum) {
    this.nickname = nickname;
    this.urlForPicture = urlForPicture;
    this.id = id;
    this.folders=folders;
    this.status=status;
  }
}
