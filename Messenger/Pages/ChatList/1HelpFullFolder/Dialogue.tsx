import Chat from "./Chat";
import IUser from "./IUser";
import Message from "./Message";
import User from "./User";

export default class Dialogue extends Chat{
    constructor(user:User,listofMessages:Message[]=[],dictionary:Map<IUser, number>){
        super(User.name,user.urlForPicture,listofMessages,dictionary);

    }
}