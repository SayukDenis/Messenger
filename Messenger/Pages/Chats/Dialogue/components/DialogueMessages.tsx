import React, { Component, Dispatch } from "react";
import { DialogueMessagesProps } from "./interfaces/IDialogueMessages";
import { Animated, FlatList, Keyboard, View, KeyboardEvent, Platform } from "react-native";
import { connect } from "react-redux";
import { FLATLIST_HEIGHT, MESSAGE_BUTTON_HEIGHT, MESSAGE_MENU_HEIGHT, MESSAGE_PADDING_VERTICAL, SOFT_MENU_BAR_HEIGHT, height } from "../../SemiComponents/ChatConstants";
import styles from "./Styles/DialogueMessages";
import MessageItem from "../../SemiComponents/MessageItem";
import { EmitterSubscription } from "react-native";
import { addCoordinationsOfMessage, handleKeyboardAppearing, setScrollStateForPinnedMessage, setScrollStateTappedMessage, updateCoordinationsOfMessage } from "../../../../ReducersAndActions/Actions/ChatActions/ChatActions";
import { MessageProps } from "../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";
import { Layout } from "../../SemiComponents/Interfaces/GeneralInterfaces/ILayout";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";

interface DialogueMessagesReduxProps {
  dispatch?: Dispatch<any>;
}

export interface messageCoordsProps {
  message: number;
  coord: number;
  height: number;
}

interface DialogueMessagesState {
  coordsY: [number[]]
  keyboardHeight: Animated.Value;
  flatListHeight: Animated.Value;
  pinnedMessageId: number;
  deletedMessagesCount: number;
  callMessageMenu: boolean;
}

  let pinnedMessagesWithCoords:messageCoordsProps[] = [];

class DialogueMessages extends Component<DialogueMessagesProps & DialogueMessagesReduxProps> {
  state:DialogueMessagesState = {
    coordsY: [[]],
    keyboardHeight: new Animated.Value(0),
    flatListHeight: new Animated.Value(height*0.94),
    pinnedMessageId: -1,
    deletedMessagesCount: 0,
    callMessageMenu: false,
  }

  keyboardDidShowListener: EmitterSubscription | null = null;
  keyboardDidHideListener: EmitterSubscription | null = null;

  handleKeyboardDidShow = (event: KeyboardEvent) => {
    this.props.dispatch!(handleKeyboardAppearing());
    Animated.timing(this.state.flatListHeight, {
      toValue: height*0.94-event.endCoordinates.height,
      duration: 200,
      useNativeDriver: false
    }).start();
  };

