import { View, Text, Animated } from 'react-native';
import React from 'react';
import DialogueFooterCopyIcon from '../../SVG/DialogueFooterCopyIcon';
import LineSeparator from '../General/LineSeparator';
import { functionalStyles, styles } from './Styles/CopyMessagePopUp';

interface CopyMessagePopUpProps { 
  show: boolean, 
  copyPopUpPositionY: any 
}

const CopyMessagePopUp = ({ show, copyPopUpPositionY }: CopyMessagePopUpProps ) => {
  return (
    show &&
    (<Animated.View style={functionalStyles.animatedContainer(copyPopUpPositionY)}>
      <View style={styles.container}>
        <DialogueFooterCopyIcon />
        <LineSeparator color='black' height={'140%'} marginHorizontal={5} />
        <Text>Message Copied</Text>
      </View>
    </Animated.View>)
  );
}

export default CopyMessagePopUp;