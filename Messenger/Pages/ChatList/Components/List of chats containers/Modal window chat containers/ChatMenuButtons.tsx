import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { modalWindowChatStateStyle } from "../../../Styles/ModalWindowChatStateStyle";
import ChatMenuAddToFolderSvg from "../../SVG/ChatMenuAddToFolderSvg";
import ChatMenuPinSvg from "../../SVG/ChatMenuPinSvg";
import ChatMenuOffNotificationsSvg from "../../SVG/ChatMenuOffNotificationsSvg";
import ChatMenuSelectSvg from "../../SVG/ChatMenuSelectSvg";
import ChatMenuMarkSvg from "../../SVG/ChatMenuMarkSvg";
import ChatMenuEyeSvg from "../../SVG/ChatMenuEyeSvg";
import ChatMenuDeleteSvg from "../../SVG/ChatMenuDeleteSvg";

const menuButtons = {
  AddTofolder: {
    text: "Add to folder",
    action: () => {},
    svg: <ChatMenuAddToFolderSvg />,
  },
  Pin: {
    text: "Pin",
    action: () => {},
    svg: <ChatMenuPinSvg />,
  },
  Notifications: {
    text: { on: "On notifications", off: "Off notifications" },
    action: () => {},
    svg: { off: <ChatMenuOffNotificationsSvg /> },
  },
  Select: {
    text: "Select",
    action: () => {},
    svg: <ChatMenuSelectSvg />,
  },
  Mark: {
    text: { read: "Mark as read", unread: "Mark as unread" },
    action: () => {},
    svg: { mark: <ChatMenuMarkSvg />, eye: <ChatMenuEyeSvg /> },
  },
  Delete: {
    text: "Delete",
    action: () => {},
    svg: <ChatMenuDeleteSvg />,
  },
};

const buttonActiveOpacity = 0.9;

const ChatMenuButtonsContainers = [
  <TouchableOpacity
    activeOpacity={buttonActiveOpacity}
    style={[
      modalWindowChatStateStyle.chatMenuButton,
      modalWindowChatStateStyle.chatMenuFirstButton,
    ]}
    onPress={menuButtons.AddTofolder.action}
  >
    <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
      {menuButtons.AddTofolder.svg}
    </View>
    <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
      {menuButtons.AddTofolder.text}
    </Text>
  </TouchableOpacity>,

  <TouchableOpacity
    activeOpacity={buttonActiveOpacity}
    style={modalWindowChatStateStyle.chatMenuButton}
    onPress={menuButtons.Pin.action}
  >
    <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
      {menuButtons.Pin.svg}
    </View>
    <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
      {menuButtons.Pin.text}
    </Text>
  </TouchableOpacity>,

  <TouchableOpacity
    activeOpacity={buttonActiveOpacity}
    style={modalWindowChatStateStyle.chatMenuButton}
    onPress={menuButtons.Notifications.action}
  >
    <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
      {menuButtons.Notifications.svg.off}
    </View>
    <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
      {menuButtons.Notifications.text.off}
    </Text>
  </TouchableOpacity>,

  <TouchableOpacity
    activeOpacity={buttonActiveOpacity}
    style={modalWindowChatStateStyle.chatMenuButton}
    onPress={menuButtons.Select.action}
  >
    <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
      {menuButtons.Select.svg}
    </View>
    <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
      {menuButtons.Select.text}
    </Text>
  </TouchableOpacity>,

  <TouchableOpacity
    activeOpacity={buttonActiveOpacity}
    style={modalWindowChatStateStyle.chatMenuButton}
    onPress={menuButtons.Mark.action}
  >
    <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
      {menuButtons.Mark.svg.mark}
    </View>
    <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
      {menuButtons.Mark.text.unread}
    </Text>
    <View
      style={{
        marginLeft: modalWindowChatStateStyle.chatMenuSvgContainer.marginRight,
      }}
    >
      {menuButtons.Mark.svg.eye}
    </View>
  </TouchableOpacity>,

  <TouchableOpacity
    activeOpacity={buttonActiveOpacity}
    style={modalWindowChatStateStyle.chatMenuButton}
    onPress={menuButtons.Delete.action}
  >
    <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
      {menuButtons.Delete.svg}
    </View>
    <Text
      style={[
        modalWindowChatStateStyle.chatMenuButtonText,
        { color: "#CE2500" },
      ]}
    >
      {menuButtons.Delete.text}
    </Text>
  </TouchableOpacity>,
];

export default ChatMenuButtonsContainers;
