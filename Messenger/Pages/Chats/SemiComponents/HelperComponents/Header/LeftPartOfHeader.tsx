import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import HeaderBackButton from '../../SVG/HeaderBackButton';
import { screenWidth } from '../../../../ChatList/Constants/ConstantsForChatlist';

interface LeftPartOfHeaderProps { 
  selecting: boolean, 
  navigation: any 
}

const LeftPartOfHeader = ({ selecting, navigation }:LeftPartOfHeaderProps ) => {
  return (
    selecting?
      <TouchableOpacity
        activeOpacity={1}
        style={{ padding: 10 }}
        onPress={()=>{}}
      >
        <Text>Delete all</Text>
      </TouchableOpacity> :
      <TouchableOpacity 
        style={{ width: screenWidth * 0.08  }} 
        hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
        activeOpacity={1}
        onPress={() => navigation.goBack()}>
        <HeaderBackButton />
      </TouchableOpacity>
  );
}

export default LeftPartOfHeader;