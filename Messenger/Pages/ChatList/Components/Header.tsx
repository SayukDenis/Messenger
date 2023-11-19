import { createRef, useDebugValue, useEffect, useRef, useState } from "react";
import React from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";
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
import RightContainersForSwipe from "./List of folders containers/RightContainersForSwipe";
import RightContainer from "./Headers containers/RightContainer";
import HamburgerSVG from "./SVG/HamburgerSVG";
import BackButtonForHeaderChatListSVG from "./SVG/BackButtonForHeaderChatListSVG";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function Header({
  mySelfUser,
  isTouchableHeader,
  onPress,
}: {
  mySelfUser: MySelfUser;
  isTouchableHeader: boolean;
  onPress: () => void;
}) {
  const HamburgerAnimationDuration = 150;
  const [animationStateForTouchHamburger, setAnimationStateForTouchHamburger] =
    useState(1);
  const HamburgerAnimationStatePosition = useRef(new Animated.Value(0));
  const HamburgerAnimationPosition =
    HamburgerAnimationStatePosition.current.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -screenWidth * 0.8],
    });

  const onHamburgerPres = () => {
    Animated.timing(HamburgerAnimationStatePosition.current, {
      toValue: animationStateForTouchHamburger,
      duration: HamburgerAnimationDuration,
      useNativeDriver: true,
    }).start();
    setAnimationStateForTouchHamburger(
      animationStateForTouchHamburger == 0 ? 1 : 0
    );
  };

  return (
    <View
      style={[
        {
          position: "absolute",
          //top: Platform.OS == "android" ? 100 : 0,
          left: 0,
          right: 0,
          zIndex: 5,
          elevation: 0.001,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          height:
            Platform.OS == "android"
              ? screenHeight * 0.08 + StatusBar.currentHeight
              : screenHeight * 0.08 + Constants.statusBarHeight,
          justifyContent: "flex-end",
        },
      ]}
    >
      <View style={headerstyles.container}>
        <Animated.View style={[headerstyles.header]}>
          <Animated.View
            style={{
              flexDirection: "row",
              transform: [{ translateX: HamburgerAnimationPosition }],
            }}
          >
            <Animated.View
              style={[
                {
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: screenWidth * 0.96,
                },
              ]}
            >
              <MagnifyingGlass style={headerstyles.magnifyingglass} />
              <ModeOfEmployment />
              <TouchableOpacity
                style={{justifyContent:"center"}}
                onPress={onHamburgerPres}
              >
               {animationStateForTouchHamburger==1?<HamburgerSVG/>:<BackButtonForHeaderChatListSVG/>} 
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={[
              { transform: [{ translateX: HamburgerAnimationPosition }] },
            ]}
          >
            <RightContainer />
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}
export default connect(null)(Header);
