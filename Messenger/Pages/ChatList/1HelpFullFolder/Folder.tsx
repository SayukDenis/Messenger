import Chat from "./Chat";

export default class Folder {
  public name: string;
  public listOfChats: Chat[];

  constructor(name: string, listOfChats: Chat[] = []) {
    this.name = name;
    this.listOfChats = listOfChats;
  }
}
