import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import LastMessageStatusContainer from "./LastMessageStatusAndTimeComponents/LastMessageStatusContainer";
import { listOfChatsStyle } from "../../../../../Styles/ListOfChatsStyle";
import { connect } from "react-redux";
import Chat from "../../../../../../../dao/Models/Chats/Chat";
import Message from "../../../../../../../dao/Models/Message";
import TimeContainer from "./LastMessageStatusAndTimeComponents/TimeContainer";
import CheckBoxSelectChatContainer from "./CheckBoxSelectChatContainer";
import { screenHeight } from "../../../../../Constants/ConstantsForChatlist";

interface LastMessageStatusAndTimeProps {
  chat: Chat;
  time: string;
  isSelectChatMode: boolean;
  isSelectedChat: boolean;
}

const LastMessageStatusAndTimeContainer: React.FC<
  LastMessageStatusAndTimeProps
> = ({ chat, time, isSelectChatMode, isSelectedChat }) => {
  const lastMessage: Message | undefined =
    chat?.messages[chat.messages.length - 1];
  const lastMessageStatusComponent = () => {
    if (lastMessage) {
      return <LastMessageStatusContainer chat={chat} />;
    } else {
      return null;
    }
  };

  const animationDuration = 500;
  const animationTranslateX = screenHeight * 0.026;

  const checkBoxSelectChatAnimationStatePosition = useRef(
    new Animated.Value(0)
  );
  const timeContainerAnimationStatePosition = useRef(new Animated.Value(0));
  const lastMessageStatusComponentAnimationStateScale = useRef(
    new Animated.Value(0)
  );

  const checkBoxSelectChatAnimationPosition =
    checkBoxSelectChatAnimationStatePosition.current.interpolate({
      inputRange: [0, 1],
      outputRange: [animationTranslateX, 0],
    });
  const timeContainerAnimationPosition =
    timeContainerAnimationStatePosition.current.interpolate({
      inputRange: [0, 1],
      outputRange: [animationTranslateX, 0],
    });
  const lastMessageStatusComponentAnimationScale =
    lastMessageStatusComponentAnimationStateScale.current.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

  useEffect(() => {
    if (isSelectChatMode) {
      Animated.parallel([
        Animated.timing(lastMessageStatusComponentAnimationStateScale.current, {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(timeContainerAnimationStatePosition.current, {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(checkBoxSelectChatAnimationStatePosition.current, {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(checkBoxSelectChatAnimationStatePosition.current, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(timeContainerAnimationStatePosition.current, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(lastMessageStatusComponentAnimationStateScale.current, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isSelectChatMode]);

  return (
    <View style={[listOfChatsStyle.lastMessageStatusAndTimeContainer]}>
      <Animated.View
        style={{
          transform: [
            {
              scale: lastMessageStatusComponentAnimationScale,
            },
            {
              translateX: animationTranslateX,
            },
          ],
        }}
      >
        {lastMessageStatusComponent()}
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateX: timeContainerAnimationPosition }],
        }}
      >
        <TimeContainer time={time} />
      </Animated.View>
      {
        <Animated.View
          style={{
            transform: [{ translateX: checkBoxSelectChatAnimationPosition }],
          }}
        >
          <CheckBoxSelectChatContainer isSelectedChat={isSelectedChat} />
        </Animated.View>
      }
    </View>
  );
};

export default connect(null)(LastMessageStatusAndTimeContainer);
