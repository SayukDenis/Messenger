import { StyleSheet } from "react-native";
import { screenHeight } from "../../../../../ChatList/Constants/ConstantsForChatlist";

export const styles = StyleSheet.create({
  container: { 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 9999, 
    width: screenHeight * 0.05, 
    height: screenHeight * 0.05 
  }
});