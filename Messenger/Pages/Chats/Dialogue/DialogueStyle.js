import { StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants';
import { screenHeight } from "../../ChatList/Constants/ConstantsForChatlist";

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create(
  {
    dialogueContainer: {
      height: height,
      alignSelf: 'stretch',
    }
  }
);

export default styles;