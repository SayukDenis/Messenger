import { createRef, useDebugValue, useEffect, useState } from "react";
import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  Animated,
  Dimensions,
  ScrollView,
  Easing,
} from "react-native";
import { headerstyles } from "../Styles/HeaderStyle";
import MagnifyingGlass from "./Headers containers/MagnifyingGlass";
import ModeOfEmployment from "./Headers containers/ModeOfEmployment";
import Line from "./Headers containers/Line";
import MySelfUser from "../1HelpFullFolder/MySelfUser";
import ContactsSvg from "./SVG/ContactsSvg";
import AddFolderSvg from "./SVG/AddFolderSvg";
import WriteMessageSvg from "./SVG/WriteMessageSvg";
import UserIconSvg from "./SVG/UserIconSvg";
import { connect } from "react-redux";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

 function Header({ mySelfUser,isTouchableHeader,onPress }: { mySelfUser: MySelfUser,isTouchableHeader:boolean,onPress:()=>void}) {
  const timeForLineAnimation: number = 150 * 26;
  const rotateGradusOfLines: number = 45;
  const kefOfTransform: number = 0.6;
  const kefOfTransformHeight: number = 0.8;
  const kefForSizeOfSvg: number = 0.073;
  const kefOfTransition:number=0.01;
  const topLineValue = useState(new Animated.Value(0))[0];
  const middleLineValue = useState(new Animated.Value(1))[0];
  const bottomLineValue = useState(new Animated.Value(0))[0];
  const scrollX = useState(new Animated.Value(0))[0];
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [state, setState] = useState(1);
  const [stateForWidth, setStateForWidth] = useState(0);
  const topLineRotation = topLineValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [
      "0deg",
      `-${rotateGradusOfLines}deg`,
      `-${90 + rotateGradusOfLines}deg`,
      `-${180}deg`,
    ],
  });
  const bottomLineRotation = bottomLineValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [
      "0deg",
      `${rotateGradusOfLines}deg`,
      `${90 + rotateGradusOfLines}deg`,
      `${180}deg`,
    ],
  });
  const positionYOfTopLine = topLineValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [0, screenHeight*kefOfTransition, screenHeight *kefOfTransition, 0],
  });
  const positionYOfBottomLine = topLineValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [0, -screenHeight*kefOfTransition, -screenHeight *kefOfTransition, 0],
  });
  const scrollXPosition = scrollX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -screenWidth * 0.8],
  });
  useEffect(()=>{
    if(!isTouchableHeader&&state==0){
      hamburgerAnimation(null);
      
    }
  })
  const hamburgerAnimation = (e: GestureResponderEvent) => {
    if(!isTouchableHeader&&state==0){
    }
    else
    {
      onPress()
    }
    setIsButtonEnabled(false);
    setState(state == 0 ? 1 : 0);
    lineTransformation(e);
  };
  const lineTransformation = (e: GestureResponderEvent) => {
    const firstAnimatedTopLine = Animated.timing(topLineValue, {
      toValue: state == 0 ? 2 : 1,
      duration: timeForLineAnimation * 0.7,
      useNativeDriver: true,
    });
    const firstAnimatedBottomLine = Animated.timing(bottomLineValue, {
      toValue: state == 0 ? 2 : 1,
      duration: timeForLineAnimation * 0.7,
      useNativeDriver: true,
    });
    const secondAnimatedTopLine = Animated.timing(topLineValue, {
      toValue: state == 1 ? 2 : 3,
      duration: timeForLineAnimation,
      useNativeDriver: true,
    });
    const secondAnimatedBottomLine = Animated.timing(bottomLineValue, {
      toValue: state == 1 ? 2 : 3,
      duration: timeForLineAnimation,
      useNativeDriver: true,
    });
    const animateForMiddleLine = Animated.timing(middleLineValue, {
      toValue: state == 0 ? 1 : 0,
      duration: state == 1 ? 10 : timeForLineAnimation,
      useNativeDriver: true,
    });
    Animated.timing(scrollX, {
      toValue: state,
      duration: timeForLineAnimation * 1.3,
      useNativeDriver: true,
      easing: Easing.bezier(0, 0, 0, 0),
    }).start();
    state == 1 ? animateForMiddleLine.start() : null;
    firstAnimatedTopLine.start(() => {
      if (state == 0) {
        setStateForWidth(0);
      }
      animateForMiddleLine.start(() => {});
      secondAnimatedTopLine.start(() => {});
    });
    firstAnimatedBottomLine.start(() => {
      secondAnimatedBottomLine.start(() => {
        setIsButtonEnabled(true);
        if (state == 0) {
          Animated.timing(topLineValue, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }).start();
          Animated.timing(bottomLineValue, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }).start();
          setIsButtonEnabled(true);
        }
      });
    });
    state == 1 ? setStateForWidth(1) : null;
  };

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 5,
      }}
    >
      <View style={headerstyles.gapContainer} />
      <View style={headerstyles.container}>
        <View style={[headerstyles.header]}>
          <Animated.View
            style={[
              {
                justifyContent: "space-between",
                flexDirection: "row",
                width: screenWidth * 0.96,
                // backgroundColor:"blue",
              },
              { transform: [{ translateX: scrollXPosition }] },
            ]}
          >
            <MagnifyingGlass style={headerstyles.magnifyingglass} />
            <ModeOfEmployment />
            <TouchableOpacity
              onPress={hamburgerAnimation}
              disabled={!isButtonEnabled}
              style={{ flexDirection: "row" }}
            >
              <View
                style={[
                  headerstyles.hamburgerview,
                  { paddingRight: screenWidth * 0.01 },
                ]}
              >
                <Animated.View
                  style={{
                    transform: [
                      { rotate: topLineRotation },
                      { translateY: positionYOfTopLine },
                    ],
                  }}
                >
                  <Line
                    screenWidth={
                      stateForWidth == 0
                        ? screenWidth
                        : screenWidth * kefOfTransform
                    }
                    screenHeight={
                      stateForWidth == 0
                        ? screenHeight
                        : screenHeight * kefOfTransformHeight
                    }
                  />
                </Animated.View>
                <Animated.View style={{ opacity: middleLineValue }}>
                  <Line screenWidth={screenWidth} screenHeight={screenHeight} />
                </Animated.View>
                <Animated.View
                  style={{
                    transform: [
                      { rotate: bottomLineRotation },
                      { translateY: positionYOfBottomLine },
                    ],
                  }}
                >
                  <Line
                    screenWidth={
                      stateForWidth == 0
                        ? screenWidth
                        : screenWidth * kefOfTransform
                    }
                    screenHeight={
                      stateForWidth == 0
                        ? screenHeight
                        : screenHeight * kefOfTransformHeight
                    }
                  />
                </Animated.View>
              </View>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              {
                width: screenWidth * 0.765,
                flexDirection: "row",
                justifyContent: "space-between",
              },
              { transform: [{ translateX: scrollXPosition }] },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View style={{ alignSelf: "center",marginLeft: screenWidth * 0.025 }}>
                <ContactsSvg
                  width={screenWidth * kefForSizeOfSvg}
                  height={screenHeight * kefForSizeOfSvg}
                />
              </View>
              <View
                style={{ alignSelf: "center", marginLeft: screenWidth * 0.05 }}
              >
                <AddFolderSvg
                  width={screenWidth * kefForSizeOfSvg}
                  height={screenHeight * kefForSizeOfSvg}
                />
              </View>
              <View
                style={{ alignSelf: "center", marginLeft: screenWidth * 0.05 }}
              >
                <WriteMessageSvg
                  width={screenWidth * kefForSizeOfSvg}
                  height={screenHeight * kefForSizeOfSvg}
                />
              </View>
            </View>
            <View
              style={{
                alignSelf: "center",
              }}
            >
              <UserIconSvg
                width={screenWidth * kefForSizeOfSvg}
                height={screenHeight * kefForSizeOfSvg}
              />
            </View>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
export default connect(null)(Header);