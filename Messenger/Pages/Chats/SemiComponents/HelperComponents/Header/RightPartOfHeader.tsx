import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBranchButton from '../../SVG/HeaderBranchButton';
import { RightPartOfHeaderProps } from './Interfaces/IRightPartOfHeader';

class RightPartOfHeader extends Component<RightPartOfHeaderProps> {
  shouldComponentUpdate(nextProps: Readonly<RightPartOfHeaderProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    if(this.props.selecting !== nextProps.selecting) {
      return true;
    }

    return false;
  }

  render(): React.ReactNode {
    const { selecting, cancelSelection } = this.props;
      return ( selecting ?
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
}

export default RightPartOfHeader;