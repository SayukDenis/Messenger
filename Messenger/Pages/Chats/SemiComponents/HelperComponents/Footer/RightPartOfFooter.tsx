import { TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { functionalStyles } from './Styles/RightPartOfFooter';
import * as SVG from '../../SVG'
import { RightPartOfFooterProps } from './Interfaces/IRightPartOfFooter';

class RightPartOfFooter extends Component<RightPartOfFooterProps> {

  shouldComponentUpdate(nextProps: Readonly<RightPartOfFooterProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    if(this.props.selecting !== nextProps.selecting) {
      return true;
    } else if(this.props.sendMessage !== nextProps.sendMessage) {
      return true;
    }

    return false;
  }

  render(): React.ReactNode {
    const { selecting, sendMessage, sendMessageHandler, pressGalleryButtonHandler } = this.props;

    return (!selecting ?
      <TouchableOpacity 
        activeOpacity={1}
        style={functionalStyles.container(sendMessage)}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        onPress={sendMessage?sendMessageHandler:pressGalleryButtonHandler}
      >
        {sendMessage ? <SVG.FooterSendMessageButton/> : <SVG.FooterGallaryButton />}
      </TouchableOpacity>  : 
      <TouchableOpacity
        activeOpacity={1}
        onPress={()=>{}}
      >
        <SVG.FooterForwardButton />
      </TouchableOpacity>
    );
  }
}

export default RightPartOfFooter;