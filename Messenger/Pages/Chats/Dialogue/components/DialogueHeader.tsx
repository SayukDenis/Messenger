import { View, StyleSheet, Text, Button, Image, Dimensions } from 'react-native';
import styles from './Styles/DialogueHeader';
import React from 'react';

let userName = 'Denis';
let wasOnline = 'Online recently';

const DialogueHeader = () => {
  return(
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Button title='back'/>
        <View style={styles.chatUserInfo}>
          <Image source={{ uri: 'https://cdn140.picsart.com/361453903080211.png' }} style={styles.chatUserInfoImg}/>
          <View style={styles.chatUserInfoDiv}>
            <Text style={styles.chatUserInfoUserName}>{userName}</Text>
            <Text style={styles.chatUserInfoUserWasOnline}>{wasOnline}</Text>
          </View>
        </View>
        <Button title='branch'></Button>
      </View>
    </View>
  );
}

export default DialogueHeader;