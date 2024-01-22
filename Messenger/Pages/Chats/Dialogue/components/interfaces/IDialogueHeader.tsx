import { MessageProps } from "../../GeneralInterfaces/IMessage";


export interface DialogueHeaderProps {
  counterOfSelectedMessages: number;
  navigation: any;
  picture: string | undefined;
  displayName: string | undefined;
  activityTime: string | Date;
  pinnedMessage: MessageProps;
  selecting: boolean;
  cancelSelection: () => void;
}