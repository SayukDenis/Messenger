import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Animated,
  EasingFunction,
  Easing,
} from "react-native";
import ChatMenuAddToFolderSvg from "../SVG/ChatMenuAddToFolderSvg";
import ChatMenuPinSvg from "../SVG/ChatMenuPinSvg";
import ChatMenuOffNotificationsSvg from "../SVG/ChatMenuOffNotificationsSvg";
import ChatMenuSelectSvg from "../SVG/ChatMenuSelectSvg";
import ChatMenuMarkSvg from "../SVG/ChatMenuMarkSvg";
import ChatMenuEyeSvg from "../SVG/ChatMenuEyeSvg";
import ChatMenuDeleteSvg from "../SVG/ChatMenuDeleteSvg";
import { screenHeight } from "../../Constants/ConstantsForChatlist";
import { modalWindowChatStateStyle } from "../../Styles/ModalWindowChatStateStyle";

interface ChatMenuProps {
  isVisibleChatMenu: boolean;
  endAnimationChatMenuRef: () => void;
}

const containerWidth = new Animated.Value(0);
const firstContainerTranslate = new Animated.Value(0);
const secondContainerTranslate = new Animated.Value(0);
const thirdContainerTranslate = new Animated.Value(0);
const fourthContainerTranslate = new Animated.Value(0);
const fifthContainerTranslate = new Animated.Value(0);
const sixthContainerTranslate = new Animated.Value(0);

const ChatMenu: React.FC<ChatMenuProps> = ({
  isVisibleChatMenu,
  endAnimationChatMenuRef,
}) => {
  const menuButtons = {
    AddTofolder: {
      text: "Add to folder",
      action: () => {},
      svg: <ChatMenuAddToFolderSvg />,
    },
    Pin: {
      text: "Pin",
      action: () => {},
      svg: <ChatMenuPinSvg />,
    },
    Notifications: {
      text: { on: "On notifications", off: "Off notifications" },
      action: () => {},
      svg: { off: <ChatMenuOffNotificationsSvg /> },
    },
    Select: {
      text: "Select",
      action: () => {},
      svg: <ChatMenuSelectSvg />,
    },
    Mark: {
      text: { read: "Mark as read", unread: "Mark as unread" },
      action: () => {},
      svg: { mark: <ChatMenuMarkSvg />, eye: <ChatMenuEyeSvg /> },
    },
    Delete: {
      text: "Delete",
      action: () => {},
      svg: <ChatMenuDeleteSvg />,
    },
  };

  const durationOfAnimation: number = 10;
  const [value, setValue] = useState(1);
  const easing: EasingFunction = Easing.linear;

  // First container
  const firstContainerOpacity = firstContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const firstContainerPositionY = firstContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  const animateOfFirstContainer = Animated.timing(firstContainerTranslate, {
    toValue: value,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  // Second container
  const secondContainerOpacity = secondContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const secondContainerPositionY = secondContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  const animateOfSecondContainer = Animated.timing(secondContainerTranslate, {
    toValue: value,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  // Third container
  const thirdContainerOpacity = thirdContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const thirdContainerPositionY = thirdContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  const animateOfThirdContainer = Animated.timing(thirdContainerTranslate, {
    toValue: value,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  // Fourth container
  const fourthContainerOpacity = fourthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const fourthContainerPositionY = fourthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  const animateOfFourthContainer = Animated.timing(fourthContainerTranslate, {
    toValue: value,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  // Fifth container
  const fifthContainerOpacity = fifthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const fifthContainerPositionY = fifthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  const animateOfFifthContainer = Animated.timing(fifthContainerTranslate, {
    toValue: value,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  // Sixth container
  const sixthContainerOpacity = sixthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const sixthContainerPositionY = sixthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  const animateOfSixthContainer = Animated.timing(sixthContainerTranslate, {
    toValue: value,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  const containerSize = Animated.timing(containerWidth, {
    toValue: value,
    duration: durationOfAnimation,
    useNativeDriver: true,
  });

  useEffect(() => {
    Animated.sequence([
      animateOfSixthContainer,
      animateOfFifthContainer,
      animateOfFourthContainer,
      animateOfThirdContainer,
      animateOfSecondContainer,
      animateOfFirstContainer,
      containerSize,
    ]).start(() => setValue(0));
  }, []);

  useEffect(() => {
    if (!isVisibleChatMenu) {
      Animated.sequence([
        containerSize,
        animateOfFirstContainer,
        animateOfSecondContainer,
        animateOfThirdContainer,
        animateOfFourthContainer,
        animateOfFifthContainer,
        animateOfSixthContainer,
      ]).start(() => endAnimationChatMenuRef());
    }
  }, [isVisibleChatMenu]);

  return (
    <View style={modalWindowChatStateStyle.chatMenuContainer}>
      <View style={modalWindowChatStateStyle.chatMenuTriangle}></View>
      <Animated.View
        style={{
          transform: [{ translateY: sixthContainerPositionY }],
          opacity: sixthContainerOpacity,
        }}
      >
        <TouchableOpacity style={modalWindowChatStateStyle.chatMenuButton}>
          <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
            {menuButtons.AddTofolder.svg}
          </View>
          <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
            {menuButtons.AddTofolder.text}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{
          transform: [{ translateY: fifthContainerPositionY }],
          opacity: fifthContainerOpacity,
        }}
      >
        <TouchableOpacity style={modalWindowChatStateStyle.chatMenuButton}>
          <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
            {menuButtons.Pin.svg}
          </View>
          <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
            {menuButtons.Pin.text}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{
          transform: [{ translateY: fourthContainerPositionY }],
          opacity: fourthContainerOpacity,
        }}
      >
        <TouchableOpacity style={modalWindowChatStateStyle.chatMenuButton}>
          <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
            {menuButtons.Notifications.svg.off}
          </View>
          <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
            {menuButtons.Notifications.text.off}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{
          transform: [{ translateY: thirdContainerPositionY }],
          opacity: thirdContainerOpacity,
        }}
      >
        <TouchableOpacity style={modalWindowChatStateStyle.chatMenuButton}>
          <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
            {menuButtons.Select.svg}
          </View>
          <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
            {menuButtons.Select.text}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{
          transform: [{ translateY: secondContainerPositionY }],
          opacity: secondContainerOpacity,
        }}
      >
        <TouchableOpacity style={modalWindowChatStateStyle.chatMenuButton}>
          <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
            {menuButtons.Mark.svg.mark}
          </View>
          <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
            {menuButtons.Mark.text.unread}
          </Text>
          <View
            style={{
              marginLeft:
                modalWindowChatStateStyle.chatMenuSvgContainer.marginRight,
            }}
          >
            {menuButtons.Mark.svg.eye}
          </View>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{
          transform: [{ translateY: firstContainerPositionY }],
          opacity: firstContainerOpacity,
        }}
      >
        <TouchableOpacity style={modalWindowChatStateStyle.chatMenuButton}>
          <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
            {menuButtons.Delete.svg}
          </View>
          <Text
            style={[
              modalWindowChatStateStyle.chatMenuButtonText,
              { color: "#CE2500" },
            ]}
          >
            {menuButtons.Delete.text}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ChatMenu;
