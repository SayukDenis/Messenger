import { View, Text, Animated } from 'react-native';
import React from 'react';
import DialogueFooterCopyIcon from '../../../../SemiComponents/SVG/DialogueFooterCopyIcon';
import { screenHeight, screenWidth } from '../../../../../ChatList/Constants/ConstantsForChatlist';

interface CopyMessagePopUpProps { 
  show: boolean, 
  copyPopUpPositionY: any 
}

const CopyMessagePopUp = ({ show, copyPopUpPositionY }: CopyMessagePopUpProps ) => {
  return (
    show &&
    (<Animated.View style={{ position: 'absolute', bottom: screenHeight*0.03, width: screenWidth*0.9, alignSelf: 'center', transform: [{ translateY: copyPopUpPositionY }] }}>
      <View style={{ backgroundColor: '#fff', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center', borderRadius: 9999,  }}>
        <DialogueFooterCopyIcon />
        <View style={{ width: 1, height: '140%', backgroundColor: 'black', marginHorizontal: 5 }} />
        <Text>Message Copied</Text>
      </View>
    </Animated.View>)
  );
}

export default CopyMessagePopUp;