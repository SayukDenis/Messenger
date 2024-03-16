import { MessageProps } from "../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";

export const checkListOfMessagesDifference = (prev: MessageProps[], next: MessageProps[]):boolean => {
  if(prev.length !== next.length) {
    return true;
  }

  for(let i = 0; i < prev.length; i++) {
    if(prev[i].content !== next[i].content) {
      return true;
    }
  }

  return false;
}