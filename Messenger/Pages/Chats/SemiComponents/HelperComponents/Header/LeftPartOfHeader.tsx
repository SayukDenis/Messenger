import { Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import HeaderBackButton from '../../SVG/HeaderBackButton';
import { screenWidth } from '../../../../ChatList/Constants/ConstantsForChatlist';

interface LeftPartOfHeaderProps { 
  selecting: boolean, 
  navigation: any 
}

class LeftPartOfHeader extends Component<LeftPartOfHeaderProps> {
  render(): React.ReactNode {
    const { selecting, navigation } = this.props;

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
}

export default LeftPartOfHeader;