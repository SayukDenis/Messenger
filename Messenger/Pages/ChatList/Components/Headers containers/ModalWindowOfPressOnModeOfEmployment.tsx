import {
  View,
  Text,
  Animated,
  Dimensions,
  Easing,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ContainerForHeaderModeOfEmploymentWithArrow from "./ContainerForHeaderModeOfEmploymentWithArrow";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import { FlatList } from "react-native";
import Tab from "../../../../dao/Models/Tab";
import ContainerForHeaderModeOfEmployment from "./ContainerForHeaderModeOfEmployment";
import {
  setCurrentTab,
  setEnumForChatListBlurs,
  setStateForEndOfBlurForChatList,
} from "../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import { EnumForChatListBlurs } from "../Enums/EnumsForChatListBlurs";
import { screenHeight } from "../../Constants/ConstantsForChatlist";

const ModalWindowOfPressOnModeOfEmployment = () => {
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });
  const durationOfAnimation: number = 30;
  const activeOpacityOnTouch = Platform.OS == "android" ? 1 : 0.8;
  let tabs: Tab[] = [];
  const dispatch = useDispatch();
  const [stateForAnimation, setStateForAnimation] = useState(0);
  for (let index = 0; index < selfProfile.tabs.length; index++) {
    if (index < 3) {
      tabs[index] = selfProfile.tabs[index];
    }
  }
  const blurState = useSelector((state: any) => {
    let blur: EnumForChatListBlurs =
      state.chatListReducer.enumForChatListBlurs.enumForChatListBlurs;
    return blur;
  });

  const animationValueForBackButton = useState(new Animated.Value(0))[0];
  const animationValueForCustomButton = useState(new Animated.Value(0))[0];
  const animationsValues = Array.from({ length: tabs.length }, (_, index) =>
    useState(new Animated.Value(0))
  );

  const translateYForCustomButton = animationValueForCustomButton.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenHeight * 0.05, 0],
  });
  const currentTab = useSelector((state: any) => {
    let Tab = state.chatListReducer.currentTab.currentTab;
    return Tab;
  });
  const translateYOfContainers = animationsValues.map(
    (animatedValue, index) => {
      return animatedValue[0].interpolate({
        inputRange: [0, 1],
        outputRange: [-screenHeight * 0.05, 0],
      });
    }
  );
  const onTouchTab = tabs.map((value, index) => {
    return () => {
      dispatch(setCurrentTab(index));
      animationStart.start(() => {
        dispatch(setEnumForChatListBlurs(EnumForChatListBlurs.None));
        dispatch(setStateForEndOfBlurForChatList(false));
      });
    };
  });
  const animation = (value: Animated.Value) => {
    const animationForResult = Animated.timing(value, {
      toValue: stateForAnimation == 0 ? 1 : 0,
      easing: Easing.linear,
      duration: durationOfAnimation,
      useNativeDriver: true,
    });
    return animationForResult;
  };
  const animationForBackButton = animation(animationValueForBackButton);
  const animationForCustomButton = animation(animationValueForCustomButton);
  const animationsForTabs = animationsValues.map((animatedValue, index) => {
    return animation(animatedValue[0]);
  });
  animationsForTabs.unshift(animationForBackButton);
  animationsForTabs.push(animationForCustomButton);
  const animationStart = Animated.sequence(
    stateForAnimation == 0
      ? animationsForTabs
      : animationsForTabs.slice().reverse()
  );
  useEffect(() => {
    animationStart.start(() => {
      setStateForAnimation((prev) => (prev == 0 ? 1 : 0));
    });
  }, []);
  useEffect(() => {
    endAnimation();
  }, [blurState]);
  const endAnimation = () => {
    if (blurState == EnumForChatListBlurs.None && stateForAnimation == 1) {
      animationStart.start(() => {
        dispatch(setStateForEndOfBlurForChatList(false));
      });
    }
  };
  const OnBackButtonClick = () => {
    animationStart.start(() => {
      dispatch(
        setEnumForChatListBlurs(EnumForChatListBlurs.ModeOfEmploymentTouch)
      );
    });
  };
  const OnCustomModeOfEmploymentTouch = () => {
    console.log(10);
  };
  return (
    <TouchableOpacity>
      <TouchableOpacity
        onPress={OnBackButtonClick}
        activeOpacity={activeOpacityOnTouch}
      >
        <Animated.View style={{ opacity: animationValueForBackButton }}>
          <ContainerForHeaderModeOfEmploymentWithArrow>
            <Text style={{ marginLeft: 15, fontSize: 13 }}>{"Back"}</Text>
          </ContainerForHeaderModeOfEmploymentWithArrow>
        </Animated.View>
      </TouchableOpacity>
      <FlatList
        style={{ top: screenHeight * 0.05 }}
        data={tabs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={activeOpacityOnTouch}
            onPress={onTouchTab[index]}
          >
            <Animated.View
              style={{
                height: screenHeight * 0.05,
                opacity: animationsValues[index][0],
                transform: [{ translateY: translateYOfContainers[index] }],
              }}
            >
              <ContainerForHeaderModeOfEmployment>
                <Text style={{ marginLeft: 15, fontSize: 13 }}>
                  {item.title}
                </Text>
              </ContainerForHeaderModeOfEmployment>
            </Animated.View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity activeOpacity={activeOpacityOnTouch}>
        <Animated.View
          style={{
            top: screenHeight * 0.05,
            opacity: animationValueForCustomButton,
            transform: [{ translateY: translateYForCustomButton }],
          }}
        >
          <ContainerForHeaderModeOfEmployment>
            <Text style={{ marginLeft: 15, fontSize: 13 }}>
              {"Custom mode of employment"}
            </Text>
          </ContainerForHeaderModeOfEmployment>
        </Animated.View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default connect(null)(ModalWindowOfPressOnModeOfEmployment);
