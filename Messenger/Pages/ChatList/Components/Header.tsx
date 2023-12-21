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
import { connect, useDispatch, useSelector } from "react-redux";
import RightContainer from "./Headers containers/RightContainer";
import HamburgerSVG from "./SVG/HamburgerSVG";
import BackButtonForHeaderChatListSVG from "./SVG/BackButtonForHeaderChatListSVG";
import { LinearGradient } from "expo-linear-gradient";
import { setBooleanForTouchOnHamburgerInHeaderChatList } from "../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import { booleanForLogging } from "../ChatList";
import HeaderContainer from "../../SemiComponents/HeaderContainer";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function Header({ navigation }: { navigation: any }) {
  const isTouchableForHeader = useSelector((state: any) => {
    //console.log("ABOBA")
    // console.log(state.chatListReducer.booleanForHamburgerTouchable.isTouchable)
    return state.chatListReducer.booleanForHamburgerTouchable.isTouchable;
  });
  const dispatch = useDispatch();
  const OnHamburgerPressForDispatch = () => {
    dispatch(
      setBooleanForTouchOnHamburgerInHeaderChatList(!isTouchableForHeader)
    );
  };
  useEffect(() => {
    if (!isTouchableForHeader && animationStateForTouchHamburger == 0) {
      onHamburgerPress();
    }
  }, [isTouchableForHeader]);
  useEffect(() => {
    if (booleanForLogging) {
      console.log("RERENDER HEADER");
    }
  });
  const HamburgerAnimationDuration = 150;
  const [animationStateForTouchHamburger, setAnimationStateForTouchHamburger] =
    useState(1);
  const HamburgerAnimationStatePosition = useRef(new Animated.Value(0));
  const HamburgerAnimationPosition =
    HamburgerAnimationStatePosition.current.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -screenWidth * 0.8],
    });

  const onHamburgerPress = () => {
    console.log(isTouchableForHeader);
    console.log(animationStateForTouchHamburger);

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
    <HeaderContainer>
     <View style={headerstyles.header}>
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
            onPress={() => {
              onHamburgerPress(), OnHamburgerPressForDispatch();
            }}
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
        style={[{ transform: [{ translateX: HamburgerAnimationPosition }] }]}
      >
        <RightContainer navigation={navigation} />
      </Animated.View>
     </View>
    </HeaderContainer>
  );
}
export default connect(null)(Header);
