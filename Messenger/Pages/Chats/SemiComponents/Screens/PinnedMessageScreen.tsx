import { View, Text, TouchableOpacity, FlatList, Animated } from 'react-native';
import React, { Component } from 'react';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import * as SVG from './../SVG';
import BackGroundGradinetView from '../../../SemiComponents/BackGroundGradientView';
import { MESSAGE_BUTTON_HEIGHT, MESSAGE_TRIANGLE_SIZE, SOFT_MENU_BAR_HEIGHT, getCustomFontSize, height, width } from '../ChatConstants';
import MessageItem from '../MessageItem';
import { heightOfHeader, screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import MessageMenu from '../MessageMenu';
import DeleteMessageModal from '../DeleteMessageModal';
import { MessageProps } from '../Interfaces/GeneralInterfaces/IMessage';
import { Layout } from '../Interfaces/GeneralInterfaces/ILayout';
import { PinnedMessageScreenProps, PinnedMessageScreenState, coordY } from '../Interfaces/IPinnedMessageScreen';

let coord: Layout;
let coordsY: coordY[] = [];

class PinnedMessageScreen extends Component<PinnedMessageScreenProps> {
  state: PinnedMessageScreenState = {
    selecting: false,
    messageMenuVisible: false,
    deleteModalVisisble: false,
    messageID: -1,
    listOfPinnedMessages: [],
    offsetForMessageMenu: new Animated.Value(0),
  }

  componentDidMount(): void {
    this.setState({ 
      messageID: this.props.route?.params.messageID, 
      listOfPinnedMessages: [...this.props.route?.params.listOfPinnedMessages!].sort((m1, m2) => m2.messageId! - m1.messageId!)
    })
  }

  checkListOfMessagesEquality = (list1: MessageProps[], list2: MessageProps[]) => {
    if(list1.length === list2.length) {
      return true
    }

    return false;
  }
  shouldComponentUpdate(nextProps: Readonly<PinnedMessageScreenProps>, nextState: Readonly<PinnedMessageScreenState>, nextContext: any): boolean {
    if(!this.checkListOfMessagesEquality(this.state.listOfPinnedMessages, nextState.listOfPinnedMessages)) {
      return true;
    } else if(this.state.selecting !== nextState.selecting) {
      return true;
    } else if(this.state.messageMenuVisible !== nextState.messageMenuVisible) {
      return true;
    } else if(this.state.messageID !== nextState.messageID) {
      return true;
    } else if(this.state.deleteModalVisisble != nextState.deleteModalVisisble) {
      return true;
    }

    return false;
  }

  componentDidUpdate(prevProps: Readonly<PinnedMessageScreenProps>, prevState: Readonly<PinnedMessageScreenState>, snapshot?: any): void {
    if(this.state.listOfPinnedMessages.length === 0) {
      this.props.route?.params.navigation.goBack();
    }
  }

  keyExtractor = (item:any) => {
    return item.messageId?.toString();
  }

  flatListRef = React.createRef<any>();
  handleMessagePress = async (coordinations:Layout) => {

    const HEIGHT_OF_HEADER = heightOfHeader;
    const MESSAGE_MENU_HEIGHT = (MESSAGE_BUTTON_HEIGHT * 4) + MESSAGE_TRIANGLE_SIZE;

    const mesCoords = coordsY.find(m => m.id === (coordinations.ID || coordinations.message?.messageId!));
    
    const scrollOffset = this.flatListRef.current._listRef._scrollMetrics.offset;

    if(height - SOFT_MENU_BAR_HEIGHT - coordinations.componentPageY - mesCoords?.height! + scrollOffset < MESSAGE_MENU_HEIGHT && scrollOffset < MESSAGE_MENU_HEIGHT) {
      
      const toValue = -(MESSAGE_MENU_HEIGHT - (height - SOFT_MENU_BAR_HEIGHT - coordinations.componentPageY - mesCoords?.height! + scrollOffset));

      Animated.timing(this.state.offsetForMessageMenu, {
        toValue: toValue > 0 ? 0 : toValue ,
        duration: 200,
        useNativeDriver: false
      }).start();

      this.flatListRef.current.scrollToOffset({ offset: 0, animated: true });
      await new Promise(resolve => setTimeout(resolve, 200));

      coordinations.componentPageY += (toValue > 0 ? 0 : toValue ); 
      coordinations.pageY = height - SOFT_MENU_BAR_HEIGHT; 
    } else if((height - SOFT_MENU_BAR_HEIGHT) - coordinations.componentPageY - mesCoords?.height! < MESSAGE_MENU_HEIGHT) {
      const scrollOffset = MESSAGE_MENU_HEIGHT - ((height - SOFT_MENU_BAR_HEIGHT) - coordinations.componentPageY - mesCoords?.height!);
      this.flatListRef.current.scrollToOffset({ 
        offset: this.flatListRef.current._listRef._scrollMetrics.offset - scrollOffset, 
        animated: true,
      });

      await new Promise(resolve => setTimeout(resolve, 200));

      coordinations.componentPageY = (height - SOFT_MENU_BAR_HEIGHT) - MESSAGE_MENU_HEIGHT - mesCoords?.height!; 
      coordinations.pageY = (height - SOFT_MENU_BAR_HEIGHT);
    } else if(coordinations.componentPageY < HEIGHT_OF_HEADER) {
      this.flatListRef.current.scrollToOffset({ 
        offset: this.flatListRef.current._listRef._scrollMetrics.offset + (HEIGHT_OF_HEADER - coordinations.componentPageY), 
        animated: true,
      });

      await new Promise(resolve => setTimeout(resolve, 200));

      
      coordinations.componentPageY = HEIGHT_OF_HEADER;
      coordinations.pageY = HEIGHT_OF_HEADER + MESSAGE_MENU_HEIGHT + mesCoords?.height!;
    } else {
      coordinations.pageY = coordinations.componentPageY + mesCoords?.height! + MESSAGE_MENU_HEIGHT;
    }

    coord = coordinations;
    this.setState({ 
      messageMenuVisible: true, 
      messageID: coordinations.ID 
    });
  };

  renderItem = ({item}:any) => (
    <MessageItem 
      navigation={this.props.route?.params.navigation}
      item={item}
      users={this.props.route?.params.users!}
      listOfMessages={this.props.route?.params.listOfMessages!}
      setMessageMenuVisible={this.handleMessagePress}
      coordsY={coordsY}
      author={this.props.route?.params.author!}
      messageID={this.props.route?.params.messageID!}
      selecting={this.state.selecting}
      pinnedMessageScreen
      userMessageLastWatched={this.props.route?.params.userMessageLastWatched}
      listOfPinnedMessages={this.props.route?.params.listOfPinnedMessages.map((m) => {
        return m.messageId!
      })!}  
      photoPreview={(fileContent: string, sendingTime: Date | null) => {}}
    />
  );

  ListHeaderComponent = () => (
    <View 
      style={{ backgroundColor: 'transparent', height: screenHeight*0.02 }} 
    />
  );

  ListFooterComponent = () => (
    <View 
      style={{ backgroundColor: 'transparent', height: heightOfHeader }} 
    />
  );

  unpinAllHandler = () => {
    this.props.route?.params.unpinAllMessagesHandler();
    this.props.route?.params.navigation.goBack();
  }

  onOverlayPress = () => {
    this.setState({ messageMenuVisible: false })
    Animated.timing(this.state.offsetForMessageMenu, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }
  
  onUnpinPressHandler = () => {
    const { listOfPinnedMessages } = this.state;

    const mes = listOfPinnedMessages.find(m => m.messageId === coord.message?.messageId);
    this.props.route?.params.onUnpinPress(mes!);
    
    const newListOfPinnedMessages = listOfPinnedMessages.filter(m => m.messageId !== coord.message?.messageId);

    this.setState({ listOfPinnedMessages: newListOfPinnedMessages });
  }

  onDeletePressHandler = () => {
    this.setState({ deleteModalVisisble: !this.state.deleteModalVisisble });
  }

  DeleteHandler = () => {
    const { listOfPinnedMessages } = this.state;

    const mes = listOfPinnedMessages.find(m => m.messageId === coord.message?.messageId);
    this.props.route?.params.onUnpinPress(mes!);
    this.props.route?.params.onDeletePress(mes!.messageId!);
    
    const newListOfPinnedMessages = listOfPinnedMessages.filter(m => m.messageId !== coord.message?.messageId);

    this.setState({ 
      deleteModalVisisble: !this.state.deleteModalVisisble,
      listOfPinnedMessages: newListOfPinnedMessages
    })
  }

  render(): React.ReactNode {
    const { listOfMessages, author, userMessageLastWatched, users } = this.props.route?.params!;
    const { messageMenuVisible, deleteModalVisisble, listOfPinnedMessages, offsetForMessageMenu } = this.state;

    const mes = listOfMessages.find(m => m.messageId==this.state.messageID);

    return (
      <View style={{ flex: 1 }}>
        <BackGroundGradinetView>
          <MessageMenu 
            isUser={mes!=undefined&&mes.author.userId===author?.userId} 
            users={users}
            isVisible={messageMenuVisible} 
            onOverlayPress={this.onOverlayPress} 
            coord={coord} 
            messages={listOfMessages}
            pinnedMessageScreen
            userMessageLastWatched={userMessageLastWatched}
            onPinPress={this.onUnpinPressHandler}
            onDeletePress={this.onDeletePressHandler}
          />
          <DeleteMessageModal 
            deleting={deleteModalVisisble} 
            setDeletingHandler={this.onDeletePressHandler} 
            onDeletePress={this.DeleteHandler} 
            message={mes} 
            author={this.props.route?.params.author!}
          />
          <HeaderContainer>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
                <TouchableOpacity
                  style={{ width: width * 0.2 }}
                  onPress={() => this.props.route?.params.navigation?.goBack()}
                >
                  <SVG.HeaderBackButton />
                </TouchableOpacity>
                <Text style={{ fontSize: getCustomFontSize(18) }} >Pinned messages</Text>
                <TouchableOpacity
                  style={{ width: width * 0.2 }}
                  onPress={this.unpinAllHandler}
                >
                  <Text style={{ fontSize: getCustomFontSize(16), color: '#734CA5' }} >Unpin all</Text>
                </TouchableOpacity>
              </View>
            </View>
          </HeaderContainer>

          <Animated.View style={{
            transform: [{
              translateY: offsetForMessageMenu
            }]
          }}>
            <FlatList 
              key={listOfPinnedMessages.length}
              ref={this.flatListRef}
              style={{ height: height }}
              data={listOfPinnedMessages} 
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              ListHeaderComponent={this.ListHeaderComponent}
              ListFooterComponent={this.ListFooterComponent}
              inverted
              showsVerticalScrollIndicator={false}
            />
          </Animated.View>
        </BackGroundGradinetView>
      </View>
    )
  }
}

export default PinnedMessageScreen;