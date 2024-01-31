
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import FooterVideoButton from '../../../../SemiComponents/SVG/FooterVideoButton';
import FooterMicrophoneButton from '../../../../SemiComponents/SVG/FooterMicrophoneButton';
import { screenHeight } from '../../../../../ChatList/Constants/ConstantsForChatlist';

const LeftPartOfFooter = () => {
  const [video, setVideo] = useState(true);

  return (
    <TouchableOpacity 
      activeOpacity={1}
      onPress={() => setVideo(!video)}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', alignItems: 'center', justifyContent: 'center', borderRadius: 9999, width: screenHeight * 0.05, height: screenHeight * 0.05 }}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
    >
      {video?<FooterVideoButton/>:<FooterMicrophoneButton/>} 
    </TouchableOpacity>
  );
}

export default LeftPartOfFooter;