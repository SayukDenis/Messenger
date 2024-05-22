import { Component } from "react";
import { TouchableOpacity, View, Text, Animated, EasingFunction, Easing } from "react-native";
import React from 'react';
import { MessageMenuProps, MessageMenuState } from "./Interfaces/IMessageMenu";
import { footerstyles, styles } from './Styles/MessageMenu';
import { screenHeight } from "../../ChatList/Constants/ConstantsForChatlist";
import { connect } from "react-redux";
import * as Clipboard from 'expo-clipboard';
import DefaultTextDummyMessage from "./MessageMenuDummyMessages/DefaultTextDummyMessage";
import ReplyTextDummyMessage from "./MessageMenuDummyMessages/ReplyTextDummyMessage";
import { ChatConstants } from "./ChatConstants";
import * as SVG from './SVG';
import { EMessageType } from "../../../dao/Models/EMessageType";
import ReplyFileType from "./MessageMenuDummyMessages/ReplyFileDummyMessage";
import DefaultFileType from "./MessageMenuDummyMessages/DefaultFileDummyMessage";
import DialogueMessagesType from "./HelperComponents/MessageMenu/DialogueMessagesType";
import PinnedMessageScreenType from "./HelperComponents/MessageMenu/PinnedMessageScreenType";

const { 
  GAP_BETWEEN_MESSAGE_MENU_AND_SOFT_MENU_BAR, MESSAGE_BUTTON_HEIGHT, MESSAGE_MENU_HEIGHT, MESSAGE_PADDING_HORIZONTAL, 
  MESSAGE_TRIANGLE_SIZE, NOT_USER_GAP_BETWEEN_MENU_AND_MESSAGE, getCustomFontSize 
} = ChatConstants.getInstance();

class MessageMenu extends Component<MessageMenuProps> {
  shouldComponentUpdate(nextProps: Readonly<MessageMenuProps>, nextState: Readonly<MessageMenuState>, nextContext: any): boolean {
    if(this.props.isVisible !== nextProps.isVisible) {
      return true;
    }

    return false;
  }

  buttons = [
    {
      text: 'Reply',
      action: this.props.onReplyPress,
      svg: <SVG.MessageMenuReplyButton />
    },
    {
      text: 'Edit',
      action: this.props.onEditPress,
      svg: <SVG.MessageMenuEditButton />
    },
    {
      text: 'Copy',
      action: async () => {
        await Clipboard.setStringAsync(this.props.coord.message?.content!);
      },
      svg: <SVG.MessageMenuCopyButton />
    },
    {
      text: this.props.coord?.pinned?'Unpin':'Pin',
      action: () => {
        if(typeof this.props.onPinPress === 'function')
          this.props.onPinPress(this.props.coord.message!);
      },
      svg: <SVG.PinButton />
    },
    {
      text: 'Forward',
      action: () => {},
      svg: <SVG.MessageMenuForwardButton />
    },
    {
      text: 'Delete',
      color: 'red',
      action: this.props.onDeletePress,
      svg: <SVG.DeleteButton />
    },
    {
      text: 'Select',
      action: this.props.onSelectPress,
      svg: <SVG.MessageMenuSelectButton />
    },
  ];

  pinnedMessageScreenButtons = [
    {
      text: 'Copy',
      action: async () => {
        await Clipboard.setStringAsync(this.props.coord.message?.content!);
      },
      svg: <SVG.MessageMenuCopyButton />
    },
    {
      text: 'Unpin',
      action: () => {
        if(typeof this.props.onPinPress === 'function')
          this.props.onPinPress(this.props.coord.message!);
      },
      svg: <SVG.PinButton />
    },
    {
      text: 'Forward',
      action: () => {},
      svg: <SVG.MessageMenuForwardButton />
    },
    {
      text: 'Delete',
      color: 'red',
      action: this.props.onDeletePress,
      svg: <SVG.DeleteButton />
    },
  ];

  //#region  Animation constants 
  durationOfAnimation: number = 15;
  easing: EasingFunction = Easing.linear;

  containerWidth = new Animated.Value(0); 
  firstContainerTranslate = new Animated.Value(0); 
  secondContainerTranslate = new Animated.Value(0);
  thirdContainerTranslate = new Animated.Value(0);
  fourthContainerTranslate = new Animated.Value(0);
  fifthContainerTranslate = new Animated.Value(0);
  sixthContainerTranslate = new Animated.Value(0);

