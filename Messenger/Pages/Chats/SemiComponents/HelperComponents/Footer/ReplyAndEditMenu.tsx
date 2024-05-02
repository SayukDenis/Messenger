import { View, Text, TouchableOpacity, Image, } from 'react-native';
import React, { Component } from 'react';
import { ReplyAndEditMenuProps } from '../../Interfaces/IReplyAndEditMenu';
import { styles } from '../../Styles/ReplyAndEditMenu';
import { connect } from 'react-redux';
import ReplyAndEditMenuReplyIcon from '../../SVG/ReplyAndEditMenuReplyIcon';
import ReplyAndEditMenuEditIcon from '../../SVG/ReplyAndEditMenuEditIcon';
import ReplyAndEditMenuCancelButton from '../../SVG/ReplyAndEditMenuCancelButton';
import LineSeparator from '../General/LineSeparator';

class ReplyAndEditMenu extends Component<ReplyAndEditMenuProps> {

  shouldComponentUpdate(nextProps: Readonly<ReplyAndEditMenuProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    if(this.props.isReply !== nextProps.isReply) {
      return true;
    } else if(this.props.isEdit !== nextProps.isEdit) {
      return true;
    } else if(this.props.replyMessage.messageId !== nextProps.replyMessage.messageId) {
      return true;
    } else if(this.props.editMessage.messageId !== nextProps.editMessage.messageId) {
      return true;
    }
    
    return false;
  }

  render(): React.ReactNode {
    const { isReply, replyMessage, cancelReplyAndEdit, isEdit, editMessage, author, users } = this.props;

    const targetId = replyMessage?.author?.userId;
    const displayName = isReply ? (targetId === author.userId ? 'You' : users.find(u => u.userId === targetId)?.name) : 'Edit';

    let text = '';
    replyMessage?.content?.split('\n').forEach(m => text += `${m.trim()} `);
    text.trimEnd();

    return (
      (isReply||isEdit)&&
      <View style={styles.container}>
        <View style={{flex:1}}>
          <View style={styles.innerContainer}>
            {isReply?<ReplyAndEditMenuReplyIcon />:<ReplyAndEditMenuEditIcon />}
            <LineSeparator 
              color='#4684FB' 
              width={1.45}
              height={'140%'}
              marginHorizontal={10}
            />
            { isReply && replyMessage.messageType === 2 && 
              <Image source={{ uri: 'data:image/png;base64,' + replyMessage.fileContent }} style={{ width: 30, height: 30, marginRight: 5, borderRadius: 2 }} />
            }
            <View style={styles.dataContainer}>
              <View>
                <Text style={styles.usernameText}>{displayName}</Text>
                <Text 
                  style={styles.messageText}
                  numberOfLines={1}
                >
                  { isReply?(text):(editMessage?.content) }
                </Text>
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
    )
  }
}

export default connect(null)(ReplyAndEditMenu);