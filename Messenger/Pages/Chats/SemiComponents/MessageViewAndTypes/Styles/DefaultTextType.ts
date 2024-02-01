import { StyleSheet, Dimensions, ViewStyle } from "react-native";
import { screenHeight, screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";
import { DEFAULT_CHARS_PER_LINE } from "../../ChatConstants";

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  swipeableContainer: {
    width: width, 
    alignSelf:'stretch', 
    overflow:'hidden'
  },
  mainContainer: {
    width:width+50, 
    flexDirection:'row', 
    overflow:'visible'
  },
  messageBlockContainer: {
    paddingVertical: 5,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    width: width
  },
  messageContainer: {
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row'
  },
  messageTypeTextUser: {
    //backgroundColor: 'rgb(102, 191, 255)',
    marginLeft: 'auto',
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingLeft: 10,
    border: 'none',
    borderRadius: 10,
    maxWidth: '100%',
    minWidth: '15%'
  },
  messageTypeTextNotUser: {
    //backgroundColor: 'rgb(231, 230, 228)',
    marginRight: 'auto',
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingLeft: 10,
    border: 'none',
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
    fontSize: 8,
  },
  messageViewStatus: { 
    position: 'absolute', 
    right: 0, 
    bottom: 10, 
    marginRight: -2.5 
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