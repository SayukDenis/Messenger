import React, { Component, Dispatch } from "react";
import { DialogueMessagesProps } from "./interfaces/IDialogueMessages";
import { Animated, FlatList, Keyboard, View, KeyboardEvent } from "react-native";
import { connect } from "react-redux";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";
import Constants from 'expo-constants';
import { height } from "../../SemiComponents/ChatConstants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./Styles/DialogueMessages";
import MessageItem from "../../SemiComponents/MessageItem";
import { EmitterSubscription } from "react-native";
import { setScrollStateForPinnedMessage } from "../../../../ReducersAndActions/Actions/ChatActions/ChatActions";
import { MessageProps } from "../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";

interface DialogueMessagesReduxProps {
  dispatch?: Dispatch<any>;
}

interface pinnedMessageProps {
  message: number;
  coord: number
}

interface DialogueMessagesState {
  coordsY: [number[]]
  keyboardHeight: Animated.Value;
  pinnedMessageId: number;
  deletedMessagesCount: number;
}

  let pinnedMessagesWithCoords:pinnedMessageProps[] = [];  
  let messagesWithCoords:pinnedMessageProps[] = []; 

class DialogueMessages extends Component<DialogueMessagesProps & DialogueMessagesReduxProps> {
  state:DialogueMessagesState = {
    coordsY: [[]],
    keyboardHeight: new Animated.Value(0),
    pinnedMessageId: -1,
    deletedMessagesCount: 0,
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
    }

    console.log('not rerendering');

    return false;
  }

  //#region HelperFunctions

  pinnedMessageChangeHandler = (pinnedMessages: MessageProps[], deletedMessagesId: number[]) => {
    pinnedMessagesWithCoords = [];
    let y = 0;
    messagesWithCoords.map(mes => {
      console.log(mes.message);
      const pinned = pinnedMessages.find(m => m?.messageId === mes.message);
      if(pinned) {
        //console.log('pinnedMessages', pinnedMessages.map((m) => `${m.messageId} ${m.content}`))
        pinnedMessagesWithCoords.push({ message: mes.message, coord: y });
      }
      if(deletedMessagesId.findIndex(id => id === mes.message) < 0)
        y += mes.coord;
    });

    if(this.flatListRef.current) {
      this.flatListRef.current.scrollToOffset({ offset: this.flatListRef.current._listRef._scrollMetrics.offset + 1, animated: false });
      this.flatListRef.current.scrollToOffset({ offset: this.flatListRef.current._listRef._scrollMetrics.offset - 1, animated: false });
    }
  }

  scrollToPinMessage = (scrollToPinnedMessage: boolean, idOfPinnedMessage: number) => {
    if(scrollToPinnedMessage && this.flatListRef.current) {
      const offset = pinnedMessagesWithCoords.find(m => m.message == idOfPinnedMessage)?.coord;
      console.log('offset', offset);
      console.log(pinnedMessagesWithCoords);
      if(offset !== undefined)
        this.flatListRef.current.scrollToOffset({ animated: true, offset });

      if(this.props.dispatch) {
        console.log('scrolling')
        this.props.dispatch(setScrollStateForPinnedMessage(false, 0));
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
    if(mesId !== -1) {
      messagesWithCoords[mesId].coord = coord;
    } else {
      messagesWithCoords.push({ message, coord });
    }
  }

  flatListRef = React.createRef<any>();
  renderItem = ({item}:any) => {
    const { 
      listOfMessages, 
      setMessageMenuVisible,
      author,
      messageID,
      userMessageLastWatched,
      selecting,
    } = this.props;
    
    return <MessageItem 
      item={item}
      navigation={this.props.navigation}
      listOfMessages={listOfMessages}
      setMessageMenuVisible={setMessageMenuVisible}
      flatListRef={this.flatListRef as any}
      coordsY={this.state.coordsY}
      author={author}
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
    console.log(pinnedMessagesWithCoords);
    console.log('DialogueMessages', messageId);
    if(messageId != undefined && messageId >= 0)
      this.setState({ pinnedMessageId: this.props.setPinnedMessage(messageId) });
  }

  render() {

    const checkForSoftMenuBar = () => {
      if(height-screenHeight-Constants.statusBarHeight > 0)
        return Constants.statusBarHeight;
      
      return 0;
    }

    const keyExtractor = (item:any) => {
      return item?.messageId?.toString();
    }

    const ListHeaderComponent = () => (
      <View style={{ height: screenHeight * 0.02+(this.props.isReply||this.props.isEdit?screenHeight*0.06:0) }} />
    );
  
    const ListFooterComponent = () => (
      <View 
        style={{ backgroundColor: 'transparent', height: (screenHeight*0.08+(this.props.hasPinnedMessage?screenHeight*0.05:0)+Constants.statusBarHeight) }} 
      />
    )

    return (
      <Animated.View style={[styles.mainContainer, { height: screenHeight * 0.94 + checkForSoftMenuBar(), zIndex:0, transform: [{ translateY: this.state.keyboardHeight }] }]}>
        <FlatList
          onScroll={this.checkForPinMessage}
          ref={this.flatListRef}
          showsVerticalScrollIndicator={false}
          style={[styles.dialogueChat, { zIndex: 3 }]}
          data={this.props.listOfMessages}
          inverted
          overScrollMode={'never'}
          windowSize={15}
          maxToRenderPerBatch={3}
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
  idOfPinnedMessage: state.ChatReducer.scrollToPinnedMessage.id
});

export default connect(mapStateToProps)(DialogueMessages);