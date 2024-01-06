import {
  Animated,
  Dimensions,
  Platform,
  View,
  Text,
  Easing,
} from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { footerstyles } from "../../Styles/FooterStyle";
import { EnumForChatListBlurs } from "../Enums/EnumsForChatListBlurs";
import {
  setEnumForChatListBlurs,
  setStateForEndOfBlurForChatList,
} from "../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import ContainerForHeaderModeOfEmploymentWithArrow from "./ContainerForHeaderModeOfEmploymentWithArrow";
import ContainerForHeaderModeOfEmployment from "./ContainerForHeaderModeOfEmployment";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const ModalWindowOfPressOnHeadersAvatar = () => {
  
  const blurState = useSelector((state: any) => {
    let blur: EnumForChatListBlurs =
      state.chatListReducer.enumForChatListBlurs.enumForChatListBlurs;
    return blur;
  });
  const dispatch = useDispatch();
  const animationDuration = 100;
  const positionOfFirstContainer = useState(new Animated.Value(0))[0];
  const positionOfSecondContainer = useState(new Animated.Value(0))[0];
  const [stateForFirstAnimation, setStateForFirstAnimation] =
    useState<number>(0);
  const firstAnimationForFirstContainer = Animated.timing(
    positionOfFirstContainer,
    {
      toValue: stateForFirstAnimation == 0 ? 1 : 0,
      duration:
        Platform.OS == "android" ? animationDuration * 0.2 : animationDuration,
      useNativeDriver: false,
      easing: Easing.linear,
    }
  );
  const secondAnimationForFirstContainer = Animated.timing(
    positionOfSecondContainer,
    {
      toValue: stateForFirstAnimation == 0 ? 1 : 0,
      duration: animationDuration,
      useNativeDriver: false,
      easing: Easing.linear,
    }
  );
  const secondContainerForFirstAnimationPositionInterpolate =
    positionOfSecondContainer.interpolate({
      inputRange: [0, 1],
      outputRange: [-screenHeight * 0.05, 0],
    });
  const OnPressOnSelectModeOfEmployment = () => {
    //console.log(1);

    startFirstAnimation.start(() => {
      dispatch(
        setEnumForChatListBlurs(EnumForChatListBlurs.SelectModeOfEmployment)
      );
      setStateForFirstAnimation(0)
    });
  };
  useEffect(() => {
   

    if (blurState == EnumForChatListBlurs.None && stateForFirstAnimation == 1) {
      startFirstAnimation.start(() => {
      
        dispatch(setStateForEndOfBlurForChatList(false));
        setStateForFirstAnimation(0)
      });
    }
  }, [blurState]);

  const OnPressOnSelectActivity = () => {
    console.log(2);
  };
  const startFirstAnimation = Animated.sequence(
    stateForFirstAnimation == 0
      ? [firstAnimationForFirstContainer, secondAnimationForFirstContainer]
      : [secondAnimationForFirstContainer, firstAnimationForFirstContainer]
  );

  useEffect(() => {
    startFirstAnimation.start(() => {
      setStateForFirstAnimation((prev) => {
        return prev == 0 ? 1 : 0;
      });
    });
  }, []);

  return (
    <>
      <TouchableOpacity
        activeOpacity={Platform.OS == "ios" ? 0.5 : 1}
        onPress={OnPressOnSelectModeOfEmployment}
      >
        <Animated.View style={{ opacity: positionOfFirstContainer }}>
          <ContainerForHeaderModeOfEmploymentWithArrow>
            <Text style={{ marginLeft: 15, fontSize: 13 }}>
              {"Select mode of employment"}
            </Text>
          </ContainerForHeaderModeOfEmploymentWithArrow>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={OnPressOnSelectActivity}
        activeOpacity={Platform.OS == "ios" ? 0.5 : 1}
      >
        <Animated.View style={{opacity: positionOfSecondContainer,
              transform: [
                {
                  translateY:
                    secondContainerForFirstAnimationPositionInterpolate,
                },
              ], top: screenHeight * 0.05,}}>
          <ContainerForHeaderModeOfEmployment>
          <Text style={{ marginLeft: 15, fontSize: 13 }}>
              {"Select an activity"}
            </Text>
          </ContainerForHeaderModeOfEmployment>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};

export default ModalWindowOfPressOnHeadersAvatar;
