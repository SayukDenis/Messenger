import { StyleSheet } from "react-native";
import { FOOTER_INNER_CONTAINER_GAP, MAX_FOOTER_HEIGHT, height, screenWidth, width } from "../ChatConstants";

const styles = StyleSheet.create({
  wrapperAnimatedContainer: { 
    zIndex: 10, 
    position: 'absolute', 
    width: width, 
    maxHeight: MAX_FOOTER_HEIGHT,  
  },
  mainContainer: {
    left: 0,
    right: 0,
    zIndex: 5,
    elevation: 0.001,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "flex-end",
    overflow: 'hidden',
    maxHeight: MAX_FOOTER_HEIGHT
  },
  gradientContainer: {
    maxHeight: MAX_FOOTER_HEIGHT,
    backgroundColor:"white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 5,
    justifyContent:"center",
  },
  gradient: {
    opacity: 0.5,
    bottom: 0,
    position: "absolute",
    left: 0,
    right: 0,
    height: height,
    width: screenWidth,
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: height*0.06,
    maxHeight: MAX_FOOTER_HEIGHT - FOOTER_INNER_CONTAINER_GAP,
  },
  footer: {
    paddingVertical: 0,
    display: 'flex',
    flexDirection: 'row',
    maxHeight: MAX_FOOTER_HEIGHT - FOOTER_INNER_CONTAINER_GAP,
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footerWhileSelecting: { 
    justifyContent: 'space-between', 
    paddingHorizontal: width * 0.075, 
    alignItems: 'flex-start' 
  }
});

export default styles;
