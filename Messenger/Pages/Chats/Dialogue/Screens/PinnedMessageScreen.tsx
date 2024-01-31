import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { Component, PureComponent } from 'react';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import HeaderBackButton from '../../SemiComponents/SVG/HeaderBackButton';
import BackGroundGradinetView from '../../../SemiComponents/BackGroundGradientView';
import { height, width } from '../../SemiComponents/ChatConstants';
import MessageItem from '../components/MessageItem';
import { Layout } from '../GeneralInterfaces/ILayout';
import { MessageProps } from '../GeneralInterfaces/IMessage';
import User from '../../../../dao/Models/User';
import { heightOfHeader, screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import Constants from 'expo-constants';
import MessageMenu from '../components/MessageMenu';
import ILastWatchedMessage from '../../../../dao/Models/Chats/ILastWatchedMessage';
import DeleteMessageModal from '../components/DeleteMessageModal';

interface NavigationProps {
  route?: {
    params: {
      navigation: any;
      listOfPinnedMessages: MessageProps[];
      listOfMessages: MessageProps[];
      setMessageMenuVisible: {(arg0: Layout, arg1: boolean):void};
      author: User;
      messageID: number;
      unpinAllMessagesHandler: () => void;
      userMessageLastWatched: ILastWatchedMessage;
      onCopyPress: () => void;
      onUnpinPress: (message: MessageProps) => void;
      onDeletePress: (message: MessageProps) => void;
    }
  };
}

interface PinnedMessageScreenProps extends NavigationProps {
  
}

interface PinnedMessageScreenState {
  selecting: boolean;
  coordsY: [number[]];
  deleteModalVisisble: boolean;
  messageMenuVisible: boolean;
  messageID: number;
  listOfPinnedMessages: MessageProps[];
}

let coord:Layout;

class PinnedMessageScreen extends Component<PinnedMessageScreenProps> {
  state: PinnedMessageScreenState = {
    selecting: false,
    coordsY: [[]],
    messageMenuVisible: false,
    deleteModalVisisble: false,
    messageID: -1,
    listOfPinnedMessages: [],
  }

  componentDidMount(): void {
    console.log('djawjdhawdpawdi')
    this.setState({ 
      messageID: this.props.route?.params.messageID, 
      listOfPinnedMessages: this.props.route?.params.listOfPinnedMessages.reverse()
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

  setCoordsYHandler = (newCoordsY:any) => {
    this.setState({ coordsY: [...newCoordsY] });
  }

  handleMessagePress = (coordinations:Layout) => {
    coord = coordinations;
    this.setState({ 
      messageMenuVisible: true, 
      messageID: coordinations.ID 
    });
  };

  renderItem = ({item}:any) => (
    <MessageItem 
      item={item}
      listOfMessages={this.props.route?.params.listOfMessages!}
      setMessageMenuVisible={this.handleMessagePress}
      coordsY={this.state.coordsY}
      author={this.props.route?.params.author!}
      messageID={this.props.route?.params.messageID!}
      setCoordsY={this.setCoordsYHandler}
      selecting={this.state.selecting}
      pinnedMessageScreen
    />
  );

  ListHeaderComponent = () => (
    <View 
      style={{ backgroundColor: 'transparent', height: screenHeight*0.06 }} 
    />
  );

  unpinAllHandler = () => {
    this.props.route?.params.unpinAllMessagesHandler();
    this.props.route?.params.navigation.goBack();
  }

  onOverlayPress = () => {
    this.setState({ messageMenuVisible: false })
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
    this.props.route?.params.onDeletePress(mes!);
    
    const newListOfPinnedMessages = listOfPinnedMessages.filter(m => m.messageId !== coord.message?.messageId);

    this.setState({ 
      deleteModalVisisble: !this.state.deleteModalVisisble,
      listOfPinnedMessages: newListOfPinnedMessages
    })
  }

  render(): React.ReactNode {
    const { listOfMessages, author, userMessageLastWatched, onCopyPress } = this.props.route?.params!;
    const mes = listOfMessages.find(m => m.messageId==this.state.messageID);

    return (
      <View style={{ backgroundColor: 'green', zIndex: 10 }}>
        <BackGroundGradinetView>
          <MessageMenu 
            isUser={mes!=undefined&&mes.author.userId===author?.userId} 
            isVisible={this.state.messageMenuVisible} 
            onOverlayPress={this.onOverlayPress} 
            coord={coord} 
            messages={listOfMessages}
            pinnedMessageScreen
            userMessageLastWatched={userMessageLastWatched}
            onCopyPress={onCopyPress}
            onPinPress={this.onUnpinPressHandler}
            onDeletePress={this.onDeletePressHandler}
          />
          <DeleteMessageModal 
            deleting={this.state.deleteModalVisisble} 
            setDeletingHandler={this.onDeletePressHandler} 
            onDeletePress={this.DeleteHandler} 
            message={mes} 
            author={this.props.route?.params.author!}
          />
          <HeaderContainer>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
                <TouchableOpacity
                  style={{ width: width * 0.15 }}
                  onPress={() => this.props.route?.params.navigation?.goBack()}
                >
                  <HeaderBackButton />
                </TouchableOpacity>
                <Text style={{ fontSize: 18 }} >Pinned messages</Text>
                <TouchableOpacity
                  style={{ width: width * 0.15 }}
                  onPress={this.unpinAllHandler}
                >
                  <Text style={{ fontSize: 16, color: '#734CA5' }} >Unpin all</Text>
                </TouchableOpacity>
              </View>
            </View>
          </HeaderContainer>

          <FlatList 
            key={this.state.listOfPinnedMessages.length}
            style={{ height: height*0.94 }}
            data={this.state.listOfPinnedMessages} 
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            ListHeaderComponent={this.ListHeaderComponent}
            inverted
          />
        </BackGroundGradinetView>
      </View>
    )
  }
}

export default PinnedMessageScreen;