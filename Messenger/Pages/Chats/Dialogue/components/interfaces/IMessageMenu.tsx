

export interface messageMenuProps {
  isVisible:boolean;
  onOverlayPress:()=>void;
  coord:{
    ID: number;
    pageX: number;
    pageY: number;
    width: number;
    height: number;
  };
  onReplyPress:()=>void;
  onEditPress:()=>void;
  isUser:boolean;
  onDeletePress:()=>void;
}