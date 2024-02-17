import React, { Component, Dispatch } from "react";
import { DialogueMessagesProps } from "./interfaces/IDialogueMessages";
import { Animated, FlatList, Keyboard, View, KeyboardEvent } from "react-native";
import { connect } from "react-redux";
import Constants from 'expo-constants';
import { MESSAGE_BUTTON_HEIGHT, MESSAGE_MENU_HEIGHT, MESSAGE_PADDING_VERTICAL, SOFT_MENU_BAR_HEIGHT, height } from "../../SemiComponents/ChatConstants";
import styles from "./Styles/DialogueMessages";
import MessageItem from "../../SemiComponents/MessageItem";
import { EmitterSubscription } from "react-native";
import { setScrollStateForPinnedMessage, setScrollStateTappedMessage } from "../../../../ReducersAndActions/Actions/ChatActions/ChatActions";
import { MessageProps } from "../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";
import { Layout } from "../../SemiComponents/Interfaces/GeneralInterfaces/ILayout";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";

interface DialogueMessagesReduxProps {
  dispatch?: Dispatch<any>;
}

interface pinnedMessageProps {
  message: number;
  coord: number;
  height: number;
}

interface DialogueMessagesState {
  coordsY: [number[]]
  keyboardHeight: Animated.Value;
  pinnedMessageId: number;
  deletedMessagesCount: number;
  callMessageMenu: boolean;
  tmpHeight: Animated.Value;
}

  let pinnedMessagesWithCoords:pinnedMessageProps[] = [];  
  let messagesWithCoords:pinnedMessageProps[] = []; 

class DialogueMessages extends Component<DialogueMessagesProps & DialogueMessagesReduxProps> {
  state:DialogueMessagesState = {
    coordsY: [[]],
    keyboardHeight: new Animated.Value(0),
    pinnedMessageId: -1,
    deletedMessagesCount: 0,
    callMessageMenu: false,
    tmpHeight: new Animated.Value(0),
  }

  keyboardDidShowListener: EmitterSubscription | null = null;
  keyboardDidHideListener: EmitterSubscription | null = null;

  handleKeyboardDidShow = (event: KeyboardEvent) => {
    Animated.timing(this.state.keyboardHeight, {
      toValue: -event.endCoordinates.height,
      duration: 200,
      useNativeDriver: false
    }).start();
  };

  handleKeyboardDidHide = () => {
    Animated.timing(this.state.keyboardHeight, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  };

  componentDidMount() {
    pinnedMessagesWithCoords = [];

    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardDidShow
    );

    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener!.remove();
    this.keyboardDidHideListener!.remove();
  }

  shouldComponentUpdate(nextProps: Readonly<DialogueMessagesProps>, nextState: Readonly<DialogueMessagesState>, nextContext: any): boolean {
    //if(this.props !== nextProps) return true;
    if(this.props.pinnedMessages !== nextProps.pinnedMessages) {
      this.pinnedMessageChangeHandler(nextProps.pinnedMessages, nextProps.deletedMessagesId);
      if(nextProps.pinnedMessages.length === 0) this.setState({ pinnedMessageId: -1 })
      return true;
    } else if(this.props.deletedMessagesId.length !== nextProps.deletedMessagesId.length) {
      return true;
    } else if(this.props.listOfMessages !== nextProps.listOfMessages) {
      if(this.state.deletedMessagesCount === nextProps.deletedMessagesId.length) { 
        this.messageListChangedHandler();
      } else {
        this.setState({ deletedMessagesCount: nextProps.deletedMessagesId.length });
      }
      return true;
    } else if(this.props.hasPinnedMessage !== nextProps.hasPinnedMessage) {
      return true;
    } else if(this.props.scrollToPinnedMessage !== nextProps.scrollToPinnedMessage) {
      this.scrollToPinMessage(nextProps.scrollToPinnedMessage, nextProps.idOfPinnedMessage);
      return true;
    } else if(this.props.selecting !== nextProps.selecting) {
      return true;
    } else if(this.props.idOfPinnedMessage !== nextProps.idOfPinnedMessage) {
      return true;
    } else if(this.state.pinnedMessageId !== nextState.pinnedMessageId) {
      return true;
    } else if(this.props.isEdit !== nextProps.isEdit) {
      return true;
    } else if(this.props.isReply !== nextProps.isReply) {
      return true;
    } else if(this.props.scrollToTappedMessage !== nextProps.scrollToTappedMessage) {
      this.scrollToTappedMessage(nextProps.scrollToTappedMessage, nextProps.idOfTappedMessage)
      return true;
    } else if(this.props.idOfTappedMessage !== nextProps.idOfTappedMessage) {
      this.scrollToTappedMessage(nextProps.scrollToTappedMessage, nextProps.idOfTappedMessage)
      return true;
    }

    return false;
  }

  //#region HelperFunctions

