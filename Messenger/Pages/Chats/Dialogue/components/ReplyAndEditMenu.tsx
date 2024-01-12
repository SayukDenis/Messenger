import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { ReplyAndEditMenuProps } from './interfaces/IReplyAndEditMenu';
import { styles } from './Styles/ReplyAndEditHandle';
import { connect } from 'react-redux';

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
                  isReply?(replyMessage?.content!.length>40?replyMessage?.content.slice(0,40)+'...':replyMessage?.content):
                  (editMessage?.content!.length>40?editMessage?.content.slice(0,40)+'...':editMessage?.content)
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

export default connect(null)(ReplyAndEditMenu)