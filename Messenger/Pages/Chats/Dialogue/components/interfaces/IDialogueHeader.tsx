import { MessageProps } from "../../GeneralInterfaces/IMessage";


export interface DialogueHeaderProps {
  navigation: any;
  picture: string | undefined;
  displayName: string | undefined;
  activityTime: string | Date;
  pinnedMessage: MessageProps;
}