import { TextInput, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { styles } from './Styles/CenterPartOfFooter';
import FooterExportButton from '../../SVG/FooterExportButton';
import { CenterPartOfFooterProps } from './Interfaces/ICenterPartOfFooter';

class CenterPartOfFooter extends Component<CenterPartOfFooterProps> {

  shouldComponentUpdate(nextProps: Readonly<CenterPartOfFooterProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    if(this.props.selecting !== nextProps.selecting) {
      return true;
    } else if(this.props.text !== nextProps.text) {
      return true;
    } else if(this.props.textInput.current !== nextProps.textInput.current) {
      return true;
    }

    return false;
  }

  render(): React.ReactNode {
    const { selecting, textInput, text, setText, sendMessageHandler } = this.props;

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
}

export default CenterPartOfFooter;