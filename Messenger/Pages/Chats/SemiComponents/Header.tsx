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
  shouldComponentUpdate(nextProps: Readonly<DialogueHeaderProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    if(this.props.selecting !== nextProps.selecting) {
      return true;
    } else if(this.props.counterOfSelectedMessages !== nextProps.counterOfSelectedMessages) {
      return true;
    } else if(this.props.currentNumOfPinnedMessage !== nextProps.currentNumOfPinnedMessage) {
      return true;
    } else if(this.props.pinnedMessage.messageId !== nextProps.pinnedMessage.messageId) {
      return true;
    }

    return false;
  }

  componentDidUpdate(prevProps: Readonly<DialogueHeaderProps>, prevState: Readonly<DialogueHeaderState>, snapshot?: any): void {
    if(this.props.selecting && this.props.counterOfSelectedMessages !== prevProps.counterOfSelectedMessages && this.props.counterOfSelectedMessages <= 0) this.props.cancelSelection();
  }

  render(): React.ReactNode {
    const { 
      selecting, 
      propsForPinnedMessageScreen, 
      picture, 
      displayName,
      chatType, 
      activityTime, 
      counterOfSelectedMessages,
      countOfPinnedMessages, 
      currentNumOfPinnedMessage,
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