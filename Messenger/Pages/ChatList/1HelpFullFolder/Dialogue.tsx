import Chat from "./Chat";
import IUser from "./IUser";
import Message from "./Message";
import User from "./User";

export default class Dialogue extends Chat{
    constructor(user:User,listofMessages:Message[]=[],dictionary:Map<number, number>=new Map<number,number>(),id:number){
        super(user.nickname,user.urlForPicture,listofMessages,dictionary,user.status,id);

    }
}