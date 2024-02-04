import { View, Text } from 'react-native';
import React, { Component } from 'react';
import BackGroundGradientView from '../../SemiComponents/BackGroundGradientView';
import Header from '../SemiComponents/Header';
import ILastWatchedMessage from '../../../dao/Models/Chats/ILastWatchedMessage';
import * as GroupModel from '../../../dao/Models/Chats/Group';
import SelfProfile from '../../../dao/Models/SelfProfile';
import { MessageProps } from '../SemiComponents/Interfaces/GeneralInterfaces/IMessage';
import { Layout } from '../SemiComponents/Interfaces/GeneralInterfaces/ILayout';
import User from '../../../dao/Models/User';

interface GroupNavigationProps {
  navigation: any;
  route: any;
}

interface GroupState {
  messageID: -1,
    messageMenuVisible: boolean;
    listOfMessages: MessageProps[];
    isReply: boolean;
    isEdit: boolean;
    editMessage: MessageProps;
    pinnedMessage: MessageProps;
    listOfPinnedMessages: MessageProps[];
    selecting: boolean;
    copy: boolean;
    deleting: boolean;
}

let coord:Layout;
let messageIdForReplyAndEdit:number;
let msgs:MessageProps[] = [];
let deletedMessagesId:number[] = [];

const user:SelfProfile = {
  userId: 0,
  name: 'Denis',
  numberPhone: '',
  nickname: 'Denis',
  description: '',
  linkToPhoto: '',
  password: 'asdoapwd',
  email: 'dopawdjpa',
  timeLastEntry: new Date(),
  tabs: new Array(),
  schema: {} as any
}

let authorMessageLastWatched: ILastWatchedMessage | undefined;
let userMessageLastWatched: ILastWatchedMessage | undefined;
let group: GroupModel.default;

class Group extends Component<GroupNavigationProps> {
  state: GroupState = {
    messageID: -1,
    messageMenuVisible: false,
    listOfMessages: [] as MessageProps[],
    isReply: false,
    isEdit: false,
    editMessage: {} as MessageProps,
    pinnedMessage: {} as MessageProps,
    listOfPinnedMessages: (this.props.route.params.chat as GroupModel.default).pinnedMessage as MessageProps[],
    selecting: false,
    copy: false,
    deleting: false,
  }
  
  authorMessageLastWatched = (this.props.route.params.chat as GroupModel.default).lastWatchedMessage.find(obj => obj.user.userId===user.userId);
  userMessageLastWatched = (this.props.route.params.chat as GroupModel.default).lastWatchedMessage.find(obj => obj.user.userId!==user.userId);

  componentDidMount(): void {
    this.setState({ listOfMessages: (this.props.route.params.chat as GroupModel.default).messages.reverse() })
  }

  mes = msgs?msgs.find(m => m.messageId==this.state.messageID):this.state.listOfMessages.find(m => m.messageId==this.state.messageID);

  // const replyHandler = useCallback(() => {
  //   setIsReply(!isReply);
  //   setReplyMessageHandler();
  // },[messageID]);

  // setReplyMessageHandler = () => {
  //   if(!this.state.isReply)
  //     this.setState({ editMessage: {} as MessageProps });
  // }

  // const sendMessageOrCancelReplyAndEditHandler = useCallback(() => {
  //   setIsEdit(false);
  //   setIsReply(false);
  //   setEditMessage({} as MessageProps);
  // },[]);

  // const pressEditButton = () => {
  //   setIsEdit(!isEdit);
  //   setEditMessageHandler();
  // }

  // const setEditMessageHandler = () => {
  //   if(!isEdit) {
  //     setEditMessage(msgs.find(m => m.messageId==messageID)!);
  //   }
  //   else
  //     setEditMessage({} as MessageProps);
  // }

  // const handleMessagePressOrSwipe = useCallback((coordinations:Layout, pressed:boolean) => {
  //   coord = coordinations;
  //   if(pressed) {
  //     setMessageMenuVisible(true);
  //     setMessageID(coordinations.ID);
  //     messageIdForReplyAndEdit = coordinations.ID;
  //   } else {
  //     setMessageID(coordinations.ID);
  //     messageIdForReplyAndEdit = coordinations.ID;
  //     replyHandler();
  //   }
  // }, []);

