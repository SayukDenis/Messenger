import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../Styles/DialogueHeader';
import * as DialogueModel from '../../../../../dao/Models/Chats/Dialogue';

interface CenterPartOfHeaderProps {
  picture: string | undefined;
  displayName: string | undefined;
  activityTime: Date | string;
  dialogue: DialogueModel.default;
  navigation: any;
}

const CenterPartOfHeader = ({ picture, displayName, activityTime, dialogue, navigation }:CenterPartOfHeaderProps ) => {
  return (
    <TouchableOpacity 
      style={[styles.chatUserInfo, { backgroundColor: 'red' }]}
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
    </TouchableOpacity>
  );
}

export default CenterPartOfHeader;