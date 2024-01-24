import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  swipeableContainer: {
    width: width, 
    alignSelf:'stretch', 
    overflow:'visible'
  },
  replyContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: width - 5,
  },
  innerReplyContainer: {
    alignSelf: 'stretch',
    marginRight:10,
    marginLeft:10,
  },
  replyUserNameFont: {
    alignSelf: 'flex-start',
    color:'rgb(29,78,216)',
    fontSize:10, 
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
  replyMessagePos: {
    marginBottom:-10, 
    zIndex:-1, 
    paddingHorizontal:10
  },
  replyMessageFont: {
    fontStyle:'italic', 
    fontSize:10
  },
  replyMessageLine: {
    marginBottom:-25, 
    width:1, 
    height:'150%',
    backgroundColor:'blue',
    overflow:'visible'
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
  messageTimeStamp: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginLeft: 3,
    marginRight: 10,
    fontSize: 8,
  },
  longMessageTimeStamp: {
    marginRight: 0,
  },
  longMessage: {
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
});