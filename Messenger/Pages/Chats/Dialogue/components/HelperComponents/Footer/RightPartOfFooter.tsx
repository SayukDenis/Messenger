import { TouchableOpacity } from 'react-native';
import React from 'react';
import FooterGallaryButton from '../../../SVG/FooterGallaryButton';
import { screenHeight } from '../../../../../ChatList/Constants/ConstantsForChatlist';
import FooterSendMessageButton from '../../../SVG/FooterSendMessageButton';

interface RightPartOfFooter { 
  sendMessage: boolean;
  sendMessageHandler: () => void;
  pressGalleryButtonHandler: () => void;
}

const RightPartOfFooter = ({ sendMessage, sendMessageHandler, pressGalleryButtonHandler }: RightPartOfFooter) => {
  return (
    <TouchableOpacity 
      activeOpacity={1}
      style={{ backgroundColor: !sendMessage?'rgba(255, 255, 255, 0.8)':'transparent', alignItems: 'center', justifyContent: 'center', borderRadius: 5, width: screenHeight * 0.045, height: screenHeight * 0.045 }}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      onPress={sendMessage?sendMessageHandler:pressGalleryButtonHandler}
    >
      {sendMessage?<FooterSendMessageButton/>:<FooterGallaryButton />}
    </TouchableOpacity> 
  );
}

export default RightPartOfFooter;