  handleKeyboardDidHide = () => {
    this.props.dispatch!(handleKeyboardAppearing());
    Animated.timing(this.state.flatListHeight, {
      toValue: height*0.94,
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

  componentDidUpdate(prevProps: Readonly<DialogueMessagesProps & DialogueMessagesReduxProps>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('DialogueMessages was updated');
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
      const mes = this.props.messagesWithCoords.find(mes => mes.id === m.messageId);
      pinnedMessagesWithCoords.push({ 
        message: m.messageId!, 
        coord: mes?.coords!,
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
      
      if(tappedMessage !== undefined)
        this.flatListRef.current.scrollToOffset({ 
          animated: true, 
          offset: tappedMessage.coord - ((FLATLIST_HEIGHT - tappedMessage.height) / 2) 
        });

      if(this.props.dispatch) {
        this.props.dispatch(setScrollStateForPinnedMessage(false, -1));
      }
    }
  }

  scrollToTappedMessage = (scrollToTappedMessage: boolean, idOfTappedMessage: number) => {
    if(scrollToTappedMessage && this.flatListRef.current) {
      const tappedMessage = this.props.messagesWithCoords.find(m => m.id === idOfTappedMessage);

      console.log('!!!!!\n\n\n\n\n\nscrollToTappedMessage\n\n\n\n\n\n!!!!!');

      if(tappedMessage !== undefined)
        this.flatListRef.current.scrollToOffset({ animated: true, offset: tappedMessage.coords });

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
    const { messagesWithCoords, dispatch } = this.props;
    const mesId = messagesWithCoords?.findIndex(m => m.id === message);
    if(mesId >= 0 && Math.floor(messagesWithCoords[mesId].height) !== Math.floor(coord)) {
      dispatch!(updateCoordinationsOfMessage(message, coord))
      return;
    } else if(mesId >= 0)
      return;

    dispatch!(addCoordinationsOfMessage(message, coord));
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
    const mesCoords = this.props.messagesWithCoords.find(m => m.id === coord.message?.messageId!);

    const HEIGHT_OF_HEADER = heightOfHeader;
    const HEIGHT_OF_FLATLIST = height - SOFT_MENU_BAR_HEIGHT;
    const HEIGHT_OF_HEADER_OFFSET = height * 0.02+SOFT_MENU_BAR_HEIGHT;
    const isUser = coord.message?.author.userId === this.props.author.userId;

    if(pressed && HEIGHT_OF_FLATLIST - coord.componentPageY - mesCoords?.height! < MESSAGE_MENU_HEIGHT - (isUser ? 0 : MESSAGE_BUTTON_HEIGHT) && mesCoords?.coords! + height*0.08 < MESSAGE_MENU_HEIGHT - (isUser ? 0 : MESSAGE_BUTTON_HEIGHT)) {
      const scrollOffset = this.flatListRef.current._listRef._scrollMetrics.offset;

      Animated.timing(this.state.keyboardHeight, {
        toValue: -(MESSAGE_MENU_HEIGHT - (isUser ? 0 : MESSAGE_BUTTON_HEIGHT) - (mesCoords?.coords! + height*0.08)),
        duration: scrollOffset <= 39 ? 200 : 100,
        useNativeDriver: false
      }).start();

      this.flatListRef.current.scrollToOffset({ offset: 0, animated: true });

      await new Promise(resolve => setTimeout(resolve, 200));
      
      console.log('MessageMenu does not fit and FlatList cannot be scrolled');
      coord.componentPageY = coord.componentPageY - (MESSAGE_MENU_HEIGHT - (HEIGHT_OF_FLATLIST - coord.componentPageY - mesCoords?.height!)) + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT); 
      coord.pageY = HEIGHT_OF_FLATLIST + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT);
    } else if(pressed && HEIGHT_OF_FLATLIST - coord.componentPageY - mesCoords?.height! < MESSAGE_MENU_HEIGHT - (isUser ? 0 : MESSAGE_BUTTON_HEIGHT)) {
      this.flatListRef.current.scrollToOffset({ 
        offset: mesCoords?.coords! - MESSAGE_MENU_HEIGHT + HEIGHT_OF_HEADER_OFFSET + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT), 
        animated: true,
      });

      await new Promise(resolve => setTimeout(resolve, 200));
      console.log('MessageMenu does not fit and FlatList can be scrolled', Platform.OS, mesCoords?.coords!, mesCoords?.height!);
      coord.componentPageY = HEIGHT_OF_FLATLIST - mesCoords?.height! - MESSAGE_PADDING_VERTICAL - MESSAGE_MENU_HEIGHT + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT);
      coord.pageY = HEIGHT_OF_FLATLIST - MESSAGE_PADDING_VERTICAL + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT);
    } else if(pressed && coord.componentPageY < HEIGHT_OF_HEADER) {
      this.flatListRef.current.scrollToOffset({ 
        offset: this.flatListRef.current._listRef._scrollMetrics.offset + (HEIGHT_OF_HEADER - coord.componentPageY), 
        animated: true,
      });

      await new Promise(resolve => setTimeout(resolve, 200));
      console.log('Message is above or behind the header');
      coord.componentPageY = HEIGHT_OF_HEADER;
      coord.pageY = HEIGHT_OF_HEADER + MESSAGE_MENU_HEIGHT + mesCoords?.height!;
    } else if(pressed) {
      console.log('MessageMenu fits and FlatList does not need to be scrolled');
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
          height: this.state.flatListHeight, 
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
          //windowSize={15}
          maxToRenderPerBatch={10}
          initialNumToRender={20}
          removeClippedSubviews
          //updateCellsBatchingPeriod={100}
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
  messagesWithCoords: state.ChatReducer.setCoordinationsOfMessage.messagesWithCoords,
});

export default connect(mapStateToProps)(DialogueMessages);