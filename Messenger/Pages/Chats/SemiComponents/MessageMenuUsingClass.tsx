import { Component } from "react";
import { TouchableOpacity, View, Text, Animated, EasingFunction, Easing } from "react-native";
import React from 'react';
import { MessageMenuProps, MessageMenuState } from "./Interfaces/IMessageMenu";
import { footerstyles, styles } from './Styles/MessageMenu';
import { screenHeight } from "../../ChatList/Constants/ConstantsForChatlist";
import { connect } from "react-redux";
import * as Clipboard from 'expo-clipboard';
import MessageMenuSelectButton from "./SVG/MessageMenuSelectButton";
import DeleteButton from "./SVG/DeleteButton";
import MessageMenuForwardButton from "./SVG/MessageMenuForwardButton";
import PinButton from "./SVG/PinButton";
import MessageMenuCopyButton from "./SVG/MessageMenuCopyButton";
import MessageMenuEditButton from "./SVG/MessageMenuEditButton";
import MessageMenuReplyButton from "./SVG/MessageMenuReplyButton";
import DefaultTextDummyMessage from "./MessageMenuDummyMessages/DefaultTextDummyMessage";
import ReplyTextDummyMessage from "./MessageMenuDummyMessages/ReplyTextDummyMessage";
import { MESSAGE_BUTTON_HEIGHT, MESSAGE_MENU_HEIGHT, MESSAGE_TRIANGLE_SIZE } from "./ChatConstants";

  const containerWidth = new Animated.Value(0); 
  const firstContainerTranslate = new Animated.Value(0); 
  const secondContainerTranslate = new Animated.Value(0);
  const thirdContainerTranslate = new Animated.Value(0);
  const fourthContainerTranslate = new Animated.Value(0);
  const fifthContainerTranslate = new Animated.Value(0);
  const sixthContainerTranslate = new Animated.Value(0);

class MessageMenu extends Component<MessageMenuProps> {
  state: MessageMenuState = {
    state: 1,
  }

  shouldComponentUpdate(nextProps: Readonly<MessageMenuProps>, nextState: Readonly<MessageMenuState>, nextContext: any): boolean {
    if(this.state.state !== nextState.state) {
      return true;
    } else if(this.props.isVisible !== nextProps.isVisible) {
      return true;
    }

    return false;
  }

  buttons = [
    {
      text: 'Reply',
      action: this.props.onReplyPress,
      svg: <MessageMenuReplyButton />
    },
    {
      text: 'Edit',
      action: this.props.onEditPress,
      svg: <MessageMenuEditButton />
    },
    {
      text: 'Copy',
      action: async () => {
        await Clipboard.setStringAsync(this.props.coord.message?.content!);
      },
      svg: <MessageMenuCopyButton />
    },
    {
      text: this.props.coord?.pinned?'Unpin':'Pin',
      action: () => {
        if(typeof this.props.onPinPress === 'function')
          this.props.onPinPress(this.props.coord.message!);
      },
      svg: <PinButton />
    },
    {
      text: 'Forward',
      action: () => {},
      svg: <MessageMenuForwardButton />
    },
    {
      text: 'Delete',
      color: 'red',
      action: this.props.onDeletePress,
      svg: <DeleteButton />
    },
    {
      text: 'Select',
      action: this.props.onSelectPress,
      svg: <MessageMenuSelectButton />
    },
  ];

  pinnedMessageScreenButtons = [
    {
      text: 'Copy',
      action: async () => {
        await Clipboard.setStringAsync(this.props.coord.message?.content!);
      },
      svg: <MessageMenuCopyButton />
    },
    {
      text: 'Unpin',
      action: () => {
        if(typeof this.props.onPinPress === 'function')
          this.props.onPinPress(this.props.coord.message!);
      },
      svg: <PinButton />
    },
    {
      text: 'Forward',
      action: () => {},
      svg: <MessageMenuForwardButton />
    },
    {
      text: 'Delete',
      color: 'red',
      action: this.props.onDeletePress,
      svg: <DeleteButton />
    },
  ];

  //#region  Animation constants 
  durationOfAnimation: number = 15;
  easing: EasingFunction = Easing.linear;
  firstContainerOpacity = firstContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  firstContainerPositionY = firstContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  secondContainerOpacity = secondContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  secondContainerPositionY = secondContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  // Аналогічно для інших контейнерів
  thirdContainerOpacity = thirdContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  thirdContainerPositionY = thirdContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  fourthContainerOpacity = fourthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  fourthContainerPositionY = fourthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  fifthContainerOpacity = fifthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  fifthContainerPositionY = fifthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  sixthContainerOpacity = sixthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  sixthContainerPositionY = sixthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  //#endregion

  animateMenu = (close: boolean = false) => {
    const animateOfFirstContainer = Animated.timing(firstContainerTranslate, {
      toValue: close ? 0 : 1, // Верхня позиція (видимий) або поза екраном (не видимий)
      duration: this.durationOfAnimation, // Тривалість анімації
      easing: this.easing,
      useNativeDriver: false,
    });
    const animateOfSecondContainer = Animated.timing(secondContainerTranslate, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      easing: this.easing,
      useNativeDriver: false,
    });
  
