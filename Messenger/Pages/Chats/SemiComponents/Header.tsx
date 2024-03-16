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

const DialogueHeader = ({ counterOfSelectedMessages, picture, activityTime, pinnedMessage, selecting, cancelSelection, chatType, propsForPinnedMessageScreen, deleteAllButtonHandler }:DialogueHeaderProps) => {
  if(selecting && counterOfSelectedMessages <= 0) cancelSelection();

  const displayName = propsForPinnedMessageScreen.users[0]?.name;
  const countOfPinnedMessages = propsForPinnedMessageScreen.listOfPinnedMessages.length;
  const currentNumOfPinnedMessage = propsForPinnedMessageScreen.listOfPinnedMessages.sort((m1, m2) => m1.messageId! - m2.messageId!).findIndex(m => m.messageId === pinnedMessage?.messageId)+1;

  return(
    <View style={{ zIndex: 10 }}>
      <HeaderContainer>
        <View style={styles.header}>
          <LeftPartOfHeader 
            selecting={selecting} 
            navigation={propsForPinnedMessageScreen.navigation} 
          />
          <CenterPartOfHeader 
            picture={picture} 
            dialogue={chatType}
            displayName={displayName} 
            activityTime={activityTime} 
            navigation={propsForPinnedMessageScreen.navigation}
            selecting={selecting} 
            counterOfSelectedMessages={counterOfSelectedMessages} 
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
        propsForPinnedMessageScreen={propsForPinnedMessageScreen}
      />
    </View>
  );
}

const mapStateToProps = (state:any) => ({
  counterOfSelectedMessages: state.ChatReducer.counterForSelectedMessages.counterOfSelectedMessages,
});

export default connect(mapStateToProps)(DialogueHeader);