import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Line, Path } from 'react-native-svg';
import { listOfChatsStyle } from '../../Styles/ListOfChatsStyle';

const ViewedMessageIcon: React.FC<{ stylePosition?: any }> = ({ stylePosition }) => {
  return (
    <Svg width={14} height={14} viewBox="0 0 11 8" fill="none" style={listOfChatsStyle.positionOfFirstCheckMarkStyle}>
      <Path
        d="M0.355713 3.06128L3.6395 6.6024"
        stroke="white"
        strokeOpacity={0.95}
      />
      <Path
        d="M2.97266 6.60522L8.46407 0.686168"
        stroke="white"
        strokeOpacity={0.95}
      />
    </Svg>);
};

export default ViewedMessageIcon;
