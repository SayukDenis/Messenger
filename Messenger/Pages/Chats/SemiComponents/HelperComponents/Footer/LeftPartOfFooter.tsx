
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import FooterVideoButton from '../../SVG/FooterVideoButton';
import FooterMicrophoneButton from '../../SVG/FooterMicrophoneButton';
import { styles } from './Styles/LeftPartOfFooter';

const LeftPartOfFooter = () => {
  const [video, setVideo] = useState(true);

  return (
    <TouchableOpacity 
      activeOpacity={1}
      onPress={() => setVideo(!video)}
      style={styles.container}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
    >
      {video?<FooterVideoButton/>:<FooterMicrophoneButton/>} 
    </TouchableOpacity>
  );
}

export default LeftPartOfFooter;