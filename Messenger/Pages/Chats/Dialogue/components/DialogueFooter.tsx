import { View, TextInput, TouchableOpacity, Animated, Keyboard, KeyboardEvent,  EasingFunction, Easing } from 'react-native';
import React, { useState, memo, useEffect } from 'react';
import styles from './Styles/DialogueFooter';
import ReplyAndEditMenu from './ReplyAndEditMenu';
import { DialogueFooterProps } from './interfaces/IDialoueFooter';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import CopyMessagePopUp from './HelperComponents/Footer/CopyMessagePopUp';
import { sendMessage } from './HelperComponents/Footer/sendMessageFunc';
import LeftPartOfFooter from './HelperComponents/Footer/LeftPartOfFooter';
import RightPartOfFooter from './HelperComponents/Footer/RightPartOfFooter';

const DialogueFooter = memo(({messages, setMessages, isReply, replyMessage, onSendMessageOrCancelReplyAndEdit, copyMessagePopUp, isEdit, editMessage, messageID, author, endCopyMessagePopUp}:DialogueFooterProps) => {

  const [keyboardHeight, setKeyboardHeight] = useState(new Animated.Value(0));
  const [copyPopUpTranslate, setCopyPopUpTranslate] = useState(new Animated.Value(0));


  const [text, setText] = useState('');

  useEffect(() => {
    if(isEdit)
      setText(editMessage?.content)
    else
      setText('');
  }, [editMessage, isEdit]);

  // In the future make animation using 'react-native-keyboard-controller' library
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event: KeyboardEvent) => {
        console.log('show');
        Animated.timing(keyboardHeight, {
          toValue: -event.endCoordinates.height,
          duration: 200,
          useNativeDriver: false, // Adjust based on your requirements
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('hide');
        Animated.timing(keyboardHeight, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false, // Adjust based on your requirements
        }).start();
      }
    );

    // Clean up the event listeners when the component is unmounted
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardHeight]);

  const durationOfAnimation: number = 200;
  const easing: EasingFunction = Easing.linear;
  const copyPopUpPositionY = copyPopUpTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.07, 0],
  });
  const animateOfCopyPopUp = Animated.timing(copyPopUpTranslate, {
    toValue: 1, 
    duration: durationOfAnimation, 
    easing,
    useNativeDriver: false,
  });

  const animate = () => {
    Animated.sequence([
      animateOfCopyPopUp,
      Animated.delay(durationOfAnimation * 5),
    ]).start(() => {
      endCopyMessagePopUp();
    });
  }

  useEffect(() => {
    if(copyMessagePopUp) {
      animate();
    } else {
      setCopyPopUpTranslate(new Animated.Value(0));
    } 
  }, [copyMessagePopUp])

  return(
    <Animated.View style={{ transform: [{ translateY: keyboardHeight }] }}>
      <CopyMessagePopUp show={copyMessagePopUp} copyPopUpPositionY={copyPopUpPositionY} />
      <ReplyAndEditMenu 
        isReply={isReply} 
        replyMessage={replyMessage} 
        cancelReplyAndEdit={onSendMessageOrCancelReplyAndEdit} 
        isEdit={isEdit} 
        editMessage={editMessage}
      />
      <View style={styles.mainContainer} >
        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={["#cf9b95", "#c98bb8", "#c37adb"]}
            locations={[0.25, 0.5, 0.75]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
          />
          <View style={styles.footerContainer}>
            <View style={styles.footer}>
              <LeftPartOfFooter />

              <TextInput value={text} onChangeText={setText} placeholderTextColor={'rgb(137, 130, 130)'} style={styles.messageInput} 
              placeholder='Льоша блядюга)' onSubmitEditing={() => sendMessage({text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author})} />

              <RightPartOfFooter />
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
})

export default connect(null)(DialogueFooter);