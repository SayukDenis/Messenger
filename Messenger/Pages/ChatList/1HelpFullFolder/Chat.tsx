import Message from "./Message";
import IUser from "./IUser"; 

export default class Chat {
  public name: string;
  public url: string;
  public listOfMessages: Message[];
  public dictionary: Map<IUser, number>; 

  constructor(
    name: string,
    url: string,
    listOfMessages: Message[] = [],
    dictionary: Map<IUser, number> = new Map<IUser, number>()
  ) {
    this.name = name;
    this.url = url;
    this.listOfMessages = listOfMessages;
    this.dictionary = dictionary;
  }
}
