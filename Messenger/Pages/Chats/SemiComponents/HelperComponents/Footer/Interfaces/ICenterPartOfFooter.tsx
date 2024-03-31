import { TextInput } from "react-native";

export interface CenterPartOfFooterProps { 
  textInput: React.RefObject<TextInput>;
  text: string;
  setText: (text: string) => void;
  setDynamicFooterHeight: (add: number) => void;
  sendMessageHandler: () => void;
  selecting: boolean;
  height: number;
}