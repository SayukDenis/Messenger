import React, { Ref, useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
  EasingFunction,
  Platform,
} from "react-native";
import { footerstyles } from "../../Styles/FooterStyle";

import AddChatSvg from "../SVG/AddChatSvg";
import OnNotifications from "../SVG/OnNotifications";
import OffNotificationSvg from "../SVG/OffNotifications";
import EditFolderSvg from "../SVG/EditFolderSvg";
import DeleteSvg from "../SVG/Delete";
import SortFoldersSvg from "../SVG/SortFolders";
import ReadFoldersMessagesSvg from "../SVG/ReadFoldersMessagesSvg";
import Folder from "../../../../dao/Models/Folder";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import { useSelector } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  screenWidth,
  screenHeight,
} from "../../Constants/ConstantsForChatlist";

interface FolderModalWindowProps {
  folder: Folder;
  positionX: number;
  positionXInContainer: number;
  widthOfFolder: number;
  exit: boolean;
  booleanRefForEndAnimation: () => void;
}
const FolderModalWindow: React.FC<FolderModalWindowProps> = ({
  folder,
  positionX,
  widthOfFolder,
  positionXInContainer,
  exit,
  booleanRefForEndAnimation,
}) => {
  const statusNotification: boolean = Math.random() < 0.5;
  const getStylePosition = (position: number) => {
    if (position <= screenWidth * 0.5) {
      return { left: position };
    } else {
      return { right: screenWidth - position };
    }
  };
  const haveFolderUnreadMessages = (folder: Folder): boolean => {
    return true;
    /*for (let i = 0; i < folder.chats.length; i++) {
      const chat = folder.chats[i];

      const lastMessage: Message | undefined =
        chat.branches.length > 0
          ? chat.listOfMessages[chat.listOfMessages.length - 1]
          : undefined;
      const id: number | undefined = chat.dictionary?.get(mySelfUser.id);
      if (!lastMessage) continue;
      if (lastMessage.sender !== mySelfUser) {
        if (id && lastMessage.id > id) {
          return true;
        }
      }
    }
    return false;*/
  };
  const containerWidth = new Animated.Value(0);
  const firstContainerTranslate = new Animated.Value(0);
  const secondContainerTranslate = new Animated.Value(0);
  const thirdContainerTranslate = new Animated.Value(0);
  const fourthContainerTranslate = new Animated.Value(0);
  const fifthContainerTranslate = new Animated.Value(0);

  const durationOfAnimation: number = 20;
  const [state, setState] = useState(1);
  const easing: EasingFunction = Easing.linear;

  const firstContainerOpacity = firstContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const firstContainerPositionY = firstContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  const secondContainerOpacity = secondContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const secondContainerPositionY = secondContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  // Аналогічно для інших контейнерів
  const thirdContainerOpacity = thirdContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const thirdContainerPositionY = thirdContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  const fourthContainerOpacity = fourthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const fourthContainerPositionY = fourthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  const fifthContainerOpacity = fifthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const fifthContainerPositionY = fifthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  const animateOfFirstContainer = Animated.timing(firstContainerTranslate, {
    toValue: state, // Верхня позиція (видимий) або поза екраном (не видимий)
    duration: durationOfAnimation, // Тривалість анімації
    easing,
    useNativeDriver: false,
  });
  const animateOfSecondContainer = Animated.timing(secondContainerTranslate, {
    toValue: state,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  const animateOfThirdContainer = Animated.timing(thirdContainerTranslate, {
    toValue: state,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  const animateOfFourthContainer = Animated.timing(fourthContainerTranslate, {
    toValue: state,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  const animateOfFifthContainer = Animated.timing(fifthContainerTranslate, {
    toValue: state,
    duration: durationOfAnimation,
    easing,
    useNativeDriver: false,
  });

  const containerSize = Animated.timing(containerWidth, {
    toValue: state, // Кінцева ширина
    duration: durationOfAnimation, // Тривалість анімації (в мілісекундах)
    useNativeDriver: true, // Вимагається для анімації стилів
  });
  useEffect(() => {
    Animated.sequence([
      containerSize,
      animateOfFirstContainer,
      animateOfSecondContainer,
      animateOfThirdContainer,
      animateOfFourthContainer,
      animateOfFifthContainer,
    ]).start(() => setState(0));
  }, []);
  useEffect(() => {
    if (!exit) {
      Animated.sequence([
        animateOfFifthContainer,
        animateOfFourthContainer,
        animateOfThirdContainer,
        animateOfSecondContainer,
        animateOfFirstContainer,
        containerSize,
      ]).start(() => booleanRefForEndAnimation());
    }
  }, [exit]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        footerstyles.modalWindowContainerStyle,
        getStylePosition(positionX - positionXInContainer + widthOfFolder / 2),
        {
          bottom:
            Platform.OS == "ios" && useSafeAreaInsets().bottom != 0
              ? screenHeight * 0.045 + useSafeAreaInsets().bottom
              : screenHeight * 0.055,
        },
      ]}
    >
      <Animated.View
        style={[
          footerstyles.containerForModalWindowText,
          {
            transform: [{ translateY: fifthContainerPositionY }],
            opacity: fifthContainerOpacity,
          },
        ]}
      >
        <View style={footerstyles.svgContainer}>
          <AddChatSvg
            height={screenHeight * 0.045}
            width={screenWidth * 0.045}
          />
        </View>
        <Text style={footerstyles.modalWindowText}>Add chat</Text>
      </Animated.View>
      <Animated.View
        style={[
          footerstyles.containerForModalWindowText,
          {
            transform: [{ translateY: fourthContainerPositionY }],
            opacity: fourthContainerOpacity,
          },
        ]}
      >
        <View style={footerstyles.svgContainer}>
          <EditFolderSvg
            width={screenWidth * 0.045}
            height={screenHeight * 0.045}
          />
        </View>
        <Text style={footerstyles.modalWindowText}>Edit folder</Text>
      </Animated.View>
      <Animated.View
        style={[
          footerstyles.containerForModalWindowText,
          {
            transform: [{ translateY: thirdContainerPositionY }],
            opacity: thirdContainerOpacity,
          },
        ]}
      >
        <View style={footerstyles.svgContainer}>
          {statusNotification ? (
            <OnNotifications
              width={screenWidth * 0.045}
              height={screenHeight * 0.045}
            />
          ) : (
            <View style={{ marginLeft: screenWidth * 0.008 }}>
              <OffNotificationSvg
                width={screenWidth * 0.033}
                height={screenHeight * 0.033}
              />
            </View>
          )}
        </View>
        {!statusNotification ? (
          <Text style={footerstyles.modalWindowText}>On notifications</Text>
        ) : (
          <Text style={footerstyles.modalWindowText}>Off notifications</Text>
        )}
      </Animated.View>
      <Animated.View
        style={[
          footerstyles.containerForModalWindowText,
          {
            transform: [{ translateY: secondContainerPositionY }],
            opacity: secondContainerOpacity,
          },
        ]}
      >
        <View style={footerstyles.svgContainer}>
          <SortFoldersSvg
            width={screenWidth * 0.045}
            height={screenHeight * 0.045}
          />
        </View>
        <Text style={footerstyles.modalWindowText}>Sort folders</Text>
      </Animated.View>
      {haveFolderUnreadMessages(folder) ? (
        <Animated.View
          style={[
            footerstyles.containerForModalWindowText,
            {
              transform: [{ translateY: firstContainerPositionY }],
              opacity: firstContainerOpacity,
            },
          ]}
        >
          <View style={footerstyles.svgContainer}>
            <ReadFoldersMessagesSvg
              width={screenWidth * 0.045}
              height={screenHeight * 0.045}
            />
          </View>
          <Text style={footerstyles.modalWindowText}>Mark as Read</Text>
        </Animated.View>
      ) : null}
      <Animated.View style={{ transform: [{ scale: containerWidth }] }}>
        <View style={[footerstyles.containerForModalWindowText]}>
          <View style={footerstyles.svgContainer}>
            <DeleteSvg
              width={screenWidth * 0.045}
              height={screenHeight * 0.045}
              color="red"
            />
          </View>
          <Text style={[footerstyles.modalWindowText, { color: "red" }]}>
            Delete
          </Text>
        </View>
        <View
          style={[
            footerstyles.triangle,
            positionX - positionXInContainer + widthOfFolder / 2 <
            screenWidth * 0.5
              ? footerstyles.positionOfModalWindowLeft
              : footerstyles.positionOfModalWindowRight,
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default FolderModalWindow;
