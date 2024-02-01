import { StyleSheet, Dimensions, ViewStyle } from "react-native";
import { screenHeight, screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";
import { DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE, MESSAGE_PADDING_HORIZONTAL, MESSAGE_PADDING_VERTICAL } from "../../ChatConstants";

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  swipeableContainer: {
    width: width, 
    alignSelf:'stretch', 
    overflow:'hidden'
  },
  animatedBackground: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: '#fff',
  },
  replyContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: width - 5,
  },
  innerReplyContainer: {
    alignSelf: 'stretch',
    marginHorizontal:10,
  },
  replyUserNameFont: {
    alignSelf: 'flex-start',
    color:'rgb(29,78,216)',
    fontSize:DEFAULT_FONT_SIZE, 
  },
  replyMessageContainer: {
    display:'flex', 
    flexDirection:'row', 
    maxHeight:'100%',
    alignSelf:'flex-end',
  },
  messageTypeTextUser: {
    //backgroundColor: 'rgb(102, 191, 255)',
    marginLeft: 'auto',
    fontSize: DEFAULT_FONT_SIZE,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: MESSAGE_PADDING_VERTICAL,
    paddingLeft: MESSAGE_PADDING_HORIZONTAL,
    border: 'none',
    borderRadius: 10,
    maxWidth: '100%',
    minWidth: '15%'
  },
  replyMessageBackground: {
    position: 'absolute', 
    height: screenHeight, 
    width: screenWidth, 
    zIndex: -1,
  },
  replyMessagePos: {
    marginBottom:-10, 
    zIndex:-1, 
    paddingHorizontal:10
  },
  replyMessageFont: {
    fontStyle:'italic', 
    fontSize:DEFAULT_FONT_SIZE
  },
  messageTypeTextNotUser: {
    //backgroundColor: 'rgb(231, 230, 228)',
    marginRight: 'auto',
    fontSize: DEFAULT_FONT_SIZE,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: MESSAGE_PADDING_VERTICAL,
    paddingLeft: MESSAGE_PADDING_HORIZONTAL,
    border: 'none',
    borderRadius: 10,
    maxWidth: '100%'
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
    fontSize: 8,
  },
  messageViewStatus: { 
    position: 'absolute', 
    right: 0, 
    bottom: MESSAGE_PADDING_VERTICAL, 
    marginRight: -MESSAGE_PADDING_HORIZONTAL/4
  },
  longMessageTimeStamp: {
    marginRight: 0,
  },
  longMessage: {
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  messageSwipeToReply: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 55 
  },
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
      { marginTop:Math.ceil(DEFAULT_FONT_SIZE)+1 }, 
      mesLength > DEFAULT_CHARS_PER_LINE && styles.longMessage, 
      { overflow: 'hidden' }
    ] as ViewStyle;
  }
}