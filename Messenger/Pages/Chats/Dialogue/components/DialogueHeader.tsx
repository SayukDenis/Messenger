import { View, StyleSheet, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './Styles/DialogueHeader';
import React from 'react';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import HeaderBackButton from '../SVG/HeaderBackButton';
import HeaderBranchButton from '../SVG/HeaderBranchButton';
import { connect } from 'react-redux';

interface DialogueHeaderProps {
  navigation: any;
  picture: string | undefined;
  displayName: string | undefined;
  activityTime: string | Date;
}

const DialogueHeader = ({ navigation, picture, displayName, activityTime }:DialogueHeaderProps) => {
  return(
    <HeaderContainer>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 20, paddingVertical: 10 }}>
          <TouchableOpacity 
            style={{ width: screenWidth * 0.08  }} 
            hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
            activeOpacity={1}
            onPress={() => navigation.goBack()}>
            <HeaderBackButton />
          </TouchableOpacity>
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
          <HeaderBranchButton />
        </View>
      </View>
    </HeaderContainer>
  );
}

export default connect(null)(DialogueHeader);