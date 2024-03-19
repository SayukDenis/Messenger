import React from "react";
import { Component, RefObject } from "react";
import { DialogueFooterProps, DialogueFooterState } from "./Interfaces/IDialoueFooter";
import { Animated, TextInput, View } from "react-native";
import { DEFAULT_FONT_SIZE, SOFT_MENU_BAR_HEIGHT, height, width } from "./ChatConstants";
import { sendMessage } from "./HelperComponents/Footer/sendMessageFunc";
import ReplyAndEditMenu from "./HelperComponents/Footer/ReplyAndEditMenu";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Styles/Footer";
import LeftPartOfFooter from "./HelperComponents/Footer/LeftPartOfFooter";
import CenterPartOfFooter from "./HelperComponents/Footer/CenterPartOfFooter";
import RightPartOfFooter from "./HelperComponents/Footer/RightPartOfFooter";
import { connect } from "react-redux";

let rowsNum = 0;

class Footer extends Component<DialogueFooterProps> {
  state: DialogueFooterState = {
    text: '',
    bottomOffset: new Animated.Value(SOFT_MENU_BAR_HEIGHT),
    dynamicFooterHeight: height * 0.08
  }

  setText = (newText: string) => {
    rowsNum = newText.split('\n').length - 1;
    this.setState({ 
      text: newText, 
      dynamicFooterHeight: height * 0.08 + rowsNum * DEFAULT_FONT_SIZE,
    });
  }

  textInput: RefObject<TextInput> = React.createRef();

  shouldComponentUpdate(nextProps: Readonly<DialogueFooterProps>, nextState: Readonly<DialogueFooterState>, nextContext: any): boolean {
    if(this.props.keyboardActive !== nextProps.keyboardActive) {
      return true;
    } else if(this.state.dynamicFooterHeight !== nextState.dynamicFooterHeight) {
      return true;
    } else if(this.state.text !== nextState.text) {
      return true;
    } else if(this.props.isReply !== nextProps.isReply) {
      return true;
    } else if(this.props.isEdit !== nextProps.isEdit) {
      return true;
    } else if(this.props.selecting !== nextProps.selecting) {
      return true;
    } else if(this.props.messageID !== nextProps.messageID) {
      return true;
    }

    return false;
  }

  componentDidUpdate(prevProps: Readonly<DialogueFooterProps>, prevState: Readonly<DialogueFooterState>, snapshot?: any): void {
    const { isEdit, isReply, editMessage, keyboardActive, } = this.props;

    if(keyboardActive && keyboardActive !== prevProps.keyboardActive) {
      Animated.timing(this.state.bottomOffset, {
        toValue: SOFT_MENU_BAR_HEIGHT + 329.5238037109375,
        duration: 200,
        useNativeDriver: false
      }).start();
    } else if(!keyboardActive && keyboardActive !== prevProps.keyboardActive) {
      Animated.timing(this.state.bottomOffset, {
        toValue: SOFT_MENU_BAR_HEIGHT,
        duration: 200,
        useNativeDriver: false
      }).start();
    }
    
    // Have a little lagging for some reason
    if(!keyboardActive && keyboardActive !== prevProps.keyboardActive) this.textInput.current?.blur();

    console.log('Footer #1', !keyboardActive);

    if(isEdit === prevProps.isEdit && isReply === prevProps.isReply) return;

    if (isEdit && editMessage.content) {
      console.log('Footer #2', !keyboardActive);
      this.textInput.current && this.textInput.current.focus();
      this.setState({ text: editMessage.content });
    } else {
      if(prevProps.isEdit) this.setState({ text: '' });
      if (isReply) this.textInput.current && this.textInput.current.focus();
    }
  }

  sendMessageHandler = () => {
    const { messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author} = this.props;
    const { text } = this.state;
    const { setText } = this;
    sendMessage({ text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author });
  }

  render(): React.ReactNode {
    const { isReply, replyMessage, onSendMessageOrCancelReplyAndEdit, isEdit, editMessage, selecting, deleteSelectedMessages, keyboardActive, author, users } = this.props;
    const { text, dynamicFooterHeight } = this.state;
    const { textInput, setText, sendMessageHandler } = this;

    return(
      <Animated.View 
        style={[styles.wrapperAnimatedContainer, { height: dynamicFooterHeight, bottom: this.state.bottomOffset }]}
      >
        <ReplyAndEditMenu 
          author={author}
          users={users}
          isReply={isReply} 
          replyMessage={replyMessage} 
          cancelReplyAndEdit={onSendMessageOrCancelReplyAndEdit} 
          isEdit={isEdit} 
          editMessage={editMessage}
        />
        <View style={[styles.mainContainer, { height: dynamicFooterHeight }]} >
          <View style={[styles.gradientContainer, { height: dynamicFooterHeight }]}>
            <LinearGradient
              colors={["#cf9b95", "#c98bb8", "#c37adb"]}
              locations={[0.25, 0.5, 0.75]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradient}
            />
            <View style={[styles.footerContainer, { height: dynamicFooterHeight - height*0.02 }]}>
              <View style={[styles.footer, { height: dynamicFooterHeight - height*0.02 }, selecting&&styles.footerWhileSelecting]}>
                <LeftPartOfFooter 
                  selecting={selecting}
                  deleteSelectedMessagesHandler={deleteSelectedMessages}
                />
                <CenterPartOfFooter 
                  textInput={textInput}
                  text={text}
                  setText={setText}
                  sendMessageHandler={sendMessageHandler}
                  selecting={selecting}
                  height={dynamicFooterHeight - height * 0.04}
                />
                <RightPartOfFooter 
                  sendMessage={keyboardActive} 
                  sendMessageHandler={sendMessageHandler} 
                  pressGalleryButtonHandler={()=>{}} 
                  selecting={selecting}
                />
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  keyboardActive: state.ChatReducer.handleKeyboardAppearing.show
})

export default connect(mapStateToProps)(Footer);