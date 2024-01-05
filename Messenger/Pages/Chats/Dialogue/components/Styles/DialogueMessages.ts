import { StyleSheet } from "react-native";
import { screenHeight } from "../../../../ChatList/Constants/ConstantsForChatlist";
import Constants from 'expo-constants';


const styles = StyleSheet.create({
  mainContainer: {
    overflow:'visible', 
    position:'relative',
  },
  dialogueChat: {
    display: 'flex',
    flexDirection: 'column',
    height: screenHeight * 0.88, 
  },
});

export default styles;