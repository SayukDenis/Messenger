import { StyleSheet, ViewStyle } from "react-native";
import { DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE, MESSAGE_PADDING_HORIZONTAL, MESSAGE_PADDING_VERTICAL, getCustomFontSize, screenHeight, screenWidth, width } from "../../ChatConstants";


export const styles = StyleSheet.create({
  swipeableContainer: {
    width: width, 
    alignSelf:'stretch', 
    overflow:'hidden'
  },
  mainContainer: {
    width: width - 5, 
    flexDirection:'row', 
    overflow:'visible'
  },
  messageBlockContainer: {
    paddingBottom: MESSAGE_PADDING_VERTICAL,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    width: width
  },
  messageContainer: {
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  message: {
    fontSize: DEFAULT_FONT_SIZE,
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 3,
    paddingHorizontal: 3,
    border: 'none',
    borderRadius: 10,
    maxWidth: '100%',
    minWidth: '15%',
    overflow: 'hidden'
  },
  messageInfoContainer: {
    alignSelf: 'flex-end', 
    marginBottom: screenHeight*0.0015, 
    marginLeft: screenHeight*0.003, 
    marginRight: -screenHeight*0.001
  },
  messageTimeStampNoText: {
    position: 'absolute',
    left: -width*0.08,
    bottom: width*0.01,
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 1,
    paddingHorizontal: 2,
    color: 'white',
    borderRadius: 5,
    fontSize: getCustomFontSize(9),
  },
  messageTimeStampText: { 
    bottom: 0, 
    fontWeight: 'normal', 
    color: 'black', 
    backgroundColor: 'transparent' 
  },
  messageViewStatus: { 
    position: 'absolute', 
    right: 0, 
    bottom: MESSAGE_PADDING_VERTICAL, 
    marginRight: -MESSAGE_PADDING_HORIZONTAL/4 
  },
  messageSwipeToReply: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 55 
  }
});

export const functionalStyles = {
  backgroundWithShadeEffect: (selecting:boolean, selected:boolean, isUser:boolean) => {
    return {
      position: 'absolute',
      height: screenHeight,
      width: screenWidth,
      zIndex: -1,
      opacity: selecting && selected ? 1 : 0.4,
      backgroundColor: isUser ? '#E09EFF' : '#fff',
    } as ViewStyle;
  }
}