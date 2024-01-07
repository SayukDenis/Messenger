import { View, StyleSheet, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './Styles/DialogueHeader';
import React from 'react';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import HeaderBackButton from '../SVG/HeaderBackButton';
import HeaderBranchButton from '../SVG/HeaderBranchButton';
import { connect } from 'react-redux';

let userName = 'Denis';
let wasOnline = 'Online recently';

const DialogueHeader = ({ navigation }:{ navigation:any }) => {
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
              source={{ uri: 'https://cdn140.picsart.com/361453903080211.png' }} 
              style={styles.chatUserInfoImg}
            />
            <View style={styles.chatUserInfoDiv}>
              <Text style={styles.chatUserInfoUserName}>{userName}</Text>
              <Text style={styles.chatUserInfoUserWasOnline}>{wasOnline}</Text>
            </View>
          </View>
          <HeaderBranchButton />
        </View>
      </View>
    </HeaderContainer>
  );
}

export default connect(null)(DialogueHeader);