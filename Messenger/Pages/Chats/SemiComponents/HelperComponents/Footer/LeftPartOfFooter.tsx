
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import FooterVideoButton from '../../SVG/FooterVideoButton';
import FooterMicrophoneButton from '../../SVG/FooterMicrophoneButton';
import { styles } from './Styles/LeftPartOfFooter';
import DeleteButton from '../../SVG/DeleteButton';
import { height } from '../../ChatConstants';

const LeftPartOfFooter = ({ selecting }:{ selecting: boolean }) => {
  const [video, setVideo] = useState(true);

  return (!selecting ?
    <TouchableOpacity 
      activeOpacity={1}
      onPress={() => setVideo(!video)}
      style={styles.container}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
    >
      {video?<FooterVideoButton/>:<FooterMicrophoneButton/>} 
    </TouchableOpacity> :
    <TouchableOpacity
      activeOpacity={1}
      onPress={()=>{}}
    >
      <DeleteButton size={height*0.035} />
    </TouchableOpacity>
  );
}

export default LeftPartOfFooter;