import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { screenHeight } from "../../ChatList/Constants/ConstantsForChatlist";

const styles = StyleSheet.create(
  {
    dialogueContainer: {
      height: screenHeight,
      alignSelf: 'stretch',
    }
  }
);

export default styles;