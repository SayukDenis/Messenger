import { memo, useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Animated, EasingFunction, Easing } from "react-native";
import React from 'react';
import { messageMenuProps } from "./interfaces/IMessageMenu";
import { footerstyles, styles } from './Styles/MessageMenu';
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";
import { connect } from "react-redux";
import * as Clipboard from 'expo-clipboard';
import MessageMenuSelectButton from "../SVG/MessageMenuSelectButton";
import MessageMenuDeleteButton from "../SVG/MessageMenuDeleteButton";
import MessageMenuForwardButton from "../SVG/MessageMenuForwardButton";
import MessageMenuPinButton from "../SVG/MessageMenuPinButton";
import MessageMenuCopyButton from "../SVG/MessageMenuCopyButton";
import MessageMenuEditButton from "../SVG/MessageMenuEditButton";
import MessageMenuReplyButton from "../SVG/MessageMenuReplyButton";
import DefaultTextDummyMessage from "../MessageMenuDummyMessages/DefaultTextDummyMessage";
import ReplyTextDummyMessage from "../MessageMenuDummyMessages/ReplyTextDummyMessage";
import { height, width } from "../DialogueConstants";


let size:{ width:number, height:number } = { width: 0, height: 0 };

const containerWidth = new Animated.Value(0); 
const firstContainerTranslate = new Animated.Value(0); 
const secondContainerTranslate = new Animated.Value(0);
const thirdContainerTranslate = new Animated.Value(0);
const fourthContainerTranslate = new Animated.Value(0);
const fifthContainerTranslate = new Animated.Value(0);
const sixthContainerTranslate = new Animated.Value(0);