  pinnedMessageChangeHandler = (pinnedMessages: MessageProps[], deletedMessagesId: number[]) => {
    pinnedMessagesWithCoords = [];

    pinnedMessages.map(m => {
      const mes = messagesWithCoords.find(mes => mes.message === m.messageId);
      pinnedMessagesWithCoords.push({ 
        message: m.messageId!, 
        coord: mes?.coord!,
        height: mes?.height!
      });
    })

    if(this.flatListRef.current) {
      this.flatListRef.current.scrollToOffset({ offset: this.flatListRef.current._listRef._scrollMetrics.offset + 1, animated: false });
      this.flatListRef.current.scrollToOffset({ offset: this.flatListRef.current._listRef._scrollMetrics.offset - 1, animated: false });
    }
  }

  scrollToPinMessage = (scrollToPinnedMessage: boolean, idOfPinnedMessage: number) => {
    if(scrollToPinnedMessage && this.flatListRef.current) {
      const tappedMessage = pinnedMessagesWithCoords.find(m => m.message == idOfPinnedMessage);
      let deletedMesOffset = 0;
      for(let i = 0; i < this.props.deletedMessagesId.sort((m1, m2) => m1 - m2).length; i++) {
        if(this.props.deletedMessagesId[i] < idOfPinnedMessage) deletedMesOffset += messagesWithCoords.find(m => m.message === this.props.deletedMessagesId[i])?.height!;
        else break;
      }
      if(tappedMessage !== undefined)
        this.flatListRef.current.scrollToOffset({ animated: true, offset: tappedMessage.coord - deletedMesOffset - tappedMessage.height });

      if(this.props.dispatch) {
        this.props.dispatch(setScrollStateForPinnedMessage(false, -1));
      }
    }
  }

  scrollToTappedMessage = (scrollToTappedMessage: boolean, idOfTappedMessage: number) => {
    if(scrollToTappedMessage && this.flatListRef.current) {
      const tappedMessage = messagesWithCoords.find(m => m.message === idOfTappedMessage);
      let deletedMesOffset = 0;
      for(let i = 0; i < this.props.deletedMessagesId.sort((m1, m2) => m1 - m2).length; i++) {
        if(this.props.deletedMessagesId[i] > idOfTappedMessage) deletedMesOffset += messagesWithCoords.find(m => m.message === this.props.deletedMessagesId[i])?.height!;
        else break;
      }
      if(tappedMessage !== undefined)
        this.flatListRef.current.scrollToOffset({ animated: true, offset: tappedMessage.coord - deletedMesOffset - tappedMessage.height });

      if(this.props.dispatch) {
        this.props.dispatch(setScrollStateTappedMessage(false, 0));
      }
    }
  }

  messageListChangedHandler = () => {
    if (this.flatListRef.current) {
      (this.flatListRef.current as FlatList).scrollToOffset({ animated: true, offset: 0 });
    }
  }

  //#endregion

  setCoordsYHandler = (newCoordsY:any) => {
    this.setState({ coordsY: [...newCoordsY] });
  }

  setPinnedMessageHandler = (message:number, coord:number) => {
    //console.log('setPinnedMessageHandler', message, coord);
    const mesId = messagesWithCoords.findIndex(m => m.message === message);
    if(mesId !== -1 && mesId > 0) {
      messagesWithCoords[mesId].coord = coord + messagesWithCoords[mesId-1].coord;
      messagesWithCoords[mesId].height = coord;
    } else if(mesId !== -1) {
      messagesWithCoords[mesId].coord = coord;
      messagesWithCoords[mesId].height = coord;
    } else if(messagesWithCoords.length >= 1) {
      messagesWithCoords.push({ message, coord: coord + messagesWithCoords[messagesWithCoords.length-1].coord, height: coord });
    } else {
      messagesWithCoords.push({ message, coord, height: coord });
    }
  }

  flatListRef = React.createRef<any>();
  renderItem = ({item}:any) => {
    const { 
      listOfMessages, 
      author,
      messageID,
      userMessageLastWatched,
      selecting,
      users
    } = this.props;
    
    return <MessageItem 
      item={item}
      navigation={this.props.navigation}
      listOfMessages={listOfMessages}
      setMessageMenuVisible={this.messageMenuHandler}
      flatListRef={this.flatListRef as any}
      coordsY={this.state.coordsY}
      author={author}
      users={users}
      messageID={messageID}
      setCoordsY={this.setCoordsYHandler}
      userMessageLastWatched={userMessageLastWatched}
      selecting={selecting}
      pinnedMessageHandler={this.setPinnedMessageHandler}
      pinnedMessageScreen={false}
      listOfPinnedMessages={this.props.pinnedMessages.map((m) => {
        return m.messageId!
      })}
    />
  };

  checkForPinMessage = (event:any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    let minOffset = 9999;
    let messageId = 0;
    pinnedMessagesWithCoords.map((mes) => {
      const offset = Math.abs(mes.coord - yOffset);
      if(offset < minOffset) {
        minOffset = offset;
        messageId = mes.message;
      }
    })
    if(messageId != undefined && messageId >= 0)
      this.setState({ pinnedMessageId: this.props.setPinnedMessage(messageId) });
  }

