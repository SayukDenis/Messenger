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
  Platform,
} from "react-native";
import { mySelfUser } from "../../1HelpFullFolder/Initialization";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";
import Message from "../../1HelpFullFolder/Message";
import Chat from "../../1HelpFullFolder/Chat";
import RightContainersForSwipe from "./RightContainersForSwipe";
import LeftContainerForSwipe from "./LeftContainerForSwipe";
import CentralChatContainer from "./CentralChatContainer";
import { connect } from "react-redux";
import { BlurView } from "expo-blur";

interface ChatProps {
  chat: Chat;
  isCurrent: boolean;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ChatContainer: React.FC<ChatProps> = ({ chat, isCurrent }) => {
  const [positionXForStartOfSwipeable, setPositionXForStartOfSwipeable] =
    useState<number>(null);
  let randomBoolean = useRef(null);
  const timeForAnimation: number = 150;
  const [isSwiped, setIsSwiped] = useState(false);
  const [isSwipedFromRight, setIsSwipedFromRight] = useState(false);
  const [isSwipedFromLeft, setIsSwipedFromLeft] = useState(false);
  const [positionXForSwipeable, setPositionXForSwipeable] =
    useState<number>(screenWidth);

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
  useEffect(() => {
    randomBoolean.current = Math.random() < 0.5;
    haveUnreadMessagesBoolf.current = haveUnreadMessages(chat);
  }, []);
  const rightDragXposition = useState(new Animated.Value(screenWidth));
  const leftDragXposition = useState(new Animated.Value(0));
  const [rightDragXpositionForRerender,setRightDragXpositionForRerender] = useState(screenWidth);
  const [leftDragXpositionForRerender,setLeftDragXpositionForRerender] = useState(0);
  const [stateForSwipeDirection, setStateForSwipeDirection] =
    useState<number>(null);
  useEffect(() => {
    //console.log(chat.name)
  });

  const scrollViewRef: Ref<ScrollView> = useRef<ScrollView>(null);

  const haveUnreadMessagesBoolf = useRef(null);
  const handlePress = useRef(() => {
    console.log("Кнопку натиснули");
  });
  const onLongPressChat = useRef((e: GestureResponderEvent) => {
    console.log(chat.name);
  });
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
    setRightDragXpositionForRerender(positionX)
    Animated.timing(rightDragXposition[0], {
      toValue: positionX,
      duration: 0,

      useNativeDriver: false,
    }).start();
  };
  const handleOnScrollFromLeft = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const positionX = e.nativeEvent.contentOffset.x;
    setPositionXForSwipeable(positionX);
    setLeftDragXpositionForRerender(positionX);
    Animated.timing(leftDragXposition[0], {
      toValue: positionX,
      duration: 0,
      useNativeDriver: false,
    }).start();
  };
  if (Platform.OS == "android") {
    return (
      <>
        <CentralChatContainer
          chat={chat}
          handlePress={handlePress}
          onLongPressChat={onLongPressChat}
        />
        <View
          style={{
            width: screenWidth,
            height: 2,
            opacity: 0.1,
            backgroundColor: "gray",
          }}
        />
      </>
    );
  }
  useEffect(()=>{
    
   // console.log(((leftDragXpositionForRerender)/screenWidth))
  })
  return (
    <Animated.View>
      <View style={{backgroundColor:null,position:"absolute",height:screenHeight*0.08,width:!isSwipedFromLeft?0:screenWidth*(1-(leftDragXpositionForRerender)/screenWidth),top:0,left:0,bottom:0,zIndex:10}}/>
      <View style={{backgroundColor:null,position:"absolute",direction:"rtl",height:screenHeight*0.08,width:!isSwipedFromRight?0:screenWidth*(rightDragXpositionForRerender-screenWidth)/screenWidth,top:0,right:0,bottom:0,zIndex:10}}/>
      <TouchableOpacity
        style={listOfChatsStyle.helpContainer}
        onPress={handlePress.current}
        onLongPress={onLongPressChat.current}
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
        scrollEventThrottle={1}
        contentOffset={{ x: screenWidth, y: 0 }}
        onScrollBeginDrag={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
          setIsSwiped(true);
          setPositionXForStartOfSwipeable(e.nativeEvent.contentOffset.x);
        }}
        onMomentumScrollBegin={handleScrollEnd}
        onScroll={handleScroll}
        onScrollEndDrag={handleScrollEnd}
      >
        
        <LeftContainerForSwipe
          leftDragXposition={leftDragXposition[0]}
          leftDragXpositionForRerender={leftDragXpositionForRerender}
          haveUnreadMessagesBoolf={haveUnreadMessagesBoolf}
        />
        
        
        <CentralChatContainer
          chat={chat}
          handlePress={handlePress}
          onLongPressChat={onLongPressChat}
        />
        <RightContainersForSwipe
          randomBoolean={randomBoolean}
          rightDragXposition={rightDragXposition[0]}
          rightDragXpositionForRerender={rightDragXpositionForRerender}
        />
      </Animated.ScrollView>
      <View
        style={{
          width: screenWidth,
          height: 2,
          opacity: 0.1,
          backgroundColor: "gray",
        }}
      />
    </Animated.View>
  );
};

export default connect(null)(React.memo(ChatContainer));