const MessageMenu = memo(({isVisible, onOverlayPress, coord, messages, onReplyPress, onEditPress, onCopyPress, onSelectPress, onPinPress, isUser, onDeletePress, userMessageLastWatched, pinnedMessageScreen }:messageMenuProps) => {
  if(!isVisible) 
      return null;
    
  const buttons = [
    {
      text: 'Reply',
      action: onReplyPress,
      svg: <MessageMenuReplyButton />
    },
    {
      text: 'Edit',
      action: onEditPress,
      svg: <MessageMenuEditButton />
    },
    {
      text: 'Copy',
      action: async () => {
        await Clipboard.setStringAsync(coord.message?.content!);
        if(typeof onCopyPress === 'function')
          onCopyPress();
      },
      svg: <MessageMenuCopyButton />
    },
    {
      text: 'Pin',
      action: () => {
        if(typeof onPinPress === 'function')
          onPinPress(coord.message!);
      },
      svg: <MessageMenuPinButton />
    },
    {
      text: 'Forward',
      action: () => {},
      svg: <MessageMenuForwardButton />
    },
    {
      text: 'Delete',
      color: 'red',
      action: onDeletePress,
      svg: <MessageMenuDeleteButton />
    },
    {
      text: 'Select',
      action: onSelectPress,
      svg: <MessageMenuSelectButton />
    },
  ];

  const pinnedMessageScreenButtons = [
    {
      text: 'Copy',
      action: async () => {
        await Clipboard.setStringAsync(coord.message?.content!);
        if(typeof onCopyPress === 'function')
          onCopyPress();
      },
      svg: <MessageMenuCopyButton />
    },
    {
      text: 'Unpin',
      action: () => {
        if(typeof onPinPress === 'function')
          onPinPress(coord.message!);
      },
      svg: <MessageMenuPinButton />
    },
    {
      text: 'Forward',
      action: () => {},
      svg: <MessageMenuForwardButton />
    },
    {
      text: 'Delete',
      color: 'red',
      action: onDeletePress,
      svg: <MessageMenuDeleteButton />
    },
  ]

  const durationOfAnimation: number = 10;
  const [state, setState] = useState(1);
  const easing: EasingFunction = Easing.linear;
  const firstContainerOpacity = firstContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const firstContainerPositionY = firstContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  const secondContainerOpacity = secondContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const secondContainerPositionY = secondContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  // Аналогічно для інших контейнерів
  const thirdContainerOpacity = thirdContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const thirdContainerPositionY = thirdContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  const fourthContainerOpacity = fourthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const fourthContainerPositionY = fourthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  const fifthContainerOpacity = fifthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const fifthContainerPositionY = fifthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  const sixthContainerOpacity = sixthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const sixthContainerPositionY = sixthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  const animateOfFirstContainer = Animated.timing(firstContainerTranslate, {
    toValue: state, // Верхня позиція (видимий) або поза екраном (не видимий)
    duration: durationOfAnimation, // Тривалість анімації
    easing,
    useNativeDriver: false,
  });
  const animateOfSecondContainer = Animated.timing(secondContainerTranslate, {
    toValue: state,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  const animateOfThirdContainer = Animated.timing(thirdContainerTranslate, {
    toValue: state,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  const animateOfFourthContainer = Animated.timing(fourthContainerTranslate, {
    toValue: state,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  const animateOfFifthContainer = Animated.timing(fifthContainerTranslate, {
    toValue: state,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });
  
  const animateOfSixthContainer = Animated.timing(sixthContainerTranslate, {
    toValue: state,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  const containerSize = Animated.timing(containerWidth, {
    toValue: state, // Кінцева ширина
    duration: durationOfAnimation, // Тривалість анімації (в мілісекундах)
    useNativeDriver: true, // Вимагається для анімації стилів
  });
  useEffect(() => {
    Animated.sequence([
      containerSize,
      animateOfFirstContainer,
      animateOfSecondContainer,
      animateOfThirdContainer,
      animateOfFourthContainer,
      animateOfFifthContainer,
      animateOfSixthContainer,
    ]).start(() => setState(0));
  }, []);

  const closeMenu = () => {
    Animated.sequence([
      animateOfSixthContainer,
      animateOfFifthContainer,
      animateOfFourthContainer,
      animateOfThirdContainer,
      animateOfSecondContainer,
      animateOfFirstContainer,
      containerSize,
    ]).start();
  }

  const helperFunc = (index: number) => {
    switch(index) {
      case 0: {
        return {
          transform: [{ translateY: sixthContainerPositionY }],
          opacity: sixthContainerOpacity,
        }
      }
      case 1: {
        return {
          transform: [{ translateY: fifthContainerPositionY }],
          opacity: fifthContainerOpacity,
        }
      }
      case 2: {
        return {
          transform: [{ translateY: fourthContainerPositionY }],
          opacity: fourthContainerOpacity,
        }
      }
      case 3: {
        return {
          transform: [{ translateY: thirdContainerPositionY }],
          opacity: thirdContainerOpacity,
        }
      }
      case 4: {
        return {
          transform: [{ translateY: secondContainerPositionY }],
          opacity: secondContainerOpacity,
        }
      }
      case 5: 
      return {
        transform: [{ translateY: firstContainerPositionY }],
        opacity: firstContainerOpacity,
      }
      default: {
        return { transform: [{ scale: containerWidth }] }
      }
    }
  }

  const onLayout = (event:any) => {
    const { width, height } = event.nativeEvent.layout;
    size = { width, height }
  };
  
  const handleMenuPosition = () => {
    if(isUser) {
      if((coord?coord.pageY:0) < height-screenHeight*0.06-size.height){
        return { top:(coord?coord.pageY:0), left:(coord?width-coord.width-10:0)-size.width-10 }
      }
      else {
        return { top:(coord?coord.pageY:0)-size.height, left:(coord?width-coord.width-10:0)-size.width-10 }
      }
    } else {
      if((coord?coord.pageY:0) < height-screenHeight*0.06-size.height) {
        return { top:(coord?coord.pageY:0), right:(coord?width-coord.width-10:0)-size.width-5 }
      } else {
        return { top:(coord?coord.pageY:0)-size.height, right:(coord?width-coord.width-10:0)-size.width-5 }
      }
    }
  }
  
  const handleTrianglePosition = () => {
    if(isUser) {
      if((coord?coord.pageY:0) < height-screenHeight*0.06-size.height){
        return [
          footerstyles.triangle,
          footerstyles.positionOfModalWindowRightTop,
        ]
      } else {
        return [
          footerstyles.triangle,
          footerstyles.positionOfModalWindowRightBottom,
        ]
      }
    } else {
      if((coord?coord.pageY:0) < height-screenHeight*0.06-size.height) {
        return [
          footerstyles.triangle,
          footerstyles.positionOfModalWindowLeftTop,
        ]
      } else {
        return [
          footerstyles.triangle,
          footerstyles.positionOfModalWindowLeftBottom,
        ]
      }
    }
  }

  return (
    <TouchableOpacity 
      activeOpacity={1} 
      style={styles.container} 
      onPress={() => {
        closeMenu();
        setTimeout(() => onOverlayPress(), 100)
      }}
    >
      <View style={{ top: coord.componentPageY, height: coord.height }}>
        {(coord.message?.messageResponseId&&messages.findIndex(m => m.messageId === coord.message?.messageResponseId)>=0)?<ReplyTextDummyMessage message={coord.message} messages={messages} isUser={isUser} height={coord.height} userMessageLastWatched={userMessageLastWatched} />:
        <DefaultTextDummyMessage message={coord.message} isUser={isUser} height={coord.height} userMessageLastWatched={userMessageLastWatched} />}
      </View>
      <View 
        onLayout={onLayout}
        style={[styles.buttonsContainer, handleMenuPosition()]}
      >
        {(pinnedMessageScreen?pinnedMessageScreenButtons:buttons).map((button, index) => {
          return button.text=='Edit'&&!isUser? null: 
          <Animated.View key={button.text} style={helperFunc(index)}>
            {(button.text==='Reply'||(button.text==='Copy'&&pinnedMessageScreen))&&(coord?coord.pageY:0) < height-screenHeight*0.06-size.height?
            <View
              style={handleTrianglePosition()}
            />:null}
            <TouchableOpacity 
              key={index} 
              onPress={() => {button.action!(); onOverlayPress()}} 
              activeOpacity={1} 
              style={styles.button}
            >
              {button.svg}
              <Text style={{color:button.color, marginLeft: 5}}>{button.text}</Text>
            </TouchableOpacity>
            {(button.text==='Select'||(pinnedMessageScreen&&button.text==='Delete'))&&(coord?coord.pageY:0) > height-screenHeight*0.06-size.height?
            <View
              style={handleTrianglePosition()}
            />:null}
          </Animated.View>
        })}
      </View>
    </TouchableOpacity>
  );
})

export default connect(null)(MessageMenu);