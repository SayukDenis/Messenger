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
import { connect } from "react-redux";
import RightContainer from "./Headers containers/RightContainer";
import HamburgerSVG from "./SVG/HamburgerSVG";
import BackButtonForHeaderChatListSVG from "./SVG/BackButtonForHeaderChatListSVG";
import { LinearGradient } from "expo-linear-gradient";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function Header({

  isTouchableHeader,
  onPress,
  navigation,
}: {

  isTouchableHeader: boolean;
  onPress: () => void;
  navigation: any;
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
          //backgroundColor:"black",
          height:
            Platform.OS == "android"
              ? screenHeight * 0.08 + StatusBar.currentHeight
              : screenHeight * 0.08 + Constants.statusBarHeight,
          justifyContent: "flex-end",
          overflow:"hidden",
        },
      ]}
    >
      
      <View style={headerstyles.container}>
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        locations={[0.25, 0.5, 0.75]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          opacity:0.7,
          top: 0,
          position:"absolute",
          left: 0,
          right: 0,
          height: screenHeight,
          width: screenWidth,

        
        }}
      />
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
                style={{ justifyContent: "center" }}
                onPress={onHamburgerPres}
              >
                {animationStateForTouchHamburger == 1 ? (
                  <HamburgerSVG />
                ) : (
                  <BackButtonForHeaderChatListSVG />
                )}
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={[
              { transform: [{ translateX: HamburgerAnimationPosition }] },
            ]}
          >
            <RightContainer navigation={navigation} />
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}
export default connect(null)(Header);