  firstContainerOpacity = this.firstContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  firstContainerPositionY = this.firstContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  secondContainerOpacity = this.secondContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  secondContainerPositionY = this.secondContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  // Аналогічно для інших контейнерів
  thirdContainerOpacity = this.thirdContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  thirdContainerPositionY = this.thirdContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  fourthContainerOpacity = this.fourthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  fourthContainerPositionY = this.fourthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  fifthContainerOpacity = this.fifthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  fifthContainerPositionY = this.fifthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });

  sixthContainerOpacity = this.sixthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  sixthContainerPositionY = this.sixthContainerTranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight * 0.05, 0],
  });
  //#endregion

  animateMenu = (close: boolean = false) => {
    const animateOfFirstContainer = Animated.timing(this.firstContainerTranslate, {
      toValue: close ? 0 : 1, // Верхня позиція (видимий) або поза екраном (не видимий)
      duration: this.durationOfAnimation, // Тривалість анімації
      easing: this.easing,
      useNativeDriver: false,
    });
    const animateOfSecondContainer = Animated.timing(this.secondContainerTranslate, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      easing: this.easing,
      useNativeDriver: false,
    });
  
    const animateOfThirdContainer = Animated.timing(this.thirdContainerTranslate, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      easing: this.easing,
      useNativeDriver: false,
    });
  
    const animateOfFourthContainer = Animated.timing(this.fourthContainerTranslate, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      easing: this.easing,
      useNativeDriver: false,
    });
  
    const animateOfFifthContainer = Animated.timing(this.fifthContainerTranslate, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      easing: this.easing,
      useNativeDriver: false,
    });
    
    const animateOfSixthContainer = Animated.timing(this.sixthContainerTranslate, {
      toValue: close ? 0 : 1,
      duration: this.durationOfAnimation,
      easing: this.easing,
      useNativeDriver: false,
    });

    const containerSize = Animated.timing(this.containerWidth, {
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

  onButtonpPress = () => {
    this.containerWidth.setValue(0); 
    this.firstContainerTranslate.setValue(0); 
    this.secondContainerTranslate.setValue(0);
    this.thirdContainerTranslate.setValue(0);
    this.fourthContainerTranslate.setValue(0);
    this.fifthContainerTranslate.setValue(0);
    this.sixthContainerTranslate.setValue(0);
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
        return { transform: [{ scale: this.containerWidth }] }
      }
    }
  };

  handleMenuPosition = () => {
    const { isUser, coord, pinnedMessageScreen } = this.props;

    if(isUser) {
      return { 
        top: ((coord && coord.pageY) ? coord.pageY : 0) - (!pinnedMessageScreen ? MESSAGE_MENU_HEIGHT : MESSAGE_TRIANGLE_SIZE + MESSAGE_BUTTON_HEIGHT * 4 + GAP_BETWEEN_MESSAGE_MENU_AND_SOFT_MENU_BAR), 
        right: MESSAGE_PADDING_HORIZONTAL*2
      }
    } else {
      return { 
        top: ((coord && coord.pageY) ? coord.pageY - (!pinnedMessageScreen ? MESSAGE_BUTTON_HEIGHT : 0) : 0) - (!pinnedMessageScreen ? MESSAGE_MENU_HEIGHT - MESSAGE_BUTTON_HEIGHT : MESSAGE_TRIANGLE_SIZE + MESSAGE_BUTTON_HEIGHT * 4 + GAP_BETWEEN_MESSAGE_MENU_AND_SOFT_MENU_BAR), 
        left: MESSAGE_PADDING_HORIZONTAL*2-NOT_USER_GAP_BETWEEN_MENU_AND_MESSAGE
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
    const { message } = coord;

    const messageTypeHandler = () => {
      const coords = this.props.messagesWithCoords.find(m => m.id === coord.ID)?.height;

      const replyMessage = messages.find(m => m.messageId === message?.messageResponseId);
      const userName = replyMessage?.author.userId === userMessageLastWatched?.userId ? users[0].name : 'You';

      if(message?.messageType === EMessageType.text && message?.messageResponseId! >= 0 && messages.findIndex(m => m.messageId === message?.messageResponseId && (m.content || m.fileContent)) >= 0)
        return <ReplyTextDummyMessage 
          message={coord.message!} 
          messages={messages} 
          isUser={isUser} 
          height={coord.height} 
          fullHeight={coords!}
          userMessageLastWatched={userMessageLastWatched} 
          pinned={coord.pinned} 
          userName={userName}
        />
      else if(message?.messageType === EMessageType.text)
        return <DefaultTextDummyMessage 
          message={coord.message}
          isUser={isUser} 
          height={coord.height} 
          userMessageLastWatched={userMessageLastWatched} 
          pinned={coord.pinned}
        />
      else if(message?.messageType === EMessageType.img && message?.messageResponseId! >= 0 && messages.findIndex(m => m.messageId === message?.messageResponseId && (m.content || m.fileContent)) >= 0)
        return <ReplyFileType
          message={message}
          messages={messages}
          isUser={isUser}
          height={coord.height}
          fullHeight={coords!}
          userMessageLastWatched={userMessageLastWatched}
          pinned={coord.pinned}
          userName={userName}
        />
      else if(message?.messageType === EMessageType.img)
        return <DefaultFileType 
          message={message}
          isUser={isUser}
          height={coord.height}
          userMessageLastWatched={userMessageLastWatched}
          pinned={coord.pinned}
        />
    }
    
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
          {messageTypeHandler()}
        </View>
        { !pinnedMessageScreen ?
          <DialogueMessagesType 
            buttons={this.buttons}
            handleMenuPosition={this.handleMenuPosition}
            handleTrianglePosition={this.handleTrianglePosition}
            helperFunc={this.helperFunc}
            isUser={isUser}
            onButtonpPress={this.onButtonpPress}
            onOverlayPress={onOverlayPress}
            pinnedMessageScreen={pinnedMessageScreen}
          /> :
          <PinnedMessageScreenType
            buttons={this.buttons}
            handleMenuPosition={this.handleMenuPosition}
            handleTrianglePosition={this.handleTrianglePosition}
            helperFunc={this.helperFunc}
            isUser={isUser}
            onButtonpPress={this.onButtonpPress}
            onOverlayPress={onOverlayPress}
            pinnedMessageScreen={pinnedMessageScreen}
          />
        }
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state:any) => ({
  messagesWithCoords: state.ChatReducer.setCoordinationsOfMessage.messagesWithCoords,
});

export default connect(mapStateToProps)(MessageMenu);