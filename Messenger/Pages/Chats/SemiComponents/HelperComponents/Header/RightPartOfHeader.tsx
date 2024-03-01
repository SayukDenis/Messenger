import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBranchButton from '../../SVG/HeaderBranchButton';

interface RightPartOfHeader { 
  selecting: boolean, 
  cancelSelection: () => void 
}

const RightPartOfHeader = ({ selecting, cancelSelection }:RightPartOfHeader ) => {
  return ( selecting?
    <TouchableOpacity
      activeOpacity={1}
      onPress={cancelSelection}
      style={{ padding: 10 }}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10}}
    >
      <Text>Cancel</Text>
    </TouchableOpacity> :
    <HeaderBranchButton />
  );
}

export default RightPartOfHeader;