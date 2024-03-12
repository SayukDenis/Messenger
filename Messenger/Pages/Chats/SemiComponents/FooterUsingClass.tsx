import React from "react";
import { Component, RefObject } from "react";
import { DialogueFooterProps, DialogueFooterState } from "./Interfaces/IDialoueFooter";
import { Animated, TextInput, View } from "react-native";
import { SOFT_MENU_BAR_HEIGHT, height, width } from "./ChatConstants";
import { sendMessage } from "./HelperComponents/Footer/sendMessageFunc";
import ReplyAndEditMenu from "./ReplyAndEditMenu";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Styles/Footer";
import LeftPartOfFooter from "./HelperComponents/Footer/LeftPartOfFooter";
import CenterPartOfFooter from "./HelperComponents/Footer/CenterPartOfFooter";
import RightPartOfFooter from "./HelperComponents/Footer/RightPartOfFooter";
import { connect } from "react-redux";

class Footer extends Component<DialogueFooterProps> {
  state: DialogueFooterState = {
    keyboardActive: false,
    text: '',
  }

  setText = (newText: string) => {
    this.setState({ text: newText });
  }

  textInput: RefObject<TextInput> = React.createRef();

  shouldComponentUpdate(nextProps: Readonly<DialogueFooterProps>, nextState: Readonly<DialogueFooterState>, nextContext: any): boolean {
    if(this.state.keyboardActive !== nextState.keyboardActive) {
      console.log(this.state, nextState);
      return true;
    } else if(this.state.text !== nextState.text) {
      console.log(this.state, nextState);
      return true;
    } else if(this.props !== nextProps) {
      console.log('update props');
      return true;
    }

    return false;
  }

  componentDidUpdate(prevProps: Readonly<DialogueFooterProps>, prevState: Readonly<DialogueFooterState>, snapshot?: any): void {
    const { isEdit, isReply, editMessage } = this.props;
    if(isEdit === prevProps.isEdit) return;

    if (isEdit && editMessage) {
      this.textInput.current && this.textInput.current.focus();
      this.setState({ text: editMessage.content });
    } else {
      console.log('aboba', isEdit);
      this.setState({ text: '' });
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
    const { isReply, replyMessage, onSendMessageOrCancelReplyAndEdit, isEdit, editMessage, selecting, deleteSelectedMessages } = this.props;
    const { text, keyboardActive } = this.state;
    const { textInput, setText, sendMessageHandler } = this;

    return(
      <Animated.View>
        <ReplyAndEditMenu 
          isReply={isReply} 
          replyMessage={replyMessage} 
          cancelReplyAndEdit={onSendMessageOrCancelReplyAndEdit} 
          isEdit={isEdit} 
          editMessage={editMessage}
        />
        <View style={[styles.mainContainer, { bottom: -height*0.06+SOFT_MENU_BAR_HEIGHT, }]} >
          <View style={styles.gradientContainer}>
            <LinearGradient
              colors={["#cf9b95", "#c98bb8", "#c37adb"]}
              locations={[0.25, 0.5, 0.75]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradient}
            />
            <View style={styles.footerContainer}>
              <View style={[styles.footer, selecting&&{ justifyContent: 'space-between', paddingHorizontal: width*0.075, alignItems: 'flex-start' }]}>
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

export default connect(null)(Footer);