import { MessageProps } from "../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";

export const checkListOfMessagesDifference = (prev: MessageProps[], next: MessageProps[]):boolean => {
  if(prev.length !== next.length) {
    return true;
  }

  for(let i = 0; i < prev.length; i++) {
    if(prev[i].content !== next[i].content) {
      return true;
    } else if(prev[i].sent !== next[i].sent) {
      return true;
    } else if(prev[i].messageId !== next[i].messageId) {
      return true;
    } else if(prev[i].isEdited !== next[i].isEdited) {
      return true;
    }
  }

  return false;
}