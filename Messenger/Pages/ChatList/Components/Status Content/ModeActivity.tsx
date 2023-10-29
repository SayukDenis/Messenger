import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import OnlineStatus from './OnlineStatus';
import StatusEnum from './StatusEnum';
import OfflineOrIgnoramusStatus from './OffLineOrIgnoramusStatus';
interface ModeActivityProps {
  style?: StyleProp<ViewStyle>;
  status:StatusEnum;
}

const ModeActivity: React.FC<ModeActivityProps> = ({ style,status }) => {
  switch(status){
    case 0:
      return null;
    case 1:
      return <OnlineStatus style={style}/>
    case 2:
      return <OfflineOrIgnoramusStatus style={style}/>
  }
  return (
    null
  );
};

export default ModeActivity;