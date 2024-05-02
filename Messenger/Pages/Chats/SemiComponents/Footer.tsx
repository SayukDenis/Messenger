import React from "react";
import { Component, RefObject } from "react";
import { DialogueFooterProps, DialogueFooterState, EChangeFooterHeight } from "./Interfaces/IDialoueFooter";
import { Animated, TextInput, View } from "react-native";
import { DEFAULT_FONT_SIZE, FOOTER_HEIGHT, FOOTER_INNER_CONTAINER_GAP, FOOTER_INNER_TEXTINPUT_GAP, KEYBOARD_HEIGHT, SOFT_MENU_BAR_HEIGHT } from "./ChatConstants";
import { sendMessage } from "./HelperComponents/Footer/sendMessageFunc";
import ReplyAndEditMenu from "./HelperComponents/Footer/ReplyAndEditMenu";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Styles/Footer";
import LeftPartOfFooter from "./HelperComponents/Footer/LeftPartOfFooter";
import CenterPartOfFooter from "./HelperComponents/Footer/CenterPartOfFooter";
import RightPartOfFooter from "./HelperComponents/Footer/RightPartOfFooter";
import { connect } from "react-redux";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { ChatHubService } from "../Dialogue/services/ChatHubService";
import MessageFile from "../../../dao/Models/MessageFile";

class Footer extends Component<DialogueFooterProps> {
  state: DialogueFooterState = {
    text: '',
    bottomOffset: new Animated.Value(SOFT_MENU_BAR_HEIGHT),
    dynamicFooterHeight: FOOTER_HEIGHT,
  }

  setText = (newText: string) => {
    this.setState({ text: newText });
  }

  setDynamicFooterHeight = (action: number) => {
    console.log('action', action);
    this.setState({ 
      dynamicFooterHeight: FOOTER_HEIGHT - FOOTER_INNER_TEXTINPUT_GAP + action,
    });
    this.props.emitter.emit('changeDynamicFooterHeight', { height: action - FOOTER_INNER_TEXTINPUT_GAP });
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
        toValue: SOFT_MENU_BAR_HEIGHT + KEYBOARD_HEIGHT,
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

    //console.log('Footer #1', !keyboardActive);

    if(isEdit === prevProps.isEdit && isReply === prevProps.isReply) return;

    if (isEdit && editMessage.content) {
      //console.log('Footer #2', !keyboardActive);
      this.textInput.current && this.textInput.current.focus();
      this.setState({ text: editMessage.content });
    } else {
      if(prevProps.isEdit) this.setState({ text: '' });
      if (isReply) this.textInput.current && this.textInput.current.focus();
    }
  }

  sendMessageHandler = () => {
    const { messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author, getChatHubService, getAuthor, getChatId} = this.props;
    const { text } = this.state;
    const { setText } = this;
    sendMessage({ text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author, getChatHubService, getAuthor, getChatId });

    this.setState({ dynamicFooterHeight: FOOTER_HEIGHT });
  }


  pickImage = async () => {
    // Getting base64 string for an image/video
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: true // Request base64 representation of the image
    });

    console.log(result.assets![0].fileName);

    const uri = result.assets![0].uri;

    // Get the file info
    const fileInfo = await FileSystem.getInfoAsync(uri);

    // Extract the filename
    const filename = fileInfo.uri.split('/').pop();

    const requestBody = {
      base64String: (result as any).base64
    };
    
    await fetch('http://192.168.0.108:5151/api/Chat/dialogue/file', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const msg = {
      Content: "image",
      // FileContent: [] as number[],
      FileName: 'IMG-' + filename,
      Author: this.props.author,
      ChatId: this.props.getChatId(),
      MessageId: 0,
      chatPinned: 0,
      chatPinnedForAll: 0,
      SendingTime: new Date(),
      NumberInChat: 0,
      ReactionOnMessage: [],
      Type: 2,
      Properties: 0,
      MessageResponseId: null,
      IsEdited: false,
    };

    ChatHubService.getInstance().sendMessageFile(msg);



    // Processing and saving image/video to a gallery
    // if (!result.canceled) {
    //   const base64String = (result as any).base64;

    //   // Create file path
    //   const filePath = `${FileSystem.documentDirectory}image.jpg`;

    //   try {
    //     // Write base64 string to file
    //     await FileSystem.writeAsStringAsync(filePath, base64String, {
    //       encoding: FileSystem.EncodingType.Base64,
    //     });

    //     // Save file to gallery
    //     await MediaLibrary.saveToLibraryAsync(filePath);
    //   } catch (error) {
    //     console.error('Error saving image:', error);
    //   }
    // }
  };

  render(): React.ReactNode {
    const { isReply, replyMessage, onSendMessageOrCancelReplyAndEdit, isEdit, editMessage, selecting, deleteSelectedMessages, keyboardActive, author, users } = this.props;
    const { text, dynamicFooterHeight } = this.state;
    const { textInput, setText, sendMessageHandler, setDynamicFooterHeight } = this;

    // console.log('Footer dynamicFooterHeight', dynamicFooterHeight)

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
            <View style={[styles.footerContainer, { height: dynamicFooterHeight - FOOTER_INNER_CONTAINER_GAP }]}>
              <View style={[styles.footer, { height: dynamicFooterHeight - FOOTER_INNER_CONTAINER_GAP }, selecting&&styles.footerWhileSelecting]}>
                <LeftPartOfFooter 
                  selecting={selecting}
                  deleteSelectedMessagesHandler={deleteSelectedMessages}
                />
                <CenterPartOfFooter 
                  textInput={textInput}
                  text={text}
                  setText={setText}
                  setDynamicFooterHeight={setDynamicFooterHeight}
                  sendMessageHandler={sendMessageHandler}
                  selecting={selecting}
                  height={dynamicFooterHeight - FOOTER_INNER_TEXTINPUT_GAP}
                />
                <RightPartOfFooter 
                  sendMessage={keyboardActive} 
                  sendMessageHandler={sendMessageHandler} 
                  pressGalleryButtonHandler={this.pickImage} 
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