import { StyleSheet, ViewStyle } from "react-native";
import { screenHeight } from "../../../../../ChatList/Constants/ConstantsForChatlist";

export const styles = StyleSheet.create({

});

export const functionalStyles = {
  container: (sendMessage: boolean) => {
    return { 
      backgroundColor: !sendMessage?'rgba(255, 255, 255, 0.8)':'transparent', 
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 5, 
      width: screenHeight * 0.045, 
      height: screenHeight * 0.045 
    } as ViewStyle;
  }
}