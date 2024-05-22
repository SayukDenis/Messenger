import React, { Component } from "react";
import { DialogueMessagesProps, DialogueMessagesReduxProps, DialogueMessagesState, messageCoordsProps } from "./interfaces/IDialogueMessages";
import { Animated, FlatList, Keyboard, View, KeyboardEvent, Platform, Easing } from "react-native";
import { connect } from "react-redux";
import { ChatConstants } from "../../SemiComponents/ChatConstants";
import styles from "./Styles/DialogueMessages";
import MessageItem from "../../SemiComponents/MessageItem";
import { EmitterSubscription } from "react-native";
import { addCoordinationsOfMessage, handleKeyboardAppearing, handleKeyboardHeightUpdate, setScrollStateForPinnedMessage, updateCoordinationsOfMessage } from "../../../../ReducersAndActions/Actions/ChatActions/ChatActions";
import { MessageProps } from "../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";
import { Layout } from "../../SemiComponents/Interfaces/GeneralInterfaces/ILayout";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";
import { checkListOfMessagesDifference } from "../HelperFunctions/CheckListOfMessages";
import { ConcreteObserver } from "../HelperFunctions/Observer";

let pinnedMessagesWithCoords:messageCoordsProps[] = [];

 const { FLATLIST_HEIGHT, getKeyboardHeight, MESSAGE_BUTTON_HEIGHT, MESSAGE_MENU_HEIGHT, MESSAGE_PADDING_VERTICAL, SOFT_MENU_BAR_HEIGHT, height, setKeyboardHeight } = ChatConstants.getInstance();

class DialogueMessages extends Component<DialogueMessagesProps & DialogueMessagesReduxProps> {
  state:DialogueMessagesState = {
    coordsY: [[]],
    keyboardHeight: new Animated.Value(0),
    flatListHeight: new Animated.Value(height*0.94),
    footerGap: new Animated.Value(height * 0.025+SOFT_MENU_BAR_HEIGHT),
    pinnedMessageId: -1,
    deletedMessagesCount: 0,
    callMessageMenu: false,
  }

  keyboardDidShowListener: EmitterSubscription | null = null;
  keyboardDidHideListener: EmitterSubscription | null = null;

  handleKeyboardWillShow = (event: KeyboardEvent) => {
    console.log('Show keyboard')
    if(getKeyboardHeight() !== event.endCoordinates.height) setKeyboardHeight(event.endCoordinates.height);
    
    if(!this.props.keyboardActive)
      this.props.dispatch!(handleKeyboardAppearing());
    else
      this.props.dispatch!(handleKeyboardHeightUpdate());
    
    Animated.timing(this.state.flatListHeight, {
      toValue: height * 0.94 - getKeyboardHeight(),
      duration: event.duration,
      useNativeDriver: false,
    }).start();
  };

  handleKeyboardWillHide = (event: KeyboardEvent) => {
    this.props.dispatch!(handleKeyboardAppearing());
    Animated.timing(this.state.flatListHeight, {
      toValue: height * 0.94,
      duration: event.duration,
      useNativeDriver: false,
    }).start();
  };

  dynamicFooterHeightHandler = (dfh: number) => {
    const toValue = Math.min((height * 0.025+SOFT_MENU_BAR_HEIGHT+(this.props.isReply||this.props.isEdit?height*0.055-SOFT_MENU_BAR_HEIGHT:0)) + dfh, height * 0.105 + (this.props.isReply||this.props.isEdit?height*0.055-SOFT_MENU_BAR_HEIGHT:0))
    Animated.timing(this.state.footerGap, {
      toValue: toValue,
      duration: 50,
      useNativeDriver: false
    }).start();
  }

  replyOrEditHeightHandler = (prevIsEdit: boolean, prevIsReply: boolean) => {
    const { isEdit, isReply } = this.props;
    const changeValue = (((isReply || isEdit) && (prevIsEdit || prevIsReply)) || (!(isReply || isEdit) && !(prevIsEdit || prevIsReply))) ? 0 : 
                ((isReply || isEdit) && !(prevIsEdit || prevIsReply)) ? 1 : -1
    Animated.timing(this.state.footerGap, {
      toValue: (this.state.footerGap as any)._value + (height*0.055-SOFT_MENU_BAR_HEIGHT) * changeValue,
      duration: 50,
      useNativeDriver: false
    }).start();
  };

