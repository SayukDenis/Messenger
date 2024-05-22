import React from "react";
import { Component } from "react";
import { Animated, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "../../Styles/MessageMenu";
import { ChatConstants } from "../../ChatConstants";

type ButtonProps = {
  text: string;
  action?: (...args: any[]) => void,
  svg: React.ReactNode,
  color?: string;
}

type GeneralTypeProps = {
  buttons: Array<ButtonProps>;
  handleTrianglePosition: () => ViewStyle[];
  onButtonpPress: () => void;
  onOverlayPress: () => void;
  helperFunc: (index: number) => ViewStyle;
  handleMenuPosition: () => ViewStyle;
  pinnedMessageScreen: boolean;
  isUser: boolean;
}

const { 
  GAP_BETWEEN_MESSAGE_MENU_AND_SOFT_MENU_BAR, MESSAGE_BUTTON_HEIGHT, MESSAGE_MENU_HEIGHT, MESSAGE_PADDING_HORIZONTAL, 
  MESSAGE_TRIANGLE_SIZE, NOT_USER_GAP_BETWEEN_MENU_AND_MESSAGE, getCustomFontSize 
} = ChatConstants.getInstance();

abstract class GeneralType extends Component<GeneralTypeProps> {

  CopyButton = () => {
    const { handleTrianglePosition, buttons, onButtonpPress, onOverlayPress, helperFunc, pinnedMessageScreen } = this.props;
    const button = buttons.find(b => b.text === 'Copy')!;
    const index = 2;

    return (
      <Animated.View key={button.text} style={helperFunc(index)}>
        {pinnedMessageScreen && <View style={handleTrianglePosition()} />}
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

  PinButton = () => {
    const { handleTrianglePosition, buttons, onButtonpPress, onOverlayPress, helperFunc } = this.props;
    const button = buttons.find(b => b.text === 'Pin' || 'Unpin')!;
    const index = 3;

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

  ForwardButton = () => {
    const { handleTrianglePosition, buttons, onButtonpPress, onOverlayPress, helperFunc } = this.props;
    const button = buttons.find(b => b.text === 'Forward')!;
    const index = 4;

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

  DeleteButton = () => {
    const { handleTrianglePosition, buttons, onButtonpPress, onOverlayPress, helperFunc } = this.props;
    const button = buttons.find(b => b.text === 'Delete')!;
    const index = 5;

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

  public render = () => {
    const {
      ReplyButton,
      EditButton,
      CopyButton,
      PinButton,
      ForwardButton,
      DeleteButton,
      SelectButton
    } = this;

    const {
      handleMenuPosition,
      pinnedMessageScreen,
      isUser
    } = this.props;

    return (
      <View 
        style={[styles.buttonsContainer, !isUser&&{ height: MESSAGE_MENU_HEIGHT - MESSAGE_BUTTON_HEIGHT }, handleMenuPosition(), pinnedMessageScreen&&{ height: MESSAGE_BUTTON_HEIGHT * 4 + MESSAGE_TRIANGLE_SIZE + GAP_BETWEEN_MESSAGE_MENU_AND_SOFT_MENU_BAR },]}
      >
        <ReplyButton />
        <EditButton />
        <CopyButton />
        <PinButton />
        <ForwardButton />
        <DeleteButton />
        <SelectButton />
      </View>
    )
  }

  protected abstract ReplyButton(): React.ReactNode;
  protected abstract EditButton(): React.ReactNode;
  protected abstract SelectButton(): React.ReactNode;
}

export default GeneralType;