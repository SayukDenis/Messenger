import { TextInput, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { styles } from './Styles/CenterPartOfFooter';
import FooterExportButton from '../../SVG/FooterExportButton';
import { CenterPartOfFooterProps } from './Interfaces/ICenterPartOfFooter';
import { FOOTER_INNER_TEXTINPUT_GAP, MAX_FOOTER_HEIGHT } from '../../ChatConstants';

interface CenterPartOfFooterState {
  prevTextInputHeight: number;
}

class CenterPartOfFooter extends Component<CenterPartOfFooterProps> {

  state: CenterPartOfFooterState = {
    prevTextInputHeight: 0,
  }

  shouldComponentUpdate(nextProps: Readonly<CenterPartOfFooterProps>, nextState: Readonly<CenterPartOfFooterState>, nextContext: any): boolean {
    const { selecting, text, height, textInput } = this.props;
    
    if(this.state.prevTextInputHeight !== nextState.prevTextInputHeight) {
      return true;
    } else if(selecting !== nextProps.selecting) {
      return true;
    } else if(text !== nextProps.text) {
      return true;
    } else if(textInput.current !== nextProps.textInput.current) {
      return true;
    } else if(height !== nextProps.height) {
      return true;
    }

    return false;
  }

  render(): React.ReactNode {
    const { selecting, textInput, text, height, sendMessageHandler, setDynamicFooterHeight, setText } = this.props;

    return (!selecting?
      <TextInput 
        ref={textInput}
        value={text} 
        multiline
        onChangeText={setText} 
        placeholderTextColor={'rgb(137, 130, 130)'} 
        style={[styles.messageInput, { height: height }]}
        placeholder='Льоша блядюга)' 
        onSubmitEditing={sendMessageHandler} 
        scrollEnabled
        onContentSizeChange={(event) => {
          const { contentSize } = event.nativeEvent;
          const { width: textInputWidth, height: textInputHeight } = contentSize;

          if(!this.state.prevTextInputHeight) {
            this.setState({ prevTextInputHeight: textInputHeight });
            return;
          } else if(this.state.prevTextInputHeight && text.trim() === '') {
            this.setState({ prevTextInputHeight: 0 });
            setDynamicFooterHeight(3);
            return;
          }

          if(this.state.prevTextInputHeight < textInputHeight && height < MAX_FOOTER_HEIGHT - FOOTER_INNER_TEXTINPUT_GAP) {
            setDynamicFooterHeight(1);
            this.setState({ prevTextInputHeight: textInputHeight });
          } else if(this.state.prevTextInputHeight > textInputHeight) {
            setDynamicFooterHeight(2);
            this.setState({ prevTextInputHeight: textInputHeight });
          }
        }}
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