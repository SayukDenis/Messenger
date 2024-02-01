import { View, TextInput, TouchableOpacity, Animated, Keyboard, KeyboardEvent,  EasingFunction, Easing } from 'react-native';
import React, { useState, memo, useEffect, useRef } from 'react';
import styles from './Styles/Footer';
import ReplyAndEditMenu from './ReplyAndEditMenu';
import { DialogueFooterProps } from './Interfaces/IDialoueFooter';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import CopyMessagePopUp from './HelperComponents/Footer/CopyMessagePopUp';
import { sendMessage } from './HelperComponents/Footer/sendMessageFunc';
import LeftPartOfFooter from './HelperComponents/Footer/LeftPartOfFooter';
import RightPartOfFooter from './HelperComponents/Footer/RightPartOfFooter';
import { height } from './ChatConstants';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Footer = memo(({messages, setMessages, isReply, replyMessage, onSendMessageOrCancelReplyAndEdit, copyMessagePopUp, isEdit, editMessage, messageID, author, endCopyMessagePopUp}:DialogueFooterProps) => {

  const [keyboardHeight, setKeyboardHeight] = useState(new Animated.Value(0));
  const [keyboardActive, setKeyboardActive] = useState(false);
  const [copyPopUpTranslate, setCopyPopUpTranslate] = useState(new Animated.Value(0));


  const [text, setText] = useState('');

  useEffect(() => {
    if(isEdit) {
      textInput.current?.focus();
      setText(editMessage?.content)
    } else {
      setText('');
      if(isReply) textInput.current?.focus();
    }
  }, [editMessage, isEdit, isReply]);

  // In the future make animation using 'react-native-keyboard-controller' library
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event: KeyboardEvent) => {
        Animated.timing(keyboardHeight, {
          toValue: -event.endCoordinates.height,
          duration: 200,
          useNativeDriver: false,
        }).start();
        setKeyboardActive(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        Animated.timing(keyboardHeight, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
        setKeyboardActive(false);
        if(textInput.current) {
          textInput.current.blur();
        }
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
    outputRange: [height * 0.07, 0],
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

  const sendMessageHandler = () => {
    sendMessage({text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author});
  }

  const textInput = useRef<TextInput>(null);

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
      <View style={[styles.mainContainer, { bottom: -height*0.01-1, }]} >
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
              <TextInput 
                ref={textInput}
                value={text} 
                onChangeText={setText} 
                placeholderTextColor={'rgb(137, 130, 130)'} 
                style={styles.messageInput} 
                placeholder='Льоша блядюга)' 
                onSubmitEditing={sendMessageHandler} 
              />
              <RightPartOfFooter 
                sendMessage={keyboardActive} 
                sendMessageHandler={sendMessageHandler} 
                pressGalleryButtonHandler={()=>{}} 
              />
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
})

export default connect(null)(Footer);