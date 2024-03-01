import { TouchableOpacity } from 'react-native';
import React from 'react';
import FooterGallaryButton from '../../SVG/FooterGallaryButton';
import FooterSendMessageButton from '../../SVG/FooterSendMessageButton';
import { functionalStyles } from './Styles/RightPartOfFooter';
import FooterForwardButton from '../../SVG/FooterForwardButton';

interface RightPartOfFooter { 
  sendMessage: boolean;
  sendMessageHandler: () => void;
  pressGalleryButtonHandler: () => void;
  selecting: boolean;
}

const RightPartOfFooter = ({ sendMessage, sendMessageHandler, pressGalleryButtonHandler, selecting }: RightPartOfFooter) => {
  return (!selecting ?
    <TouchableOpacity 
      activeOpacity={1}
      style={functionalStyles.container(sendMessage)}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      onPress={sendMessage?sendMessageHandler:pressGalleryButtonHandler}
    >
      {sendMessage?<FooterSendMessageButton/>:<FooterGallaryButton />}
    </TouchableOpacity>  : 
    <TouchableOpacity
      activeOpacity={1}
      onPress={()=>{}}
    >
      <FooterForwardButton />
    </TouchableOpacity>
  );
}

export default RightPartOfFooter;