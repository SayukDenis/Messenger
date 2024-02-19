import React, {
  MutableRefObject,
  Ref,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  GestureResponderEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  Platform,
} from "react-native";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";
import RightContainersForSwipe from "./RightContainersForSwipe";
import LeftContainerForSwipe from "./LeftContainerForSwipe";
import CentralChatContainer from "./CentralChatContainer";
import { connect, useSelector } from "react-redux";
import Chat from "../../../../dao/Models/Chats/Chat";
import Message from "../../../../dao/Models/Message";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import ListOfBranches from "./ListOfBranches";
import Dialogue from "../../../../dao/Models/Chats/Dialogue";
import { CountOfUnreadMessages } from "./Functions/CountOfUnreadMessage";
import getNameOfChat from "./Functions/GetNameOfChat";

interface ChatProps {
  chat: Chat;
  nesting: number;
  navigation: any;
  setVisibleModalWindowChatState: React.MutableRefObject<() => void>;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ChatContainer: React.FC<ChatProps> = ({
  chat,
  nesting,
  navigation,
  setVisibleModalWindowChatState,
}) => {
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });

  const [positionXForStartOfSwipeable, setPositionXForStartOfSwipeable] =
    useState<number | null>(null);

  const [IsBranchesOpenBoolean, setIsBranchesOpenBoolean] = useState(false);
  const [stateForBranchesShow, setStateForBranchesShow] = useState(false);
  const [isSwiped, setIsSwiped] = useState(false);
  const [isSwipedFromRight, setIsSwipedFromRight] = useState(false);
  const [isSwipedFromLeft, setIsSwipedFromLeft] = useState(false);
  const [positionXForSwipeable, setPositionXForSwipeable] =
    useState<number>(screenWidth);
  useEffect(() => {});
  function obhod(chat: Chat) {
    for (let index = 0; index < chat.branches.length; index++) {
      console.log(chat.branches[index].title);
      obhod(chat.branches[index]);
    }
    return;
  }

  const onBranchPress: () => void = () => {
    if (!IsBranchesOpenBoolean) {
      setBranchPressOpen();
    }
    setStateForBranchesShow(!stateForBranchesShow);
  };
  const setBranchPressOpen: () => void = () => {
    setIsBranchesOpenBoolean(!IsBranchesOpenBoolean);
  };

  const rightDragXposition = useState(new Animated.Value(screenWidth));
  const leftDragXposition = useState(new Animated.Value(0));
  const [rightDragXpositionForRerender, setRightDragXpositionForRerender] =
    useState(screenWidth);
  const [leftDragXpositionForRerender, setLeftDragXpositionForRerender] =
    useState(0);
  const [stateForSwipeDirection, setStateForSwipeDirection] = useState<
    number | null
  >(null);

  const scrollViewRef: Ref<ScrollView> = useRef<ScrollView>(null);
  const CountOfUnreadMessage = useMemo(() => {
    return CountOfUnreadMessages(selfProfile, chat);
  }, [chat.lastWatchedMessage]);
  const haveUnreadMessagesBool =
    CountOfUnreadMessage != null && CountOfUnreadMessage > 0;
  // console.log(getNameOfChat(chat,selfProfile)+":"+haveUnreadMessagesBool)

  const handlePress = useRef(() => {
    console.log("Кнопку натиснули");
    if (chat instanceof Dialogue) {
      navigation.navigate("DialogueNavigation", { chat: chat as Dialogue });
    }
  });

  const onLongPressChat = useRef((e: GestureResponderEvent) => {
    console.log("Кнопку зажали");
    setVisibleModalWindowChatState.current();
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
    scrollViewRef.current?.scrollTo({ x: screenWidth * 1.4 });
  };
  const scrollToLeft40Percents = () => {
    scrollViewRef.current?.scrollTo({ x: screenWidth * 0.6 });
  };
  const scrollToRightBound = () => {
    scrollViewRef.current?.scrollTo({ x: screenWidth });
  };
  const scrollToLeftBound = () => {
    scrollViewRef.current?.scrollTo({ x: screenWidth * 2 });
  };
  const scrollToZeroPosition = () => {
    scrollViewRef.current?.scrollTo({ x: 0 });
  };
  const handleScroll = (event: any) => {
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
    setRightDragXpositionForRerender(positionX);
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
          onBranchPress={onBranchPress}
          nesting={nesting}
        />

        {chat.branches.length > 0 && IsBranchesOpenBoolean ? (
          <ListOfBranches
            chat={chat}
            nesting={nesting + 1}
            setBranchOpen={setBranchPressOpen}
            stateForBranchesShow={stateForBranchesShow}
            navigation={navigation}
          />
        ) : null}
      </>
    );
  }
  return (
    <View>
      <Animated.View>
        <View
          style={{
            position: "absolute",
            height: screenHeight * 0.08,
            width: !isSwipedFromLeft
              ? 0
              : screenWidth * (1 - leftDragXpositionForRerender / screenWidth),
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 10,
          }}
        />
        <View
          style={{
            position: "absolute",
            direction: "rtl",
            height: screenHeight * 0.08,
            width: !isSwipedFromRight
              ? 0
              : (screenWidth * (rightDragXpositionForRerender - screenWidth)) /
                screenWidth,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
          }}
        />
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
            haveUnreadMessagesBool={haveUnreadMessagesBool}
          />

          <CentralChatContainer
            chat={chat}
            handlePress={handlePress}
            onLongPressChat={onLongPressChat}
            onBranchPress={onBranchPress}
            nesting={nesting}
          />
          <RightContainersForSwipe
            rightDragXposition={rightDragXposition[0]}
            rightDragXpositionForRerender={rightDragXpositionForRerender}
          />
        </Animated.ScrollView>
      </Animated.View>
      {chat.branches.length > 0 && IsBranchesOpenBoolean ? (
        <ListOfBranches
          chat={chat}
          nesting={nesting + 1}
          setBranchOpen={setBranchPressOpen}
          stateForBranchesShow={stateForBranchesShow}
          navigation={navigation}
        />
      ) : null}
    </View>
  );
};

export default connect(null)(React.memo(ChatContainer));
