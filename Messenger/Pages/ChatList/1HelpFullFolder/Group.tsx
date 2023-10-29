import Chat from "./Chat";
import IUser from "./IUser";
import Message from "./Message";
import User from "./User";

export default class Dialogue extends Chat{
    constructor(name:string,user:User,urlForPicture:string,listOfMessages:Message[]=[],dictionary:Map<number, number>){
        super(name,urlForPicture,listOfMessages,dictionary);
 
    }
}