    const animateOfThirdContainer = Animated.timing(thirdContainerTranslate, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      easing: this.easing,
      useNativeDriver: false,
    });
  
    const animateOfFourthContainer = Animated.timing(fourthContainerTranslate, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      easing: this.easing,
      useNativeDriver: false,
    });
  
    const animateOfFifthContainer = Animated.timing(fifthContainerTranslate, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      easing: this.easing,
      useNativeDriver: false,
    });
    
    const animateOfSixthContainer = Animated.timing(sixthContainerTranslate, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      easing: this.easing,
      useNativeDriver: false,
    });

    const containerSize = Animated.timing(containerWidth, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      useNativeDriver: true,
    });

    const sequence = [
      containerSize,
      animateOfFirstContainer,
      animateOfSecondContainer,
      animateOfThirdContainer,
      animateOfFourthContainer,
      animateOfFifthContainer,
      animateOfSixthContainer,
    ];

    Animated.sequence(close ? sequence.reverse() : sequence).start();
  }

  helperFunc = (index: number) => {
    switch(index) {
      case 0: {
        return {
          transform: [{ translateY: this.sixthContainerPositionY }],
          opacity: this.sixthContainerOpacity,
        }
      }
      case 1: {
        return {
          transform: [{ translateY: this.fifthContainerPositionY }],
          opacity: this.fifthContainerOpacity,
        }
      }
      case 2: {
        return {
          transform: [{ translateY: this.fourthContainerPositionY }],
          opacity: this.fourthContainerOpacity,
        }
      }
      case 3: {
        return {
          transform: [{ translateY: this.thirdContainerPositionY }],
          opacity: this.thirdContainerOpacity,
        }
      }
      case 4: {
        return {
          transform: [{ translateY: this.secondContainerPositionY }],
          opacity: this.secondContainerOpacity,
        }
      }
      case 5: 
      return {
        transform: [{ translateY: this.firstContainerPositionY }],
        opacity: this.firstContainerOpacity,
      }
      default: {
        return { transform: [{ scale: containerWidth }] }
      }
    }
  };

  handleMenuPosition = () => {
    const { isUser, coord, pinnedMessageScreen } = this.props;
    const MESSAGE_HORIZONTAL_PADDING = 10;
    const NOT_USER_GAP_BETWEEN_MENU_AND_MESSAGE = 5;

    if(isUser) {
      return { 
        top: ((coord && coord.pageY) ? coord.pageY : 0) - (!pinnedMessageScreen ? MESSAGE_MENU_HEIGHT : MESSAGE_TRIANGLE_SIZE + MESSAGE_BUTTON_HEIGHT * 4), 
        right: MESSAGE_HORIZONTAL_PADDING*2
      }
    } else {
      return { 
        top: ((coord && coord.pageY) ? coord.pageY : 0) - MESSAGE_MENU_HEIGHT, 
        left: MESSAGE_HORIZONTAL_PADDING*2-NOT_USER_GAP_BETWEEN_MENU_AND_MESSAGE
      }
    }
  };

  handleTrianglePosition = () => {
    if(this.props.isUser) {
      return [
        footerstyles.triangle,
        footerstyles.positionOfModalWindowRightTop,
      ]
    } else {
      return [
        footerstyles.triangle,
        footerstyles.positionOfModalWindowLeftTop,
      ]
    }
  };

  render(): React.ReactNode {
    if(!this.props.isVisible) {
      return null;
    }
    const { onOverlayPress, coord, messages, isUser, userMessageLastWatched, pinnedMessageScreen, users } = this.props;
    
    this.animateMenu();
    
    return (
      <TouchableOpacity 
        activeOpacity={1} 
        style={styles.container} 
        onPress={() => {
          this.animateMenu(true);
          setTimeout(() => onOverlayPress(), this.durationOfAnimation*10)
        }}
      >
        <View style={{ top: coord.componentPageY, height: coord.height }}>
          {(coord.message?.messageResponseId! >= 0 && messages.find(m => m.messageId === coord.message?.messageResponseId)?.content) ?
          <ReplyTextDummyMessage 
            message={coord.message!} 
            messages={messages} 
            isUser={isUser} 
            height={coord.height} 
            userMessageLastWatched={userMessageLastWatched} 
            pinned={coord.pinned} 
            userName={users[0]?.name}
          />:
          <DefaultTextDummyMessage 
            message={coord.message}
            isUser={isUser} 
            height={coord.height} 
            userMessageLastWatched={userMessageLastWatched} 
            pinned={coord.pinned}
          />}
        </View>
        <View 
          style={[styles.buttonsContainer, this.handleMenuPosition(), pinnedMessageScreen&&{ height: MESSAGE_BUTTON_HEIGHT*4+MESSAGE_TRIANGLE_SIZE }]}
        >
          {(pinnedMessageScreen?this.pinnedMessageScreenButtons:this.buttons).map((button, index) => {
            return button.text=='Edit'&&!isUser? null: 
            <Animated.View key={button.text} style={this.helperFunc(index)}>
              {(button.text==='Reply'||(button.text==='Copy'&&pinnedMessageScreen)) && <View style={this.handleTrianglePosition()} />}
              <TouchableOpacity 
                key={index} 
                onPress={() => {button.action!(); onOverlayPress()}} 
                activeOpacity={1} 
                style={styles.button}
              >
                {button.svg}
                <Text style={{color:button.color, marginLeft: 5}}>{button.text}</Text>
              </TouchableOpacity>
            </Animated.View>
          })}
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect(null)(MessageMenu);