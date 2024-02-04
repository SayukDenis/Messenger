import { View } from 'react-native';
import React from 'react';
import HeaderContainer from '../../SemiComponents/HeaderContainer';
import { connect } from 'react-redux';
import { DialogueHeaderProps } from './Interfaces/IDialogueHeader';
import RightPartOfHeader from './HelperComponents/Header/RightPartOfHeader';
import LeftPartOfHeader from './HelperComponents/Header/LeftPartOfHeader';
import CenterPartOfHeader from './HelperComponents/Header/CenterPartOfHeader';
import PinnedMessageView from './HelperComponents/Header/PinnedMessageView';
import styles from './Styles/Header';

const DialogueHeader = ({ counterOfSelectedMessages, navigation, picture, users, author, activityTime, pinnedMessage, selecting, cancelSelection, listOfPinnedMessages, listOfMessages, messageID, unpinAllMessagesHandler, userMessageLastWatched, onCopyPress, onUnpinPress, onDeletePress, chatType }:DialogueHeaderProps) => {
  if(selecting && counterOfSelectedMessages <= 0) cancelSelection();

  const displayName = users[0]?.name;
  const countOfPinnedMessages = listOfPinnedMessages.length;
  const currentNumOfPinnedMessage = listOfPinnedMessages.sort((m1, m2) => m1.messageId! - m2.messageId!).findIndex(m => m.messageId === pinnedMessage?.messageId)+1;

  return(
    <View style={{ zIndex: 10 }}>
      <HeaderContainer>
        <View style={styles.header}>
          <LeftPartOfHeader 
            counterOfSelectedMessages={counterOfSelectedMessages} 
            selecting={selecting} 
            navigation={navigation} 
          />
          <CenterPartOfHeader 
            picture={picture} 
            dialogue={chatType}
            displayName={displayName} 
            activityTime={activityTime} 
            navigation={navigation}
          />
          <RightPartOfHeader 
            selecting={selecting} 
            cancelSelection={cancelSelection} 
          />
        </View>
      </HeaderContainer>
      <PinnedMessageView 
        pinnedMessage={pinnedMessage} 
        current={currentNumOfPinnedMessage} 
        total={countOfPinnedMessages} 
        navigation={navigation} 
        listOfPinnedMessages={listOfPinnedMessages}
        listOfMessages={listOfMessages}
        author={author}
        messageID={messageID}
        unpinAllMessagesHandler={unpinAllMessagesHandler}
        userMessageLastWatched={userMessageLastWatched}
        onCopyPress={onCopyPress}
        onUnpinPress={onUnpinPress}
        onDeletePress={onDeletePress}
      />
    </View>
  );
}

const mapStateToProps = (state:any) => ({
  counterOfSelectedMessages: state.ChatReducer.counterForSelectedMessages.counterOfSelectedMessages,
});

export default connect(mapStateToProps)(DialogueHeader);