import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  dialogueChat: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  
  replyContainer: {
    display: 'flex',
    flexDirection: 'column',
    width:width
  },

  replyNickName: {
    fontSize:8,
    color:'blue', 
    alignSelf:'flex-end'
  },

  replyMessageContainer: {
    display:'flex', 
    flexDirection:'row', 
    maxHeight:'100%',
    alignSelf:'flex-end'
  },

  replyMessageLink: {
    
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

  replyMessagePos: {
    marginBottom:-10, 
    zIndex:-1, 
    paddingHorizontal:10
  },

  replyMessageFontTouchable: {
    
  },

  replyMessageLinkTouchable: {

  },














  messageContainer: {
    paddingVertical: 5,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    width: width
  },
  
  messageTypeTextUser: {
    backgroundColor: 'rgb(102, 191, 255)',
    marginLeft: 'auto',
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingLeft: 10,
    border: 'none',
    borderRadius: 10,
    //width: 'max-content',
    //maxWidth: width*0.6,
    maxWidth: '100%',
    minWidth: '15%'
  },

  messageTypeTextNotUser: {
    backgroundColor: 'rgb(231, 230, 228)',
    marginRight: 'auto',
    //order: 1,
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingLeft: 10,
    border: 'none',
    borderRadius: 10,
    //width: 'max-content',
    //maxWidth: width*0.6
    maxWidth: '100%'
  },

  longMessage: {
    paddingHorizontal: 10,
    flexDirection: 'column',
  },

  longMessageTimeStamp: {
    marginRight: 0,
  },
  
  messageTimeStamp: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginLeft: 3,
    marginRight: 10,
    fontSize: 8,
  },

  
});

export default styles;