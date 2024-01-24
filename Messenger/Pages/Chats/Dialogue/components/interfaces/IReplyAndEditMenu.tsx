import { MessageProps } from "../../GeneralInterfaces/IMessage";

export interface ReplyAndEditMenuProps {
  isReply:boolean, 
  replyMessage:MessageProps, 
  cancelReplyAndEdit:()=>void, 
  isEdit:boolean, 
  editMessage:MessageProps
}