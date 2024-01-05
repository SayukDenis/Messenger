import { MutableRefObject } from "react";
import { Message } from "../../tmpdata";

export interface messageProps {
  setMessageMenuVisible:(arg0: {x:number, y:number, ID:number})=>void;
  messageMenuVisisbleAppearence:boolean;
  messageID:number;
  listOfMessages:Message[];
  isReply:boolean;
  isEdit:boolean;
}

export interface messageViewHandleProps {
  listOfMessages:Message[], 
  message:Message, 
  setMessageMenuVisible:{(arg0: {x:number, y:number, ID:number}):void}, 
  scrollViewRef:MutableRefObject<any>, 
  coordsY:any
}