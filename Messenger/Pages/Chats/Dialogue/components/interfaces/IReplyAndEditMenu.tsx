import { Message } from "../../tmpdata";


export interface ReplyAndEditMenuProps {
  isReply:boolean, 
  replyMessage:Message, 
  cancelReplyAndEdit:()=>void, 
  isEdit:boolean, 
  editMessage:Message
}