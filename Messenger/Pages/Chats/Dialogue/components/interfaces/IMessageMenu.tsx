import { MessageProps } from "../../GeneralInterfaces/IMessage";


export interface messageMenuProps {
  isVisible:boolean;
  onOverlayPress:()=>void;
  coord:{
    ID: number;
    componentPageX: number;
    componentPageY: number;
    pageX: number;
    pageY: number;
    width: number;
    height: number;
    message: MessageProps|undefined;
  };
  onReplyPress:()=>void;
  onEditPress:()=>void;
  isUser:boolean;
  onDeletePress:()=>void;
}