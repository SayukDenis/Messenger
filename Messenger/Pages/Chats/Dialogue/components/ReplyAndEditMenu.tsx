import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { Message } from '../tmpdata';

const { width, height } = Dimensions.get('window');

interface ReplyAndEditMenuProps {
  isReply:boolean, 
  replyMessage:Message, 
  cancelReplyAndEdit:()=>void, 
  isEdit:boolean, 
  editMessage:Message
}

const ReplyAndEditMenu = ({ isReply, replyMessage, cancelReplyAndEdit, isEdit, editMessage }:ReplyAndEditMenuProps) => {
  return (
      (isReply||isEdit)?
      <View style={styles.container}>
        <View style={{flex:1}}>
          <View style={styles.innerContainer}>
            <Text>{isReply?'Reply Icon':'Edit Icon'}</Text>
            <View style={styles.dataContainer}>
              <View style={{marginLeft:10}}>
                <Text style={styles.usernameText}>{isReply?'user name':'Edit'}</Text>
                <Text style={styles.messageText}>{
                  isReply?(replyMessage.text!.length>40?replyMessage.text.slice(0,40)+'...':replyMessage.text):
                  (editMessage.text!.length>40?editMessage.text.slice(0,40)+'...':editMessage.text)
                }</Text>
              </View>
              <TouchableOpacity onPress={cancelReplyAndEdit} style={styles.closeButton}>
                <Text>x</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      :null
  )
}

const styles = StyleSheet.create({
  container: {
    height:0, 
    top: -(height*0.052)
  },
  innerContainer: {
    height:height*0.052, 
    width:width*0.96, 
    backgroundColor:'rgb(231, 230, 228)', 
    borderRadius:20, 
    alignItems:'center',
    marginHorizontal:width*0.02, 
    paddingVertical:10, 
    paddingHorizontal:20, 
    display:'flex', 
    flexDirection:'row'
  },
  dataContainer: {
    flex: 1, 
    justifyContent:'space-between', 
    display:'flex', 
    flexDirection:'row', 
    alignItems:'center'
  },
  usernameText: {
    color:'rgb(183, 158, 255)'
  },
  messageText: {
    color:'rgb(121, 121, 121)'
  },
  closeButton: {
    backgroundColor:'red', 
    width:width*0.03, 
    alignItems:'center'
  }
})

export default ReplyAndEditMenu