  // const updateMessageContent = (messageId: number|undefined, newContent: string|undefined) => {
  //   if(messageId&&newContent)
  //     setListOfMessages(prevMessages =>
  //       prevMessages.map(message =>
  //         message.messageId === messageId ? { ...message, content: newContent } : message
  //       )
  //     );
  // };

  // const setMessages = useCallback((mes:MessageProps) => {
  //   if(mes.messageId){
  //     setListOfMessages([mes, ...listOfMessages]);
  //   }
  //   else{
  //     const m = msgs.find(m => m.messageId==messageID);
  //     updateMessageContent(m?.messageId, m?.content)
  //   }
  // }, [listOfMessages, messageID]);

  // useEffect(()=> {
  //   msgs = listOfMessages;
  // }, [listOfMessages]);
  
  // const setDeletingHandler = () => {
  //   setDeleting(!deleting);
  // }

  // // якогось хуя useRef не працює якщо useState з boolean
  // const onDeletePress = () => {
  //   const message = listOfMessages.find(m => m.messageId === messageID)!;
  //   if(listOfPinnedMessages.findIndex(m => m.messageId === message.messageId) >= 0) {
  //     pinMessageHandler(message);
  //   }
  //   deletedMessagesId.push(message.messageId!);
  //   setListOfMessages([...listOfMessages.filter(m => m.messageId !== messageID)]);
  //   setDeleting(!deleting);
  // }

  // const onPinnedMessageScreenDeletePress = (message: MessageProps) => {
  //   setListOfMessages([...listOfMessages.filter(m => m?.messageId!=messageID)]);
  // }

  // const handleMessageMenuPress = useCallback(() => {
  //   setMessageMenuVisible(false);
  // }, []);

  // const setCopyHandler = () => {
  //   setCopy(!copy);
  // }
  
  // const setSelectingHandler = () => {
  //   setSelecting(!selecting);
  //   coord.selectionCallback!();
  // }

  
  // const pinMessageHandler = (message: MessageProps) => {
  //   if(listOfPinnedMessages.find(m => message.messageId === m.messageId)) {
  //     const pinnedMsgs = listOfPinnedMessages.filter(m => m.messageId !== message.messageId);

  //     if(pinnedMsgs.length>0)
  //       setPinnedMessage(pinnedMsgs[pinnedMsgs.length-1]);
  //     else 
  //       setPinnedMessage({} as MessageProps);

  //     setListOfPinnedMessages([...pinnedMsgs]);
  //   } else {
  //     setListOfPinnedMessages([...listOfPinnedMessages, message])
  //   }
  // }
  
  // const setPinnedMessageHandler = (id: number) => {
  //   if(pinnedMessage.messageId !== id) {
  //     setPinnedMessage(listOfMessages.find(m => m.messageId === id)!)
  //     return id;
  //   }
  // }
  // unpinAllMessagesHandler = () => {
  //   setListOfPinnedMessages([]);
  //   setPinnedMessage({} as MessageProps);
  // }

  replyHandler = () => {}
  pressEditButton = () => {}
  setDeletingHandler = () => {}
  setCopyHandler = () => {}
  setSelectingHandler = () => {}
  pinMessageHandler = () => {}
  handleMessageMenuPress = () => {}
  unpinAllMessagesHandler = () => {}
  onPinnedMessageScreenDeletePress = () => {}
  
  render() {
    return (
      <View>
        <BackGroundGradientView>
          <Header 
            navigation={this.props.navigation} 
            chatType={this.props.route.params.chat as GroupModel.default}
            picture={(this.props.route.params.chat as GroupModel.default).linkToPhoto}
            author={user as User}
            activityTime={'Online recently'} // Last activity from user
            pinnedMessage={this.state.pinnedMessage != undefined ? this.state.pinnedMessage : {} as MessageProps}
            listOfPinnedMessages={this.state.listOfPinnedMessages}
            listOfMessages={this.state.listOfMessages}
            selecting={this.state.selecting}
            cancelSelection={this.setSelectingHandler}
            messageID={this.state.messageID}
            unpinAllMessagesHandler={this.unpinAllMessagesHandler}
            userMessageLastWatched={userMessageLastWatched!}
            onCopyPress={this.setCopyHandler}
            onUnpinPress={this.pinMessageHandler}
            onDeletePress={this.onPinnedMessageScreenDeletePress}
          />
        </BackGroundGradientView>
      </View>
    )
  }
}

export default Group