  messageMenuHandler = async (coord: Layout, pressed: boolean) => {
    const mesCoords = messagesWithCoords.find(m => m.message === coord.message?.messageId);

    const HEIGHT_OF_HEADER = heightOfHeader;
    const HEIGHT_OF_FLATLIST = height - SOFT_MENU_BAR_HEIGHT;
    const HEIGHT_OF_HEADER_OFFSET = height * 0.02+SOFT_MENU_BAR_HEIGHT;
    const isUser = coord.message?.author.userId === this.props.author.userId;

    if(pressed && height*0.94 - coord.componentPageY - mesCoords?.height! < MESSAGE_MENU_HEIGHT - (isUser ? 0 : MESSAGE_BUTTON_HEIGHT) && this.flatListRef.current._listRef._scrollMetrics.offset < MESSAGE_MENU_HEIGHT - (isUser ? 0 : MESSAGE_BUTTON_HEIGHT) - height*0.06 ) {
      const scrollOffset = this.flatListRef.current._listRef._scrollMetrics.offset;
      
      Animated.timing(this.state.keyboardHeight, {
        toValue: -(MESSAGE_MENU_HEIGHT - (height - height*0.06 - coord.componentPageY - mesCoords?.height! + scrollOffset + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT))),
        duration: 200,
        useNativeDriver: false
      }).start();

      this.flatListRef.current.scrollToOffset({ offset: 0, animated: true });
      await new Promise(resolve => setTimeout(resolve, 200));

      coord.componentPageY = coord.componentPageY - (MESSAGE_MENU_HEIGHT - (height - height*0.06 - coord.componentPageY - mesCoords?.height!)) + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT); 
      coord.pageY = (height - height*0.06) + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT);
    } else if(pressed && height*0.94 - coord.componentPageY - mesCoords?.height! < MESSAGE_MENU_HEIGHT - (isUser ? 0 : MESSAGE_BUTTON_HEIGHT)) {
      this.flatListRef.current.scrollToOffset({ 
        offset: mesCoords?.coord! - mesCoords?.height! - MESSAGE_MENU_HEIGHT + HEIGHT_OF_HEADER_OFFSET + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT), 
        animated: true,
      });

      await new Promise(resolve => setTimeout(resolve, 200));
      
      coord.componentPageY = HEIGHT_OF_FLATLIST - mesCoords?.height! - MESSAGE_PADDING_VERTICAL - MESSAGE_MENU_HEIGHT + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT);
      coord.pageY = HEIGHT_OF_FLATLIST - MESSAGE_PADDING_VERTICAL + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT);
    } else if(pressed && coord.componentPageY < HEIGHT_OF_HEADER) {
      this.flatListRef.current.scrollToOffset({ 
        offset: this.flatListRef.current._listRef._scrollMetrics.offset + (HEIGHT_OF_HEADER - coord.componentPageY), 
        animated: true,
      });

      await new Promise(resolve => setTimeout(resolve, 200));
      
      coord.componentPageY = HEIGHT_OF_HEADER;
      coord.pageY = HEIGHT_OF_HEADER + MESSAGE_MENU_HEIGHT + mesCoords?.height!;
    } else if(pressed) {
      coord.pageY = coord.componentPageY + mesCoords?.height! + MESSAGE_MENU_HEIGHT;
    }

    this.props.setMessageMenuVisible(coord, pressed, () => {
      Animated.timing(this.state.keyboardHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start();
    });
  }

  render() {
    const keyExtractor = (item:any) => {
      return item?.messageId?.toString();
    }

    const ListHeaderComponent = () => (
      <View style={{ height: (height * 0.02+SOFT_MENU_BAR_HEIGHT+(this.props.isReply||this.props.isEdit?height*0.07-SOFT_MENU_BAR_HEIGHT/4:0)) }} />
    );
  
    const ListFooterComponent = () => (
      <View 
        style={{ backgroundColor: 'transparent', height: (heightOfHeader+(this.props.hasPinnedMessage?height*0.05:0)) }} 
      />
    )

    return (
      <Animated.View style={[
        styles.mainContainer, { 
          height: height * 0.94, 
          zIndex:0, 
          transform: [{
            translateY: this.state.keyboardHeight
          }] 
        }]}
      >
        <FlatList
          onScroll={this.checkForPinMessage}
          ref={this.flatListRef}
          showsVerticalScrollIndicator={false}
          style={[styles.dialogueChat, { zIndex: 3 }]}
          data={this.props.listOfMessages}
          inverted
          overScrollMode={'never'}
          windowSize={15}
          maxToRenderPerBatch={10}
          initialNumToRender={20}
          removeClippedSubviews
          updateCellsBatchingPeriod={100}
          keyExtractor={keyExtractor}
          renderItem={this.renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent} 
        />
      </Animated.View>
    );
  }
}

const mapStateToProps = (state:any) => ({
  scrollToPinnedMessage: state.ChatReducer.scrollToPinnedMessage.scroll,
  idOfPinnedMessage: state.ChatReducer.scrollToPinnedMessage.id,
  scrollToTappedMessage: state.ChatReducer.scrollToTappedMessage.scroll,
  idOfTappedMessage: state.ChatReducer.scrollToTappedMessage.id,
});

export default connect(mapStateToProps)(DialogueMessages);