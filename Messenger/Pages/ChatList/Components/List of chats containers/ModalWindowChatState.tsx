import React, { useEffect, useState } from "react";
import BlurAll from "../../../SemiComponents/BlurAll";
import { Platform, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { modalWindowChatStateStyle } from "../../Styles/ModalWindowChatStateStyle";
import { screenHeight } from "../../Constants/ConstantsForChatlist";
import ChatWindow from "./Modal window chat containers/ChatWindow";
import ChatMenuButtonsContainers from "./Modal window chat containers/ChatMenuButtons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ModalWindowChatStateProps {
  visibleChatModalWindow: boolean;
  setHiddenModalWindowChatState: React.MutableRefObject<() => void>;
}

const ModalWindowChatState: React.FC<ModalWindowChatStateProps> = ({
  visibleChatModalWindow,
  setHiddenModalWindowChatState,
}) => {
  if (!visibleChatModalWindow) return null;

  const [animation, setAnimation] = useState(true);

  if (!animation) setHiddenModalWindowChatState.current();

  const [visibleChatModalWindowContainer, setVisibleChatModalWindowContainer] =
    useState(true);

  const chatMenuTranslateYStartValue = -screenHeight * 0.04;
  const chatMenuTranslateYEndValue = 0;

  const chatMenuOpacityStartValue = 0;
  const chatMenuOpacityEndValue = 1;

  let menuButtonsSharedValues = new Array(ChatMenuButtonsContainers.length)
    .fill(null)
    .map(() => ({
      translateY: useSharedValue(chatMenuTranslateYStartValue),
      opacity: useSharedValue(chatMenuOpacityStartValue),
    }));

  const chatWindowScaleStartValue = 0;
  const chatWindowScaleEndValue = 1;
  const scaleChatWindow = useSharedValue(chatWindowScaleStartValue);

  const chatWindowOpacityStartValue = 0;
  const chatWindowOpacityEndValue = 1;
  const opacityChatWindow = useSharedValue(chatWindowOpacityStartValue);

  const setEndAnimation = () => {
    setAnimation(false);
  };

  const animationChatWindowInDuration = 180;
  const animationChatWindowOutDuration = 180;
  const animationChatWindowEasing = Easing.inOut(Easing.quad);

  const animationButtonDuration = 30;
  const animatonDelay = animationButtonDuration;

  const showAnimation = () => {
    if (visibleChatModalWindowContainer) {
      // Chat window input animation
      scaleChatWindow.value = withTiming(chatWindowScaleEndValue, {
        duration: animationChatWindowInDuration,
        easing: animationChatWindowEasing,
      });
      opacityChatWindow.value = withTiming(chatWindowOpacityEndValue, {
        duration: animationChatWindowInDuration,
      });

      // Chat menu input animation
      menuButtonsSharedValues.map((menuButton, index) => {
        menuButton.translateY.value = withDelay(
          animatonDelay * (index + 1) + animationChatWindowInDuration,
          withTiming(chatMenuTranslateYEndValue, {
            duration: animationButtonDuration,
          })
        );
        menuButton.opacity.value = withDelay(
          animatonDelay * (index + 1) + animationChatWindowInDuration,
          withTiming(chatMenuOpacityEndValue, { duration: 0 })
        );
      });

      setVisibleChatModalWindowContainer(false);
    } else {
      // Chat window output animation
      scaleChatWindow.value = withDelay(
        animatonDelay * (menuButtonsSharedValues.length + 1),
        withTiming(
          chatWindowScaleStartValue,
          {
            duration: animationChatWindowOutDuration,
            easing: animationChatWindowEasing,
          },
          (isFinished) => {
            if (isFinished) runOnJS(setEndAnimation)();
          }
        )
      );
      opacityChatWindow.value = withDelay(
        animatonDelay * (menuButtonsSharedValues.length + 1),
        withTiming(chatWindowOpacityStartValue, {
          duration: animationChatWindowOutDuration,
        })
      );

      // Chat menu output animation
      menuButtonsSharedValues.reverse().map((menuButton, index) => {
        menuButton.translateY.value = withDelay(
          animatonDelay * (index + 1),
          withTiming(
            chatMenuTranslateYStartValue,
            { duration: animationButtonDuration },
            (isFinished) => {
              if (isFinished)
                menuButton.opacity.value = chatMenuOpacityStartValue;
            }
          )
        );
      });
    }
  };

  useEffect(() => {
    setTimeout(showAnimation, 1);
  }, []);

  return (
    <BlurAll handlePress={() => {}} handlePressOut={showAnimation}>
      <View
        style={[
          modalWindowChatStateStyle.modalWindowScreen,
          {
            paddingBottom:
              modalWindowChatStateStyle.modalWindowScreen.paddingBottom +
              (Platform.OS === "ios" ? useSafeAreaInsets().bottom : 0),
          },
        ]}
      >
        <View style={modalWindowChatStateStyle.modalWindowContainer}>
          <View style={modalWindowChatStateStyle.chatWindowContainer}>
            <Animated.View
              style={[
                modalWindowChatStateStyle.chatWindowContainerAnimated,
                {
                  transform: [{ scale: scaleChatWindow }],
                  opacity: opacityChatWindow,
                },
              ]}
            >
              <ChatWindow />
            </Animated.View>
          </View>

          <View style={modalWindowChatStateStyle.chatMenuContainer}>
            {menuButtonsSharedValues.map((menuButton, index) => {
              return (
                <Animated.View
                  style={{
                    zIndex: menuButtonsSharedValues.length - index,
                    transform: [{ translateY: menuButton.translateY }],
                    opacity: menuButton.opacity,
                  }}
                >
                  {index == 0 ? (
                    <View style={modalWindowChatStateStyle.chatMenuTriangle} />
                  ) : null}
                  {ChatMenuButtonsContainers[index]}
                </Animated.View>
              );
            })}
          </View>
        </View>
      </View>
    </BlurAll>
  );
};

export default ModalWindowChatState;
