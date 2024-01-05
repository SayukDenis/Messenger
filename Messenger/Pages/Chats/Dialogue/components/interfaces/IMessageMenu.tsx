

export interface messageMenuProps {
  isVisible:boolean;
  onOverlayPress:()=>void;
  coord:{x:number;y:number};
  onReplyPress:()=>void;
  onEditPress:()=>void;
  isUser:boolean;
  onDeletePress:()=>void;
}