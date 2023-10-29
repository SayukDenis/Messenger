import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { listOfChatsStyle } from '../../Styles/ListOfChatsStyle';

const ViewedMessageIcon: React.FC<{ stylePosition?: any }> = ({ stylePosition }) => {
  return (
    <Svg  viewBox="0 0 9 8" fill="none" style={[stylePosition,listOfChatsStyle.checkMarkStyle]}>
      <Line
        y1={-0.5}
        x2={4.82739}
        y2={-0.5}
        transform="matrix(0.680241 0.733549 -0.677655 0.734822 0.213867 3.42871)"
        stroke="#339EDA"
      />
      <Line
        y1={-0.5}
        x2={8.0774}
        y2={-0.5}
        transform="matrix(0.67985 -0.732792 0.678044 0.73558 3.50879 6.97266)"
        stroke="#339EDA"
      />
    </Svg>
  );
};

export default ViewedMessageIcon;
