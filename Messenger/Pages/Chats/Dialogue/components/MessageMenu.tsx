import { Dispatch, MutableRefObject, SetStateAction, memo, useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text, Dimensions, Animated, EasingFunction, Easing } from "react-native";
import React from 'react';
import { messageMenuProps } from "./interfaces/IMessageMenu";
import { styles } from './Styles/MessageMenu';
import { screenHeight, screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";

const {width, height} = Dimensions.get('window');

let size:{ width:number, height:number } = { width: 0, height: 0 };
const messageMenu = memo(({isVisible, onOverlayPress, coord, onReplyPress, onEditPress, isUser, onDeletePress}:messageMenuProps) => {
  if(!isVisible) 
      return null;
    
  const buttons = [
    {
      text: 'Reply',
      action: onReplyPress,
    },
    {
      text: 'Edit',
      action: onEditPress,
    },
    {
      text: 'Copy',
      action: () => {},
    },
    {
      text: 'Pin',
      action: () => {},
    },
    {
      text: 'Forward',
      action: () => {},
    },
    {
      text: 'Delete',
      color: 'darkred',
      action: onDeletePress
    },
    {
      text: 'Select',
      action: () => {},
    },
  ];

  const containerWidth = new Animated.Value(0); 
  const firstContainerTranslate = new Animated.Value(0); 
  const secondContainerTranslate = new Animated.Value(0);
  const thirdContainerTranslate = new Animated.Value(0);
  const fourthContainerTranslate = new Animated.Value(0);
  const fifthContainerTranslate = new Animated.Value(0);
  const sixthContainerTranslate = new Animated.Value(0);
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

  const onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    size = { width, height }
  };

  const handleMenuPosition = () => {
    console.log((coord?coord.pageY:0))
    if(isUser) {
      if((coord?coord.pageY:0) < 600)
        return { top:(coord?coord.pageY:0), left:(coord?width-coord.width-10:0)-size.width-5 }
      else
        return { top:600, left:(coord?width-coord.width-10:0)-size.width-5 }
    } else {
      if((coord?coord.pageY:0) < 600) {
        return { top:(coord?coord.pageY:0), right:(coord?width-coord.width-10:0)-size.width-5 }
      } else {
        return { top:600, right:(coord?width-coord.width-10:0)-size.width-5 }
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
      <View 
        onLayout={onLayout}
        style={[styles.buttonsContainer, handleMenuPosition()]}
      >
        {buttons.map((button, index) => {
          return button.text=='Edit'&&!isUser? null: 
          <Animated.View key={button.text} style={helperFunc(index)}>
            {button.text==='Reply'&&coord.pageY<screenHeight/2?
            <View
              style={[
                footerstyles.triangle,
                isUser?footerstyles.positionOfModalWindowRightTop:footerstyles.positionOfModalWindowLeftTop,
              ]}
            />:null}
            <TouchableOpacity 
              key={index} 
              onPress={() => {button.action(); onOverlayPress()}} 
              activeOpacity={1} 
              style={styles.button}
            >
              <Text style={{color:button.color}}>{button.text}</Text>
            </TouchableOpacity>
            {button.text==='Select'&&coord.pageY>screenHeight/2?
            <View
              style={[
                footerstyles.triangle,
                footerstyles.positionOfModalWindowRightBottom,
              ]}
            />:null}
          </Animated.View>
        })}
      </View>
    </TouchableOpacity>
  );
})

const footerstyles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: screenWidth * 0.015,
    borderRightWidth: screenWidth * 0.015,
    borderBottomWidth: screenWidth * 0.03,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#E7E6E4",
    position: "relative",
  },
  positionOfModalWindowLeftBottom: {
    transform: [{ rotate: "100deg" }],
    bottom: screenHeight * 0.009,
    left: screenWidth * 0.005,
  },
  positionOfModalWindowRightBottom: {
    transform: [{ rotate: "-100deg" }],
    bottom: screenHeight * 0.009,
    left: screenWidth * 0.17,
  },
  positionOfModalWindowLeftTop: {
    transform: [{ rotate: "322.5deg" }],
    bottom: -screenHeight * 0.006,
    left: -screenWidth * 0.008,
  },
  positionOfModalWindowRightTop: {
    transform: [{ rotate: "-322.5deg" }],
    bottom: -screenHeight * 0.006,
    left: screenWidth * 0.18,
  },
});

export default messageMenu;