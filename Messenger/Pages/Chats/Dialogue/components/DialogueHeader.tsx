import { View } from 'react-native';
import React from 'react';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import { connect } from 'react-redux';
import { DialogueHeaderProps } from './interfaces/IDialogueHeader';
import RightPartOfHeader from './HelperComponents/Header/RightPartOfHeader';
import LeftPartOfHeader from './HelperComponents/Header/LeftPartOfHeader';
import CenterPartOfHeader from './HelperComponents/Header/CenterPartOfHeader';
import PinnedMessageView from './HelperComponents/Header/PinnedMessageView';

const DialogueHeader = ({ counterOfSelectedMessages, navigation, picture, displayName, activityTime, pinnedMessage, selecting, cancelSelection, currentNumOfPinnedMessage, countOfPinnedMessages }:DialogueHeaderProps) => {
  if(selecting && counterOfSelectedMessages <= 0) cancelSelection();
  return(
    <View style={{ backgroundColor: 'green', zIndex: 10 }}>
      <HeaderContainer>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 20, paddingVertical: 10 }}>
            <LeftPartOfHeader counterOfSelectedMessages={counterOfSelectedMessages} selecting={selecting} navigation={navigation} />
            <CenterPartOfHeader picture={picture} displayName={displayName} activityTime={activityTime} />
            <RightPartOfHeader selecting={selecting} cancelSelection={cancelSelection} />
          </View>
        </View>
      </HeaderContainer>
      <PinnedMessageView pinnedMessage={pinnedMessage} current={currentNumOfPinnedMessage} total={countOfPinnedMessages} />
    </View>
  );
}

const mapStateToProps = (state:any) => ({
  counterOfSelectedMessages: state.ChatReducer.counterForSelectedMessages.counterOfSelectedMessages,
});

export default connect(mapStateToProps)(DialogueHeader);