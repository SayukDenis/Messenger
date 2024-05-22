
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './Styles/LeftPartOfFooter';
import * as SVG from '../../SVG';
import { ChatConstants } from '../../ChatConstants';
import { LeftPartOfFooterProps, LeftPartOfFooterState } from './Interfaces/ILeftPartOfFooter';

const { height } = ChatConstants.getInstance();

class LeftPartOfFooter extends Component<LeftPartOfFooterProps> {
  state: LeftPartOfFooterState = {
    video: false,
  }

  shouldComponentUpdate(nextProps: Readonly<LeftPartOfFooterProps>, nextState: Readonly<LeftPartOfFooterState>, nextContext: any): boolean {
    if(this.state.video !== nextState.video) {
      return true;
    } else if(this.props.selecting !== nextProps.selecting) {
      return true;
    }

    return false;
  }
  
  render(): React.ReactNode {
    const { selecting, deleteSelectedMessagesHandler } = this.props;
    const { video } = this.state;

    return (!selecting ?
      <TouchableOpacity 
        activeOpacity={1}
        onPress={() => this.setState({ video: !video })}
        style={styles.container}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        {video ? <SVG.FooterVideoButton/> : <SVG.FooterMicrophoneButton/>} 
      </TouchableOpacity> :
      <TouchableOpacity
        activeOpacity={1}
        onPress={deleteSelectedMessagesHandler}
      >
        <SVG.DeleteButton size={height*0.035} />
      </TouchableOpacity>
    );
  }
}

export default LeftPartOfFooter;