import Message from "./Message";
import IUser from "./IUser"; 
import StatusEnum from "../Components/Status Content/StatusEnum";

export default class Chat {
  public id:number;
  public name: string;
  public url: string;
  public listOfMessages: Message[];
  public dictionary: Map<number, number>=new Map<number,number>(); 
  public status:StatusEnum;
  constructor(
    name: string,
    url: string,
    listOfMessages: Message[] = [],
    dictionary: Map<number, number> = new Map<number, number>(),
    status:StatusEnum=0,
    id:number
  ) {
    this.name = name;
    this.url = url;
    this.listOfMessages = listOfMessages;
    this.dictionary = dictionary;
    this.status=status,
    this.id=id
  }
}
