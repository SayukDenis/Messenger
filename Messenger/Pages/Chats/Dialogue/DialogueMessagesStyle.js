import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dialogueChat: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 10,
  },
  
  replyContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  replyNickName: {
    fontSize:8,
    color:'blue', 
    alignSelf:'flex-end'
  },

  replyMessageContainer: {
    display:'flex', 
    flexDirection:'row', 
    maxHeight:'100%'
  },

  replyMessageLink: {
    flex:1, 
    alignSelf:'flex-end'
  },

  replyMessageFont: {
    fontStyle:'italic', 
    fontSize:10
  },

  replyMessageLine: {
    marginBottom:-25, 
    width:1, 
    height:'150%', 
    backgroundColor:'blue'
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
    backgroundColor:'purple',
    paddingVertical: 5,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
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