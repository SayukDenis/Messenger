import React, { useEffect, useState } from "react";
import BlurAll from "../../../SemiComponents/BlurAll";
import { View } from "react-native";
import Animated, {
  runOnJS,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { modalWindowChatStateStyle } from "../../Styles/ModalWindowChatStateStyle";
import { screenHeight } from "../../Constants/ConstantsForChatlist";
import ChatWindow from "./Modal window chat containers/ChatWindow";
import ChatMenuButtonsContainers from "./Modal window chat containers/ChatMenuButtons";

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

  const chatMenuOpacityStartedValue = 0;
  const chatMenuOpacityEndedValue = 1;

  let menuButtonsSharedValues = new Array(ChatMenuButtonsContainers.length)
    .fill(null)
    .map(() => ({
      translateY: useSharedValue(chatMenuTranslateYStartValue),
      opacity: useSharedValue(chatMenuOpacityStartedValue),
    }));

  const chatWindowScaleStartValue = 0;
  const chatWindowScaleEndValue = 1;
  const scaleChatWindow = useSharedValue(chatWindowScaleStartValue);

  const setEndAnimation = () => {
    setAnimation(false);
  };

  const animationButtonDuration = 80;
  const animatonDelay = animationButtonDuration;

  const showAnimation = () => {
    if (visibleChatModalWindowContainer) {
      scaleChatWindow.value = withSpring(chatWindowScaleEndValue);
      menuButtonsSharedValues.map((menuButton, index) => {
        menuButton.translateY.value = withDelay(
          animatonDelay * (index + 1),
          withTiming(
            chatMenuTranslateYEndValue,
            { duration: animationButtonDuration },
            (isFinished) => {
              if (isFinished) {
                menuButton.opacity.value = chatMenuOpacityEndedValue;
              }
            }
          )
        );
      });
      setVisibleChatModalWindowContainer(false);
    } else {
      scaleChatWindow.value = withDelay(
        animatonDelay * (menuButtonsSharedValues.length + 1),
        withTiming(chatWindowScaleStartValue)
      );
      menuButtonsSharedValues.reverse().map((menuButton, index) => {
        menuButton.translateY.value = withDelay(
          animatonDelay * (index + 1),
          withTiming(
            chatMenuTranslateYStartValue,
            { duration: animationButtonDuration },
            (isFinished) => {
              if (isFinished) {
                menuButton.opacity.value = chatMenuOpacityStartedValue;
                if (index == menuButtonsSharedValues.length - 1)
                  runOnJS(setEndAnimation)();
              }
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
      <View style={modalWindowChatStateStyle.modalWindowScreen}>
        <View style={modalWindowChatStateStyle.modalWindowContainer}>
          <View style={modalWindowChatStateStyle.chatWindowContainer}>
            <Animated.View
              style={[
                modalWindowChatStateStyle.chatWindowContainerAnimated,
                {
                  transform: [{ scale: scaleChatWindow }],
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
