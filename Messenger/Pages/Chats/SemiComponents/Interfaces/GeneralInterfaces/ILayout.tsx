import { MessageProps } from "./IMessage";

export interface Layout {
  ID: number;
  componentPageX: number;
  componentPageY: number;
  pageX: number;
  pageY: number;
  width: number;
  height: number;  
  message: MessageProps|undefined;
  selectionCallback: (() => void) | undefined;
  pinned: boolean;
}