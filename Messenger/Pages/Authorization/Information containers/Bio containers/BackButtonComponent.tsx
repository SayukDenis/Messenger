import React from 'react';
import { TouchableOpacity } from 'react-native';
import BackButton from '../../../SemiComponents/BackButton';
import { screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';

interface BackButtonComponentProps {
  pressOnBackButton: () => void;
}

const BackButtonComponent: React.FC<BackButtonComponentProps> = ({ pressOnBackButton }) => (
  <TouchableOpacity onPress={pressOnBackButton} style={{
    width: screenWidth * 0.2, // backgroundColor: "red"
  }}>
    <BackButton />
  </TouchableOpacity>
);

export default BackButtonComponent;
