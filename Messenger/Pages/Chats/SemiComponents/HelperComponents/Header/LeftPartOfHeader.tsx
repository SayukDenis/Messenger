import { Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import * as SVG from '../../SVG';
import { screenWidth } from '../../../../ChatList/Constants/ConstantsForChatlist';
import { LeftPartOfHeaderProps } from './Interfaces/ILeftPartOfHeader';

class LeftPartOfHeader extends Component<LeftPartOfHeaderProps> {
  
  shouldComponentUpdate(nextProps: Readonly<LeftPartOfHeaderProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    if(this.props.selecting !== nextProps.selecting) {
      return true;
    }

    return false;
  }

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
          <SVG.HeaderBackButton />
        </TouchableOpacity>
    );
  }
}

export default LeftPartOfHeader;