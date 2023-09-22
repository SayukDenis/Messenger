import User from "./User";

export default class Message {
  public id;
  public content: string;
  public sender: User;
  public timeOfSend: Date;

  constructor(content: string, sender: User, timeOfSend: Date,id:number) {
    this.content = content;
    this.sender = sender;
    this.timeOfSend = timeOfSend;
    this.id=id;
  }
}
