import { MutableRefObject } from "react";
import { Message } from "../../tmpdata";

export interface messageProps {
  setMessageMenuVisible:(arg0: {ID:number, pageX:number, pageY:number, width:number, height:number}, arg1: boolean)=>void;
  messageMenuVisisbleAppearence:boolean;
  messageID:number;
  listOfMessages:Message[];
  isReply:boolean;
  isEdit:boolean;
}

export interface messageViewHandleProps {
  listOfMessages:Message[], 
  message:Message, 
  setMessageMenuVisible:{(arg0: {ID:number, pageX:number, pageY:number, width:number, height:number}, arg1: boolean):void}, 
  scrollViewRef:MutableRefObject<any>, 
  coordsY:any
}