import React, { Ref, useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  GestureResponderEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  Easing,
} from "react-native";
import { mySelfUser } from "../../1HelpFullFolder/Initialization";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";
import Message from "../../1HelpFullFolder/Message";
import Chat from "../../1HelpFullFolder/Chat";
import LastMessageStatus from "./LastMessageStatus";
import ModeActivity from "../Status Content/ModeActivity";

import DeleteForSwipeableSvg from "../SVG/DeleteForSwipeableSvg";
import MuteForSwipeableSvg from "../SVG/MuteForSwipeableSvg";
import ReadForSwipeableSvg from "../SVG/ReadForSwipeableSvg";
import SelectForSwipeableSvg from "../SVG/SelectForSwipeableSvg";
import UnMuteForSwipeableSvg from "../SVG/UnMuteForSwipeableSvg";
import UnReadMessageSvg from "../SVG/UnReadMessageSvg";

interface ChatProps {
  chat: Chat;
  isCurrent: boolean;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ChatContainer: React.FC<ChatProps> = ({ chat, isCurrent }) => {
  const lastMessage: Message | undefined =
    chat.listOfMessages[chat.listOfMessages.length - 1];
  const [positionXForStartOfSwipeable, setPositionXForStartOfSwipeable] =
    useState<number>(null);
  let randomBoolean = useRef(null);
  const timeForAnimation: number = 150;
  const [isSwiped, setIsSwiped] = useState(false);
  const [isSwipedFromRight, setIsSwipedFromRight] = useState(false);
  const [isSwipedFromLeft, setIsSwipedFromLeft] = useState(false);
  const [positionXForSwipeable, setPositionXForSwipeable] =
    useState<number>(screenWidth);
  const formattedTime = (): string => {
    if (!lastMessage) return "";
    const now: Date = new Date();
    const timeDiff: number = now.getTime() - lastMessage.timeOfSend.getTime();
    const dayInMilliseconds: number = 24 * 60 * 60 * 1000;
    const weekInMilliseconds: number = 7 * dayInMilliseconds;
    const yearInMilliseconds: number = 365 * dayInMilliseconds;
    const minutes: number = lastMessage.timeOfSend.getMinutes();
    const hours: number = lastMessage.timeOfSend.getHours();
    const day: number = lastMessage.timeOfSend.getDate();
    const month: number = lastMessage.timeOfSend.getMonth();
    const minutesString: string =
      minutes < 10 ? `0${minutes}` : minutes.toString();
    const hoursString: string = hours < 10 ? `0${hours}` : hours.toString();
    const daySting: string = day < 10 ? `0${day}` : day.toString();
    const monthString: string = month < 10 ? `0${month}` : month.toString();

    if (timeDiff < dayInMilliseconds) {
      return `${hoursString}:${minutesString}`;
    } else if (timeDiff < weekInMilliseconds) {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayOfWeek: string = daysOfWeek[lastMessage.timeOfSend.getDay()];
      return dayOfWeek.slice(0, 3);
    } else if (timeDiff < yearInMilliseconds) {
      return `${daySting}.${monthString}`;
    } else {
      return `${daySting}.${monthString}.${
        lastMessage.timeOfSend.getFullYear() - 2000
      }`;
    }
  };
  const handlePress = () => {
    console.log("Кнопку натиснули");
  };
  const onLongPressChat = (e: GestureResponderEvent, chat: Chat) => {
    console.log(chat.name);
  };
  useEffect(() => {
    randomBoolean.current = Math.random() < 0.5;
    haveUnreadMessagesBoolf.current = haveUnreadMessages(chat);
  }, []);
  const dragXPosition = useState(new Animated.Value(screenWidth))[0];
  const [stateForSwipeDirection, setStateForSwipeDirection] =
    useState<number>(null);
  useEffect(()=>{
   // console.log(chat.name)
  })
  const scale1ForRight = dragXPosition.interpolate({
    inputRange: [
      screenWidth,
      screenWidth * 1.4,
      screenWidth * 1.6,
      screenWidth * 2,
    ],
    outputRange: [
      -screenWidth * 0.2,
      0,
      -screenWidth * 0.2,
      -screenWidth * 0.2,
    ],
    extrapolateLeft: "clamp",
  });

  const scale1ForLeft = dragXPosition.interpolate({
    inputRange: [0, screenWidth * 0.4, screenWidth * 0.6, screenWidth],
    outputRange: [screenWidth * 0.2, screenWidth * 0.2, 0, screenWidth * 0.2],
  });
  const scrollViewRef: Ref<ScrollView> = useRef<ScrollView>(null);
  const haveUnreadMessages = (chat) => {
    const lastMessage: Message =
      chat.listOfMessages.length > 0
        ? chat.listOfMessages[chat.listOfMessages.length - 1]
        : undefined;
    const id: number | undefined = chat.dictionary?.get(mySelfUser.id);
    if (!lastMessage)
      if (lastMessage?.sender !== mySelfUser) {
        if (id && lastMessage.id > id) {
          return true;
        }
      }
    return false;
  };
  const haveUnreadMessagesBoolf = useRef(null);

  const handleScrollToRightEnd = () => {
    const scrollVarible = positionXForStartOfSwipeable == screenWidth;
    if (
      positionXForSwipeable < screenWidth * 1.4 &&
      positionXForSwipeable > screenWidth &&
      (!isSwipedFromRight || scrollVarible)
    ) {
      scrollToRight40Percents();
      setIsSwipedFromRight(true);
      return;
    }
    if (
      positionXForSwipeable < screenWidth ||
      (setIsSwipedFromRight && positionXForSwipeable < screenWidth * 1.4)
    ) {
      scrollToRightBound();
      setIsSwiped(false);
      setIsSwipedFromRight(false);
      setStateForSwipeDirection(null);
      return;
    }
    if (
      (positionXForSwipeable > screenWidth * 1.4 && isSwipedFromRight) ||
      scrollVarible
    ) {
      scrollToRight40Percents();
      setIsSwipedFromRight(true);
    }
    if (positionXForSwipeable > screenWidth * 1.6) {
      scrollToLeftBound();
    }
  };
  const scrollToRight40Percents = () => {
    scrollViewRef.current.scrollTo({ x: screenWidth * 1.4 });
  };
  const scrollToLeft40Percents = () => {
    scrollViewRef.current.scrollTo({ x: screenWidth * 0.6 });
  };
  const scrollToRightBound = () => {
    scrollViewRef.current.scrollTo({ x: screenWidth });
  };
  const scrollToLeftBound = () => {
    scrollViewRef.current.scrollTo({ x: screenWidth * 2 });
  };
  const scrollToZeroPosition = () => {
    scrollViewRef.current.scrollTo({ x: 0 });
  };
  const handleScroll = (event) => {
    const { nativeEvent } = event;
    const currentXOffset = nativeEvent.contentOffset.x;
    if (stateForSwipeDirection == 1 && currentXOffset > screenWidth) {
      handleOnScrollFromRight(event);
    } else if (stateForSwipeDirection == 1 && currentXOffset < screenWidth) {
      setStateForSwipeDirection(null);
    } else if (stateForSwipeDirection == 0 && currentXOffset < screenWidth) {
      handleOnScrollFromLeft(event);
    } else if (stateForSwipeDirection == 0 && currentXOffset > screenWidth) {
      setStateForSwipeDirection(null);
    }
    if (stateForSwipeDirection == null) {
      if (currentXOffset > screenWidth) {
        setStateForSwipeDirection(1);
      } else if (currentXOffset < screenWidth) {
        setStateForSwipeDirection(0);
      }
    }
  };
  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (stateForSwipeDirection == null) {
      return;
    } else if (stateForSwipeDirection == 1) {
      handleScrollToRightEnd();
    } else if (stateForSwipeDirection == 0) {
      handleScrollToLeftEnd();
    }
  };

