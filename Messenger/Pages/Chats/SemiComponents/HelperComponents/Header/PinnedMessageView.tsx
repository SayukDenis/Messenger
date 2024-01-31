import { View, Text } from 'react-native';
import React from 'react';
import { screenHeight, screenWidth } from '../../../../ChatList/Constants/ConstantsForChatlist';
import { LinearGradient } from 'expo-linear-gradient';
import { DEFAULT_CHARS_PER_LINE } from '../../ChatConstants';
import DialogueMessagesPinnedMessageIcon from '../../SVG/DialogueMessagesPinnedMessageIcon';
import { MessageProps } from '../../Interfaces/GeneralInterfaces/IMessage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { setAnimationOfBackgroundForScrolledMessage, setScrollStateForPinnedMessage } from '../../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import User from '../../../../../dao/Models/User';
import ILastWatchedMessage from '../../../../../dao/Models/Chats/ILastWatchedMessage';

interface PinnedMessageViewProps { 
  pinnedMessage: MessageProps;
  current: number;
  total: number;
  navigation: any;
  listOfPinnedMessages: MessageProps[];
  listOfMessages: MessageProps[];
  author: User;
  messageID: number;
  unpinAllMessagesHandler: () => void;
  userMessageLastWatched: ILastWatchedMessage;
  onCopyPress: () => void;
  onUnpinPress: (message: MessageProps) => void;
  onDeletePress: (message: MessageProps) => void;
}

const PinnedMessageView = ({ pinnedMessage, current, total, navigation, listOfPinnedMessages, listOfMessages, author, messageID, unpinAllMessagesHandler, userMessageLastWatched, onCopyPress, onUnpinPress, onDeletePress, }:PinnedMessageViewProps ) => {
  if(!pinnedMessage?.messageId) return null;

  const dispatch = useDispatch();

  const scrollToPinedMessage = () => {
    dispatch(setScrollStateForPinnedMessage(true, pinnedMessage?.messageId!));
    dispatch(setAnimationOfBackgroundForScrolledMessage(pinnedMessage?.messageId!));
  }

  return (
    <View style={{ position: 'absolute', bottom: -screenHeight*0.185, backgroundColor: '#fff', overflow: 'hidden', borderRadius: 9999, alignSelf: 'center', alignItems: 'center' }}>
        <LinearGradient
            colors={["#cf9b95", "#c98bb8", "#c37adb"]}
            locations={[0.25, 0.5, 0.75]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              opacity: 0.7,
              top: 0,
              position: "absolute",
              left: 0,
              right: 0,
              height: screenHeight,
              width: screenWidth,
            }}
          />
          <TouchableOpacity 
            activeOpacity={1}
            onPress={scrollToPinedMessage}
            style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth*0.9, paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center' }}
          >
            <Text>Pinned message: {pinnedMessage?.content?.length>DEFAULT_CHARS_PER_LINE?pinnedMessage?.content.slice(0,DEFAULT_CHARS_PER_LINE*0.8).trim()+'...':pinnedMessage?.content}</Text>
            <View style={{ flexDirection: 'row' }}>
              { total>1&&
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 12 }}>
                  <Text>{current}</Text>
                  <View style={{ width: 1.4, height: '100%', backgroundColor: 'black', marginHorizontal: 5 }} />
                  <Text>{total}</Text>
                </View>
              }
              <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={() => navigation.navigate('PinnedMessages', {  
                  navigation, 
                  listOfPinnedMessages, 
                  listOfMessages, 
                  author, 
                  messageID,
                  unpinAllMessagesHandler,
                  userMessageLastWatched,
                  onCopyPress,
                  onUnpinPress,
                  onDeletePress,
                })}
              >
                <DialogueMessagesPinnedMessageIcon />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
      </View>
  )
}

export default PinnedMessageView;