import React from 'react';
import { View, StyleProp, ViewStyle, Text, Image } from 'react-native'; // Додано імпорт Image
import { headerstyles } from '../../Styles/HeaderStyle';
import ArrowDown from './ArrowDown';
import { mySelfUser } from '../../1HelpFullFolder/Initialization';
import ModeActivity from '../Status Content/ModeActivity';

interface ModeActivityProps {
  style?: StyleProp<ViewStyle>;
}

const ModeOfEmployment: React.FC<ModeActivityProps> = ({ style }) => {
    const modeOfEmployment:string="Mode Of Employment";
  return (
    <View style={headerstyles.middleheader}>
      <View style={headerstyles.blockactivity}>
        <Image source={{uri:mySelfUser.urlForPicture}} style={headerstyles.avatar}></Image>
        <ModeActivity style={headerstyles.modeactivity} status={mySelfUser.status}/>
      </View>
      <View style={headerstyles.ViewOfModeOfEmployment}>
        <Text style={headerstyles.textOfModeOfEmployment}>{modeOfEmployment}</Text>
        <ArrowDown style={headerstyles.arrowModeOfEmployment}/>
      </View>
    </View>
  );
};

export default ModeOfEmployment;