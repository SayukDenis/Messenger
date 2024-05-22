import { StyleSheet, ViewStyle } from "react-native";
import { screenHeight, screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";
import { ChatConstants } from "../../ChatConstants";

const { 
  DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE, MESSAGE_PADDING_HORIZONTAL, MESSAGE_PADDING_VERTICAL, getCustomFontSize, width 
} = ChatConstants.getInstance();

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
    paddingVertical: MESSAGE_PADDING_VERTICAL/2,
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
  messageTypeTextUser: {
    //backgroundColor: 'rgb(102, 191, 255)',
    marginLeft: 'auto',
    fontSize: DEFAULT_FONT_SIZE,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: MESSAGE_PADDING_VERTICAL,
    paddingLeft: MESSAGE_PADDING_HORIZONTAL,
    borderRadius: 10,
    maxWidth: '100%',
    minWidth: '15%'
  },
  messageTypeTextNotUser: {
    //backgroundColor: 'rgb(231, 230, 228)',
    marginRight: 'auto',
    fontSize: DEFAULT_FONT_SIZE,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: MESSAGE_PADDING_VERTICAL,
    paddingLeft: MESSAGE_PADDING_HORIZONTAL,
    borderRadius: 10,
    maxWidth: '100%'
  },
  longMessage: {
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  longMessageTimeStamp: {
    marginRight: 0,
  },
  messageInfoContainer: {
    alignSelf: 'flex-end', 
    marginBottom: screenHeight*0.0015, 
    marginLeft: screenHeight*0.003, 
    marginRight: -screenHeight*0.001
  },
  messageTimeStamp: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginLeft: 3,
    marginRight: 10,
    fontSize: getCustomFontSize(9),
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
  },
  messageContainer: (isUser:boolean, mesLength:number) => {
    return [
      isUser ? styles.messageTypeTextUser : styles.messageTypeTextNotUser,
      mesLength > DEFAULT_CHARS_PER_LINE && styles.longMessage,
      { overflow: 'hidden' }
    ] as ViewStyle;
  }
}