import { Dimensions, StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";
import { MESSAGE_MENU_HEIGHT } from "../ChatConstants";

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
    height: MESSAGE_MENU_HEIGHT,
  },
  button: {
    backgroundColor:'rgb(231,230,228)',
    paddingHorizontal:10, 
    paddingVertical:5, 
    borderRadius:15, 
    width:width*0.25,
    flexDirection: 'row',
    alignItems: 'center',
    bottom: screenHeight * 0.006,
  }
});

export const footerstyles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: screenWidth * 0.015,
    borderRightWidth: screenWidth * 0.015,
    borderBottomWidth: screenWidth * 0.03,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#E7E6E4",
    position: "relative",
  },
  positionOfModalWindowLeftTop: {
    transform: [{ rotate: "322.5deg" }],
    bottom: 0,
    left: -screenWidth * 0.008,
  },
  positionOfModalWindowRightTop: {
    transform: [{ rotate: "-322.5deg" }],
    bottom: 0,
    left: screenWidth * 0.23,
  },
});