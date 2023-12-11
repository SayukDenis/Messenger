import React from 'react';
import { View, StyleProp, ViewStyle, Text, Image } from 'react-native'; // Додано імпорт Image
import { headerstyles } from '../../Styles/HeaderStyle';
import ArrowDown from './ArrowDown';
import ModeActivity from '../Status Content/ModeActivity';
import { useSelector } from 'react-redux';
import SelfProfile from '../../../../dao/Models/SelfProfile';

interface ModeActivityProps {
  style?: StyleProp<ViewStyle>;
}

const ModeOfEmployment: React.FC<ModeActivityProps> = ({ style }) => {

    const selfProfile:SelfProfile=useSelector((state:any)=>{
      const self:SelfProfile=state.selfProfileUser;
      return self
   })
   const currentTab:number=0;
  return (
    <View style={headerstyles.middleheader}>
      <View style={headerstyles.blockactivity}>
        <Image source={{uri:selfProfile.linkToPhoto}} style={headerstyles.avatar}></Image>
        <ModeActivity style={headerstyles.modeactivity} status={1}/>
      </View>
      <View style={headerstyles.ViewOfModeOfEmployment}>
        <Text style={headerstyles.textOfModeOfEmployment}>{selfProfile.tabs[currentTab].title}</Text>
        <ArrowDown style={headerstyles.arrowModeOfEmployment}/>
      </View>
    </View>
  );
};

export default ModeOfEmployment;