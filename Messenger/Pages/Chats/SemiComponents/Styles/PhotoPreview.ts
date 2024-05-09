import { StyleSheet } from "react-native";
import { height, width } from "../ChatConstants";

export const styles = StyleSheet.create({
  mainContainer: { 
    backgroundColor: 'black',
    height: height,
    width: width,
    zIndex:115,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },

});