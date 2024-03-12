import { View } from 'react-native';
import React, { Component } from 'react';
import HeaderContainer from '../../SemiComponents/HeaderContainer';
import { connect } from 'react-redux';
import { DialogueHeaderProps, DialogueHeaderState } from './Interfaces/IDialogueHeader';
import RightPartOfHeader from './HelperComponents/Header/RightPartOfHeader';
import LeftPartOfHeader from './HelperComponents/Header/LeftPartOfHeader';
import CenterPartOfHeader from './HelperComponents/Header/CenterPartOfHeader';
import PinnedMessageView from './HelperComponents/Header/PinnedMessageView';
import styles from './Styles/Header';

class Header extends Component<DialogueHeaderProps> {
  state: DialogueHeaderState = {

  }

  componentDidUpdate(prevProps: Readonly<DialogueHeaderProps>, prevState: Readonly<DialogueHeaderState>, snapshot?: any): void {
    if(this.props.selecting !== prevProps.selecting && this.props.selecting && this.props.counterOfSelectedMessages !== prevProps.counterOfSelectedMessages && this.props.counterOfSelectedMessages <= 0) this.props.cancelSelection();
  }

  displayName = this.props.propsForPinnedMessageScreen.users[0]?.name;
  countOfPinnedMessages = this.props.propsForPinnedMessageScreen.listOfPinnedMessages.length;
  currentNumOfPinnedMessage = this.props.propsForPinnedMessageScreen.listOfPinnedMessages.sort((m1, m2) => m1.messageId! - m2.messageId!).findIndex(m => m.messageId === this.props.pinnedMessage?.messageId)+1;

  render(): React.ReactNode {
    const { 
      selecting, 
      propsForPinnedMessageScreen, 
      picture, 
      chatType, 
      activityTime, 
      counterOfSelectedMessages, 
      cancelSelection,
      pinnedMessage,
      dispatch
    } = this.props;

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
              displayName={this.displayName} 
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
          current={this.currentNumOfPinnedMessage} 
          total={this.countOfPinnedMessages} 
          propsForPinnedMessageScreen={propsForPinnedMessageScreen}
          dispatch={dispatch}
        />
      </View>
    );
  }
}

const mapStateToProps = (state:any) => ({
  counterOfSelectedMessages: state.ChatReducer.counterForSelectedMessages.counterOfSelectedMessages,
});

export default connect(mapStateToProps)(Header);