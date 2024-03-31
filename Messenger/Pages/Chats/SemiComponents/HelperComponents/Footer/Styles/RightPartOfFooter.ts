import { StyleSheet, ViewStyle } from "react-native";
import { height } from "../../../ChatConstants";

export const styles = StyleSheet.create({

});

export const functionalStyles = {
  container: (sendMessage: boolean) => {
    return { 
      backgroundColor: !sendMessage?'rgba(255, 255, 255, 0.8)':'transparent', 
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 5, 
      width: height * 0.04, 
      height: height * 0.04 
    } as ViewStyle;
  }
}