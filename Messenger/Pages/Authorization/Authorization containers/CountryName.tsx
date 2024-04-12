import React from 'react';
import { View, Text } from 'react-native';
import { screenWidth } from '../../ChatList/Constants/ConstantsForChatlist';

interface CountryNameProps {
  label:string
}


const CountryName: React.FC<CountryNameProps> = ({ label}) => {
  return (
    <View style={{ alignSelf: 'center', marginLeft: 10 }}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          color: 'white',
          fontSize: 20.5,
          width: screenWidth * 0.65,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default CountryName;
