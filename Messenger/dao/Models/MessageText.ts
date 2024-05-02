import { Entity } from "typeorm";
import Message from "./Message"
import { EMessageType } from "./EMessageType";
import User from "./User";


@Entity()
export default class MessageText extends Message {
  constructor(author: User, content: string, massageType: EMessageType) {
    super(author, content, massageType);
  }
}