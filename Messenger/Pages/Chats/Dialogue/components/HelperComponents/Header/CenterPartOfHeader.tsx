import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from '../../Styles/DialogueHeader';

interface CenterPartOfHeaderProps {
  picture: string | undefined;
  displayName: string | undefined;
  activityTime: Date | string;
}

const CenterPartOfHeader = ({ picture, displayName, activityTime }:CenterPartOfHeaderProps ) => {
  return (
    <View style={styles.chatUserInfo}>
      <Image 
        source={{ uri: picture }} 
        style={styles.chatUserInfoImg}
      />
      <View style={styles.chatUserInfoDiv}>
        <Text style={styles.chatUserInfoUserName}>{displayName}</Text>
        <Text style={styles.chatUserInfoUserWasOnline}>{activityTime.toString()}</Text>
      </View>
    </View>
  );
}

export default CenterPartOfHeader;