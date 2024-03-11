import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styles from '../../Styles/Header';
import * as DialogueModel from '../../../../../dao/Models/Chats/Dialogue';

interface CenterPartOfHeaderProps {
  picture: string | undefined;
  displayName: string | undefined;
  activityTime: Date | string;
  dialogue: DialogueModel.default;
  navigation: any;
  selecting: boolean;
  counterOfSelectedMessages: number;
}

class CenterPartOfHeader extends Component<CenterPartOfHeaderProps> {
  render(): React.ReactNode {
    const { picture, displayName, activityTime, dialogue, navigation, selecting, counterOfSelectedMessages } = this.props;

    return (!selecting ?
      <TouchableOpacity 
        style={styles.chatUserInfo}
        activeOpacity={1}
        onPress={() => navigation.navigate('', { dialogue })}
      >
        <Image 
          source={{ uri: picture }} 
          style={styles.chatUserInfoImg}
        />
        <View style={styles.chatUserInfoDiv}>
          <Text style={styles.chatUserInfoUserName}>{displayName}</Text>
          <Text style={styles.chatUserInfoUserWasOnline}>{activityTime.toString()}</Text>
        </View>
      </TouchableOpacity> :
      <View style={{ padding: 10 }}>
        <Text>Select ({counterOfSelectedMessages})</Text>
      </View>
    );
  }
}

export default CenterPartOfHeader;