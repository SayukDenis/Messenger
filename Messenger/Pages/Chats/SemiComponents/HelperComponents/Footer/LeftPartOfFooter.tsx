
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import FooterVideoButton from '../../SVG/FooterVideoButton';
import FooterMicrophoneButton from '../../SVG/FooterMicrophoneButton';
import { styles } from './Styles/LeftPartOfFooter';
import DeleteButton from '../../SVG/DeleteButton';
import { height } from '../../ChatConstants';
import { LeftPartOfFooterProps, LeftPartOfFooterState } from './Interfaces/ILeftPartOfFooter';

class LeftPartOfFooter extends Component<LeftPartOfFooterProps> {
  state: LeftPartOfFooterState = {
    video: false,
  }

  shouldComponentUpdate(nextProps: Readonly<LeftPartOfFooterProps>, nextState: Readonly<LeftPartOfFooterState>, nextContext: any): boolean {
    if(this.state.video !== nextState.video) {
      return true;
    } else if(this.props != nextProps) {
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
        {video?<FooterVideoButton/>:<FooterMicrophoneButton/>} 
      </TouchableOpacity> :
      <TouchableOpacity
        activeOpacity={1}
        onPress={deleteSelectedMessagesHandler}
      >
        <DeleteButton size={height*0.035} />
      </TouchableOpacity>
    );
  }
}

export default LeftPartOfFooter;