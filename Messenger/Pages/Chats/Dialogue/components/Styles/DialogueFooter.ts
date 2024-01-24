import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 5,
    elevation: 0.001,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: screenHeight * 0.08,
    justifyContent: "flex-end",
    overflow: 'hidden',
  },
  gradientContainer: {
    height: screenHeight * 0.08,
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
    height: screenHeight,
    width: screenWidth,
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: screenHeight*0.06,
  },
  footer: {
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    height: screenHeight*0.06,
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  
  messageInput: {
    borderWidth: 0,
    borderRadius: 9999,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'rgb(137, 130, 130)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '60%',
  },
});

export default styles;
