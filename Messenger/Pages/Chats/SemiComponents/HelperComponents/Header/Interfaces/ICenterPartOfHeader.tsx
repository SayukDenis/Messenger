import * as DialogueModel from '../../../../../../dao/Models/Chats/Dialogue';

export interface CenterPartOfHeaderProps {
  picture: string | undefined;
  displayName: string | undefined;
  activityTime: Date | string;
  dialogue: DialogueModel.default;
  navigation: any;
  selecting: boolean;
  counterOfSelectedMessages: number;
}