import { TouchableOpacity } from 'react-native';
import React from 'react';
import FooterGallaryButton from '../../../SVG/FooterGallaryButton';
import { screenHeight } from '../../../../../ChatList/Constants/ConstantsForChatlist';

const RightPartOfFooter = () => {
  return (
    <TouchableOpacity 
      activeOpacity={1}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', alignItems: 'center', justifyContent: 'center', borderRadius: 5, width: screenHeight * 0.045, height: screenHeight * 0.045 }}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
    >
      <FooterGallaryButton />
    </TouchableOpacity> 
  );
}

export default RightPartOfFooter;