  componentDidMount() {
    pinnedMessagesWithCoords = [];

    // this.props.emitter.addListener('changeDynamicFooterHeight', this.dynamicFooterHeightHandler); 
    const observer = new ConcreteObserver();
    this.props.emitter.attach(observer, this.dynamicFooterHeightHandler);

    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this.handleKeyboardWillShow
    );

    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      this.handleKeyboardWillHide
    );
  }

  componentDidUpdate(prevProps: Readonly<DialogueMessagesProps & DialogueMessagesReduxProps>, prevState: Readonly<{}>, snapshot?: any): void {
    this.replyOrEditHeightHandler(prevProps.isEdit, prevProps.isReply);

    if(pinnedMessagesWithCoords.length !== this.props.pinnedMessages.length) 
      this.pinnedMessageChangeHandler(this.props.pinnedMessages);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener!.remove();
    this.keyboardDidHideListener!.remove();
    //this.props.emitter.removeListener('changeDynamicFooterHeight', this.dynamicFooterHeightHandler);
    this.props.emitter.detachAll();
  }

  shouldComponentUpdate(nextProps: Readonly<DialogueMessagesProps>, nextState: Readonly<DialogueMessagesState>, nextContext: any): boolean {
    console.log(this.props.emitter.state);

    const { listOfMessages, hasPinnedMessage, scrollToPinnedMessage, selecting, idOfPinnedMessage, pinnedMessages, isEdit, isReply, authorMessageLastWatched, messagesWithCoords, emitter } = this.props;
    
    const { pinnedMessageId } = this.state;
    //if(this.props !== nextProps) return true;
    if(checkListOfMessagesDifference(pinnedMessages, nextProps.pinnedMessages)) {
      this.pinnedMessageChangeHandler(nextProps.pinnedMessages);
      
      if(nextProps.pinnedMessages.length === 0) this.setState({ pinnedMessageId: -1 })
      return true;
    } else if(checkListOfMessagesDifference(listOfMessages, nextProps.listOfMessages)) {
      if(listOfMessages.length !== nextProps.listOfMessages.length) {
        this.messageListChangedHandler();
      }
      return true;
    } else if(hasPinnedMessage !== nextProps.hasPinnedMessage) {
      return true;
    } else if(scrollToPinnedMessage !== nextProps.scrollToPinnedMessage) {
      this.scrollToPinMessage(nextProps.scrollToPinnedMessage, nextProps.idOfPinnedMessage);
      return true;
    } else if(selecting !== nextProps.selecting) {
      return true;
    } else if(idOfPinnedMessage !== nextProps.idOfPinnedMessage) {
      return true;
    } else if(pinnedMessageId !== nextState.pinnedMessageId) {
      return true;
    } else if(isEdit !== nextProps.isEdit) {
      return true;
    } else if(isReply !== nextProps.isReply) {
      return true;
    } else if(authorMessageLastWatched?.messageId !== nextProps.authorMessageLastWatched?.messageId) {
      return true;
    } else if(messagesWithCoords !== nextProps.messagesWithCoords) {
      return true;
    }

    return false;
  }

  //#region HelperFunctions

  pinnedMessageChangeHandler = (pinnedMessages: MessageProps[]) => {
    if(this.props.listOfMessages.length === 0 || this.props.messagesWithCoords.length !== this.props.listOfMessages.length) return;

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
    const { messagesWithCoords, dispatch } = this.props;
    const mesId = messagesWithCoords?.findIndex(m => m.id === message);
    if(mesId >= 0 && Math.floor(messagesWithCoords[mesId].height) !== Math.floor(coord)) {
      dispatch!(updateCoordinationsOfMessage(mesId, coord))
      return;
    } else if(mesId >= 0)
      return;

    this.updateLastWatchedMessages(message, coord);
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
      author={author}
      users={users}
      messageID={messageID}
      userMessageLastWatched={userMessageLastWatched}
      selecting={selecting}
      pinnedMessageHandler={this.setPinnedMessageHandler}
      pinnedMessageScreen={false}
      photoPreview={this.props.previewPhoto}
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


    this.updateLastWatchedMessages();
  }

  updateLastWatchedMessages = (id?: number, coord?: number) => {
    const { listOfMessages, authorMessageLastWatched, author, chatId, chatHubService, messagesWithCoords } = this.props;
    const nearestUnwatchedMessageId = id ? id : listOfMessages.find(m => m.author.userId !== author.userId)?.messageId;
    const scrollPos = this.flatListRef.current._listRef._scrollMetrics.offset;
    const newMessage = messagesWithCoords.find(m => m.id === nearestUnwatchedMessageId);
    const newMessagePos = newMessage ? newMessage.coords + newMessage?.height : coord;

    if(nearestUnwatchedMessageId! > authorMessageLastWatched?.messageId! && chatHubService && scrollPos < newMessagePos!) {
      chatHubService.updateLastWatchedMessage(
        nearestUnwatchedMessageId!, 
        chatId, 
        author.userId
      );
    }
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
        toValue: -(MESSAGE_MENU_HEIGHT - (isUser ? 0 : MESSAGE_BUTTON_HEIGHT) - (mesCoords?.coords! + height*0.08) - ((this.state.footerGap as any)._value - height * 0.02)),
        duration: scrollOffset <= 39 ? 200 : 100,
        useNativeDriver: false
      }).start();

      this.flatListRef.current.scrollToOffset({ offset: 0, animated: true });

      await new Promise(resolve => setTimeout(resolve, 200));
      
      coord.componentPageY = coord.componentPageY - (MESSAGE_MENU_HEIGHT - (HEIGHT_OF_FLATLIST - coord.componentPageY - mesCoords?.height!)) + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT); 
      coord.pageY = HEIGHT_OF_FLATLIST + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT);
    } else if(pressed && HEIGHT_OF_FLATLIST - coord.componentPageY - mesCoords?.height! < MESSAGE_MENU_HEIGHT - (isUser ? 0 : MESSAGE_BUTTON_HEIGHT)) {
      this.flatListRef.current.scrollToOffset({ 
        offset: mesCoords?.coords! - MESSAGE_MENU_HEIGHT + HEIGHT_OF_HEADER_OFFSET + Math.ceil(MESSAGE_PADDING_VERTICAL/2) + (isUser ? 0 : MESSAGE_BUTTON_HEIGHT) + (this.props.pinnedMessages.length > 0 ? height*0.05 : 0) + ((this.state.footerGap as any)._value - height * 0.02), 
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
      <Animated.View style={{ height: this.state.footerGap }} />
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
          style={styles.dialogueChat}
          data={this.props.listOfMessages}
          inverted
          overScrollMode={'never'}
          maxToRenderPerBatch={5}
          initialNumToRender={20}
          removeClippedSubviews
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
  messagesWithCoords: state.ChatReducer.setCoordinationsOfMessage.messagesWithCoords,
  keyboardActive: state.ChatReducer.handleKeyboardAppearing.show
});

export default connect(mapStateToProps)(DialogueMessages);