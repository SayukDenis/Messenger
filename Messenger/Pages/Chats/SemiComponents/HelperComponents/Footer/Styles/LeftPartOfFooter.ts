import { StyleSheet } from "react-native";
import { height } from "../../../ChatConstants";

export const styles = StyleSheet.create({
  container: { 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 9999, 
    width: height * 0.042, 
    height: height * 0.042 
  }
});