import { StyleSheet } from "react-native";
import { ChatConstants } from "../SemiComponents/ChatConstants";

const { height } = ChatConstants.getInstance();

const styles = StyleSheet.create(
  {
    dialogueContainer: {
      height: height,
      alignSelf: 'stretch',
    }
  }
);

export default styles;