import { Message } from "../../tmpdata";


export interface DeleteMessageModalProps {
  deleting:boolean,
  setDeletingHandler:()=>void,
  onDeletePress:()=>void,
  message:Message,
}