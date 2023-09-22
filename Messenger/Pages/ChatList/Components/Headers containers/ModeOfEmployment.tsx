import React from 'react';
import { View, StyleProp, ViewStyle,Text } from 'react-native';
import { headerstyles } from '../../Styles/HeaderStyle';
import ArrowDown from './ArrowDown';

interface ModeActivityProps {
  style?: StyleProp<ViewStyle>; // Оголошуємо пропс для стилю
}

const ModeOfEmployment: React.FC<ModeActivityProps> = ({ style }) => {
    const modeOfEmployment:string="Mode Of Employment";
  return (
    <View style={headerstyles.ViewOfModeOfEmployment}>
        <Text style={headerstyles.textOfModeOfEmployment}>{modeOfEmployment}</Text>
        <ArrowDown style={headerstyles.arrowModeOfEmployment}/>
    </View>
  );
};

export default ModeOfEmployment;
