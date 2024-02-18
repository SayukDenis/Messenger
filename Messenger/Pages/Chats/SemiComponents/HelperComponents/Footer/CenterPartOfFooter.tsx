import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './Styles/CenterPartOfFooter';
import FooterExportButton from '../../SVG/FooterExportButton';

interface CenterPartOfFooterProps { 
  textInput: React.RefObject<TextInput>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  sendMessageHandler: () => void;
  selecting: boolean;
}

const CenterPartOfFooter = ({ textInput, text, setText, sendMessageHandler, selecting }:CenterPartOfFooterProps) => {
  return (!selecting?
    <TextInput 
      ref={textInput}
      value={text} 
      onChangeText={setText} 
      placeholderTextColor={'rgb(137, 130, 130)'} 
      style={styles.messageInput} 
      placeholder='Льоша блядюга)' 
      onSubmitEditing={sendMessageHandler} 
    /> :
    <TouchableOpacity
      activeOpacity={1}
      onPress={()=>{}}
    >
      <FooterExportButton />
    </TouchableOpacity>
  );
}

export default CenterPartOfFooter;