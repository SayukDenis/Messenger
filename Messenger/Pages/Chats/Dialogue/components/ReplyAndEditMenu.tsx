import { View, Text, TouchableOpacity, } from 'react-native';
import React from 'react';
import { ReplyAndEditMenuProps } from './interfaces/IReplyAndEditMenu';
import { styles } from './Styles/ReplyAndEditHandle';
import { connect } from 'react-redux';
import ReplyAndEditMenuReplyIcon from '../SVG/ReplyAndEditMenuReplyIcon';
import ReplyAndEditMenuEditIcon from '../SVG/ReplyAndEditMenuEditIcon';
import ReplyAndEditMenuCancelButton from '../SVG/ReplyAndEditMenuCancelButton';
import { CHARS_PER_LINE } from '../DialogueConstants';

const ReplyAndEditMenu = ({ isReply, replyMessage, cancelReplyAndEdit, isEdit, editMessage }:ReplyAndEditMenuProps) => {
  return (
      (isReply||isEdit)?
      <View style={styles.container}>
        <View style={{flex:1}}>
          <View style={styles.innerContainer}>
            {isReply?<ReplyAndEditMenuReplyIcon />:<ReplyAndEditMenuEditIcon />}
            <View style={{ backgroundColor: '#4684FB', width: 1.45, height: '140%', marginHorizontal: 10 }} />
            <View style={styles.dataContainer}>
              <View>
                <Text style={styles.usernameText}>{isReply?'user name':'Edit'}</Text>
                <Text style={styles.messageText}>{
                  isReply?(replyMessage?.content!.length>CHARS_PER_LINE?replyMessage?.content.slice(0,CHARS_PER_LINE)+'...':replyMessage?.content):
                  (editMessage?.content!.length>CHARS_PER_LINE?editMessage?.content.slice(0,CHARS_PER_LINE)+'...':editMessage?.content)
                }</Text>
              </View>
              <TouchableOpacity 
                onPress={cancelReplyAndEdit}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10, }}  
              >
                <ReplyAndEditMenuCancelButton />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      :null
  )
}

export default connect(null)(ReplyAndEditMenu)