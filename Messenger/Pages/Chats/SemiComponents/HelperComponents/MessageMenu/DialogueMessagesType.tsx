import React from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import GeneralType from "./GeneralType";
import { styles } from "../../Styles/MessageMenu";
import { ChatConstants } from "../../ChatConstants";

const { getCustomFontSize } = ChatConstants.getInstance();

class DialogueMessagesType extends GeneralType {

  ReplyButton = () => {
    const { handleTrianglePosition, buttons, onButtonpPress, onOverlayPress, helperFunc } = this.props;
    const button = buttons.find(b => b.text === 'Reply')!;
    const index = 0;

    return (
      <Animated.View key={button.text} style={helperFunc(index)}>
        <View style={handleTrianglePosition()} />
        <TouchableOpacity 
          key={index} 
          onPress={() => { onButtonpPress(); button.action!(); onOverlayPress() }} 
          activeOpacity={1} 
          style={styles.button}
        >
          {button.svg}
          <Text style={{color:button.color, marginLeft: 5, fontSize: getCustomFontSize(14)}}>{button.text}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  EditButton = () => {
    const { handleTrianglePosition, buttons, onButtonpPress, onOverlayPress, helperFunc, isUser } = this.props;
    if(!isUser) return null;

    const button = buttons.find(b => b.text === 'Edit')!;
    const index = 1;

    return (
      <Animated.View key={button.text} style={helperFunc(index)}>
        <TouchableOpacity 
          key={index} 
          onPress={() => { onButtonpPress(); button.action!(); onOverlayPress() }} 
          activeOpacity={1} 
          style={styles.button}
        >
          {button.svg}
          <Text style={{color:button.color, marginLeft: 5, fontSize: getCustomFontSize(14)}}>{button.text}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  SelectButton = () => {
    const { handleTrianglePosition, buttons, onButtonpPress, onOverlayPress, helperFunc } = this.props;
    const button = buttons.find(b => b.text === 'Select')!;
    const index = 6;

    return (
      <Animated.View key={button.text} style={helperFunc(index)}>
        <TouchableOpacity 
          key={index} 
          onPress={() => { onButtonpPress(); button.action!(); onOverlayPress() }} 
          activeOpacity={1} 
          style={styles.button}
        >
          {button.svg}
          <Text style={{color:button.color, marginLeft: 5, fontSize: getCustomFontSize(14)}}>{button.text}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }

}

export default DialogueMessagesType;