import { View, StyleSheet, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './Styles/DialogueHeader';
import React, { useState } from 'react';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import HeaderBackButton from '../SVG/HeaderBackButton';
import HeaderBranchButton from '../SVG/HeaderBranchButton';
import { connect } from 'react-redux';
import { DialogueHeaderProps } from './interfaces/IDialogueHeader';
import { LinearGradient } from 'expo-linear-gradient';
import DialogueMessagesPinnedMessageIcon from '../SVG/DialogueMessagesPinnedMessageIcon';
import { CHARS_PER_LINE } from '../DialogueConstants';

const DialogueHeader = ({ navigation, picture, displayName, activityTime, pinnedMessage }:DialogueHeaderProps) => {
  return(
    <View style={{ backgroundColor: 'green', zIndex: 10 }}>
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
      <View style={{ position: 'absolute', top: screenHeight*0.12, backgroundColor: '#fff', overflow: 'hidden', borderRadius: 9999, alignSelf: 'center', alignItems: 'center' }}>
      <LinearGradient
          colors={["#cf9b95", "#c98bb8", "#c37adb"]}
          locations={[0.25, 0.5, 0.75]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            opacity: 0.7,
            top: 0,
            position: "absolute",
            left: 0,
            right: 0,
            height: screenHeight,
            width: screenWidth,
          }}
        />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth*0.9, paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center' }}>
            <Text>Pinned message: {pinnedMessage?.content?.length>CHARS_PER_LINE?pinnedMessage?.content.slice(0,40):pinnedMessage?.content}</Text>
            <View style={{ flexDirection: 'row' }}>
              { true&&
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 12 }}>
                  <Text>2</Text>
                  <View style={{ width: 1.4, height: '100%', backgroundColor: 'black', marginHorizontal: 5 }} />
                  <Text>2</Text>
                </View>
              }
              <DialogueMessagesPinnedMessageIcon />
            </View>
          </View>
      </View>
    </View>
  );
}

export default connect(null)(DialogueHeader);