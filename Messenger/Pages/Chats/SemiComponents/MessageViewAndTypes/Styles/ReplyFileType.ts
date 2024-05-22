import { StyleSheet, Dimensions, ViewStyle } from "react-native";
import { screenHeight, screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";
import { ChatConstants } from "../../ChatConstants";

const { 
  DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE, MESSAGE_PADDING_HORIZONTAL, MESSAGE_PADDING_VERTICAL, getCustomFontSize 
} = ChatConstants.getInstance();

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  swipeableContainer: {
    width: width, 
    alignSelf:'stretch', 
    overflow:'hidden',
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
    height: '100%'
  },
  innerReplyContainer: {
    alignSelf: 'stretch',
    marginHorizontal: 10,
    paddingBottom: 5,
  },
  replyUserNameFont: {
    alignSelf: 'flex-start',
    color:'rgb(29,78,216)',
    fontSize: getCustomFontSize(12), 
  },
  replyMessageContainer: {
    display:'flex', 
    flexDirection:'row', 
    height: 14 + 2 * height * 0.006,
    alignSelf:'flex-end',
    alignItems: 'center',
  },
  messageTypeTextUser: {
    //backgroundColor: 'rgb(102, 191, 255)',
    marginLeft: 'auto',
    fontSize: DEFAULT_FONT_SIZE,
    display: 'flex',
    paddingVertical: 3,
    borderRadius: 10,
    maxWidth: '100%',
    minWidth: '15%',
    paddingHorizontal: 3,
    flexDirection: 'column',
    marginTop: height * 0.005,
    overflow: 'hidden'
  },
  replyMessageBackground: {
    position: 'absolute', 
    height: screenHeight, 
    width: screenWidth, 
    zIndex: -1,
  },
  replyMessagePos: {
    zIndex:-1, 
    paddingHorizontal:10
  },
  replyMessageFont: {
    fontStyle:'italic', 
    fontSize: getCustomFontSize(12)
  },
  messageInfoContainer: {
    alignSelf: 'flex-end', 
    marginLeft: screenHeight*0.003, 
    marginRight: screenHeight*0.002
  },
  messageTimeStampNoText: {
    position: 'absolute',
    right: 0,
    marginRight: width*0.015,
    bottom: width*0.015,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    flexDirection: 'row'
  },
  messageTimeStampText: { 
    backgroundColor: 'transparent', 
    bottom: width*0.005
  },
  messageTimeStampFontStylesNoText: {
    fontSize: getCustomFontSize(9),
    color: 'white',
    fontWeight: '700',
  },
  messageTimeStampFontStylesText: { 
    fontWeight: 'normal', 
    color: 'black', 
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
      styles.messageTypeTextUser,
    ] as ViewStyle;
  }
}