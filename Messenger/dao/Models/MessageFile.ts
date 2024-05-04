import { Column, Entity } from "typeorm";
import Message from "./Message";
import User from "./User";
import { EMessageType } from "./EMessageType";


@Entity()
export default class MessageFile extends Message {
  constructor(author: User, content: string, massageType: EMessageType) {
    super(author, content, massageType);
  }

  @Column('text')
  fileContent!: string;

  @Column('text')
  fileName!: string;
}