  const handleScrollToLeftEnd = () => {
    const scrollVarible = positionXForStartOfSwipeable == screenWidth;
    if (
      positionXForSwipeable > screenWidth * 0.6 &&
      positionXForSwipeable < screenWidth &&
      (!isSwipedFromLeft || scrollVarible)
    ) {
      scrollToLeft40Percents();
      setIsSwipedFromLeft(true);
      return;
    }
    if (
      positionXForSwipeable > screenWidth ||
      (setIsSwipedFromLeft && positionXForSwipeable > screenWidth * 0.6)
    ) {
      scrollToRightBound();
      setIsSwiped(false);
      setIsSwipedFromLeft(false);
      setStateForSwipeDirection(null);
      return;
    }
    if (
      (positionXForSwipeable < screenWidth * 0.6 && isSwipedFromLeft) ||
      scrollVarible
    ) {
      scrollToLeft40Percents();
      setIsSwipedFromLeft(true);
    }
    if (positionXForSwipeable < screenWidth * 0.4) {
      scrollToZeroPosition();
    }
  };
  const handleOnScrollFromRight = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const positionX = e.nativeEvent.contentOffset.x;
    setPositionXForSwipeable(positionX);
    Animated.timing(dragXPosition, {
      toValue: positionX,
      duration: 0,

      useNativeDriver: true,
    }).start();
  };
  const handleOnScrollFromLeft = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const positionX = e.nativeEvent.contentOffset.x;
    setPositionXForSwipeable(positionX);
    Animated.timing(dragXPosition, {
      toValue: positionX,
      duration: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View>
      <TouchableOpacity
        style={listOfChatsStyle.helpContainer}
        onPress={() => {
          handlePress();
        }}
        onLongPress={(e) => onLongPressChat(e, chat)}
        activeOpacity={0.1}
      />
      <Animated.ScrollView
        ref={scrollViewRef}
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          width: screenWidth,
          flexDirection: "row",
          zIndex: isSwiped ? 2 : 0,
        }}
        decelerationRate={0.1}
        scrollEventThrottle={5}
        contentOffset={{ x: screenWidth, y: 0 }}
        onScrollBeginDrag={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
          setIsSwiped(true);
          setPositionXForStartOfSwipeable(e.nativeEvent.contentOffset.x);
        }}
        onScroll={handleScroll}
        onScrollEndDrag={handleScrollEnd}
      >
        <Animated.View
          style={{
            width: screenWidth,
            backgroundColor: "#7C9FE3",
            flexDirection: "row",
            justifyContent: "flex-end",
            height: screenHeight * 0.08,
          }}
        >
          <Animated.View
            style={{
              width: screenWidth,
              backgroundColor: "#9FA1AD",
              justifyContent: "flex-end",
              flexDirection: "row",
              zIndex: 1,
              transform: [
                {
                  translateX: scale1ForLeft,
                },
              ],
            }}
          >
            <Animated.View
              style={{
                width: screenWidth * 0.2,
                height: screenHeight * 0.08,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Animated.View
                style={{
                  justifyContent: "center",
                }}
              >
                {!haveUnreadMessagesBoolf.current ? (
                  <ReadForSwipeableSvg
                    width={screenWidth * 0.085}
                    height={screenHeight * 0.05}
                    color="white"
                  />
                ) : (
                  <UnReadMessageSvg
                    width={screenWidth * 0.085}
                    height={screenHeight * 0.05}
                    color="white"
                  />
                )}
                <Animated.Text style={{ color: "white", alignSelf: "center" }}>
                  Read
                </Animated.Text>
              </Animated.View>
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={{
              width: screenWidth * 0.2,
              height: screenHeight * 0.08,
              justifyContent: "center",
              // flexDirection:"row"
            }}
          >
            <Animated.View
              style={{
                justifyContent: "center",
                //backgroundColor:"blue",
                flexDirection: "row",
              }}
            >
              <Animated.View
                style={{
                  justifyContent: "center",
                }}
              >
                <Animated.View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <SelectForSwipeableSvg
                    width={screenWidth * 0.085}
                    height={screenHeight * 0.05}
                    color="white"
                  />
                </Animated.View>
                <Animated.Text style={{ color: "white", alignSelf: "center" }}>
                  Select
                </Animated.Text>
              </Animated.View>
            </Animated.View>
          </Animated.View>
        </Animated.View>
        <TouchableOpacity
          onPress={() => {
            handlePress();
          }}
          onLongPress={(e) => onLongPressChat(e, chat)}
          pressRetentionOffset={{ top: 0, left: 0, right: 0, bottom: 0 }}
          activeOpacity={1}
        >
          <View style={listOfChatsStyle.chatcontainer}>
            <View style={[listOfChatsStyle.imageContainer]}>
              <Image
                source={{ uri: chat.url }}
                style={listOfChatsStyle.image}
              ></Image>
              <ModeActivity
                style={listOfChatsStyle.modeOfActivity}
                status={chat.status}
              />
            </View>
            <View style={listOfChatsStyle.containerForOther}>
              <View style={listOfChatsStyle.highcontainer}>
                <View style={listOfChatsStyle.namecontainer}>
                  <Text
                    style={listOfChatsStyle.nameStyle}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {chat.name}
                  </Text>
                </View>
                <View style={[listOfChatsStyle.rightContainer]}>
                  <LastMessageStatus chat={chat} />
                  <Text style={listOfChatsStyle.timeStyle}>
                    {formattedTime()}
                  </Text>
                </View>
              </View>
              <View style={listOfChatsStyle.containerForContent}>
                <Text
                  style={listOfChatsStyle.contentStyle}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {lastMessage?.content}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Animated.View
          style={{
            height: screenHeight * 0.08,
            width: screenWidth,
            backgroundColor: "#F79747",
            flexDirection: "row",
          }}
        >
          <Animated.View
            style={{
              width: screenWidth * 0.2,
              height: screenHeight * 0.08,
              justifyContent: "center",
              // flexDirection:"row"
            }}
          >
            <Animated.View
              style={{
                justifyContent: "center",
                //backgroundColor:"blue",
                flexDirection: "row",
              }}
            >
              <Animated.View
                style={{
                  justifyContent: "center",
                }}
              >
                <Animated.View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  {randomBoolean.current ? (
                    <MuteForSwipeableSvg
                      width={screenWidth * 0.085}
                      height={screenHeight * 0.05}
                      color="white"
                    />
                  ) : (
                    <UnMuteForSwipeableSvg
                      width={screenWidth * 0.085}
                      height={screenHeight * 0.05}
                      color="white"
                    />
                  )}
                </Animated.View>
                <Animated.Text style={{ color: "white", alignSelf: "center" }}>
                  Notification
                </Animated.Text>
              </Animated.View>
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={{
              width: screenWidth,
              backgroundColor: "red",
              justifyContent: "center",

              transform: [
                {
                  translateX: scale1ForRight,
                },
              ],
            }}
          >
            <Animated.View
              style={{
                width: screenWidth * 0.2,
                height: screenHeight * 0.08,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Animated.View
                style={{
                  justifyContent: "center",
                }}
              >
                <DeleteForSwipeableSvg
                  width={screenWidth * 0.085}
                  height={screenHeight * 0.05}
                  color="white"
                />
                <Animated.Text style={{ color: "white", alignSelf: "center" }}>
                  Delete
                </Animated.Text>
              </Animated.View>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default React.memo(ChatContainer);
