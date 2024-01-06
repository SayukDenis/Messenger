import { Dimensions, StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    backgroundColor:'rgba(0,0,0,0.3)', 
    height: height,
    width: width,
    zIndex:115,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  buttonsContainer: {
    position:'absolute', 
  },
  button: {
    backgroundColor:'rgb(231,230,228)',
    paddingHorizontal:10, 
    paddingVertical:5, 
    borderRadius:15, 
    width:width*0.2
  }
})