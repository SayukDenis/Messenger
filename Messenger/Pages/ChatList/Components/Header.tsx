import CentralHeaderContainer from "./Headers containers/CentralHeaderContainer";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { View, Animated, LayoutChangeEvent } from "react-native";
import { headerstyles } from "../Styles/HeaderStyle";
import { connect, useDispatch, useSelector } from "react-redux";
import RightContainer from "./Headers containers/RightContainer";
import {
  setBooleanForTouchOnHamburgerInHeaderChatList,
  setEnumForChatListBlurs,
  setLayoutOfModeOfEmployment,
} from "../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import { booleanForLogging } from "../ChatList";
import HeaderContainer from "../../SemiComponents/HeaderContainer";
import { EnumForChatListBlurs } from "./Enums/EnumsForChatListBlurs";
import { GestureResponderEvent } from "react-native-modal";
import { screenHeight, screenWidth } from "../Constants/ConstantsForChatlist";
import ModalWindowSelectionChatHeader from "./List of folders containers/ModalWindowSelectionChatComponents/ModalWindowSelectionChatHeader";

interface HeaderProps {
  navigation: any;
  isSelectChatMode: boolean;
  unsetSelectChatMode: React.MutableRefObject<() => void>;
}

const Header: React.FC<HeaderProps> = ({
  navigation,
  isSelectChatMode,
  unsetSelectChatMode,
}) => {
  const isTouchableForHeader = useSelector((state: any) => {
    return state.chatListReducer.booleanForHamburgerTouchable.isTouchable;
  });

  const dispatch = useDispatch();

  const OnHamburgerPressForDispatch = () => {
    dispatch(
      setBooleanForTouchOnHamburgerInHeaderChatList(!isTouchableForHeader)
    );
  };

  const PressOnModesOfEmployment = (event: GestureResponderEvent) => {
    dispatch(
      setEnumForChatListBlurs(EnumForChatListBlurs.ModeOfEmploymentTouch)
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
    Animated.timing(HamburgerAnimationStatePosition.current, {
      toValue: animationStateForTouchHamburger,
      duration: HamburgerAnimationDuration,
      useNativeDriver: true,
    }).start();
    setAnimationStateForTouchHamburger(
      animationStateForTouchHamburger == 0 ? 1 : 0
    );
  };

  const OnLayoutModeOfEmployment = (event: LayoutChangeEvent) => {
    dispatch(setLayoutOfModeOfEmployment(event.nativeEvent.layout));
  };

  const selectionChatHeaderAnimationDuration = 400;

  const selectionChatHeaderAnimationStatePosition = useRef(
    new Animated.Value(0)
  );
  const selectionChatHeaderMainHeaderAnimationStatePosition = useRef(
    new Animated.Value(0)
  );

  const selectionChatHeaderAnimationPosition =
    selectionChatHeaderAnimationStatePosition.current.interpolate({
      inputRange: [0, 1],
      outputRange: [-screenHeight * 0.08, 0],
    });
  const selectionChatHeaderMainHeaderAnimationPosition =
    selectionChatHeaderMainHeaderAnimationStatePosition.current.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -screenHeight * 0.08],
    });

  useEffect(() => {
    if (isSelectChatMode) {
      Animated.sequence([
        Animated.timing(
          selectionChatHeaderMainHeaderAnimationStatePosition.current,
          {
            toValue: 1,
            duration: selectionChatHeaderAnimationDuration,
            useNativeDriver: true,
          }
        ),
        Animated.timing(selectionChatHeaderAnimationStatePosition.current, {
          toValue: 1,
          duration: selectionChatHeaderAnimationDuration,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(selectionChatHeaderAnimationStatePosition.current, {
          toValue: 0,
          duration: selectionChatHeaderAnimationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(
          selectionChatHeaderMainHeaderAnimationStatePosition.current,
          {
            toValue: 0,
            duration: selectionChatHeaderAnimationDuration,
            useNativeDriver: true,
          }
        ),
      ]).start();
    }
  }, [isSelectChatMode]);

  return (
    <HeaderContainer>
      <View style={[headerstyles.header]}>
        <Animated.View
          style={[
            {
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: 90,
              transform: [{ translateY: selectionChatHeaderAnimationPosition }],
            },
          ]}
        >
          <ModalWindowSelectionChatHeader
            unsetSelectChatMode={unsetSelectChatMode}
          />
        </Animated.View>
        <Animated.View
          style={{
            flexDirection: "row",
            transform: [
              { translateX: HamburgerAnimationPosition },
              { translateY: selectionChatHeaderMainHeaderAnimationPosition },
            ],
          }}
        >
          <CentralHeaderContainer
            OnLayoutModeOfEmployment={OnLayoutModeOfEmployment}
            PressOnModesOfEmployment={PressOnModesOfEmployment}
            onHamburgerPress={onHamburgerPress}
            OnHamburgerPressForDispatch={OnHamburgerPressForDispatch}
            animationStateForTouchHamburger={animationStateForTouchHamburger}
            navigation={navigation}
          />
        </Animated.View>
        <Animated.View
          style={[{ transform: [{ translateX: HamburgerAnimationPosition }] }]}
        >
          <RightContainer navigation={navigation} />
        </Animated.View>
      </View>
    </HeaderContainer>
  );
};

export default connect(null)(Header);
