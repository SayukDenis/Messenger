import { Dispatch } from "redux";

export interface ScrollButtonProps { 
  navigation: any;
  dispatch: Dispatch;
  messageId: number;
  isUser: boolean;
  additionalGap?: number;
}