import React from "react";
import { View, Text } from "react-native";
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
    svg: <ChatMenuAddToFolderSvg />,
  },
  Pin: {
    text: "Pin",
    svg: <ChatMenuPinSvg />,
  },
  Notifications: {
    text: { on: "On notifications", off: "Off notifications" },
    svg: { off: <ChatMenuOffNotificationsSvg /> },
  },
  Select: {
    text: "Select",
    svg: <ChatMenuSelectSvg />,
  },
  Mark: {
    text: { read: "Mark as read", unread: "Mark as unread" },
    svg: { mark: <ChatMenuMarkSvg />, eye: <ChatMenuEyeSvg /> },
  },
  Delete: {
    text: "Delete",
    svg: <ChatMenuDeleteSvg />,
  },
};

const ChatMenuButtonsContainers: React.JSX.Element[] = [
  <>
    <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
      {menuButtons.AddTofolder.svg}
    </View>
    <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
      {menuButtons.AddTofolder.text}
    </Text>
  </>,

  <>
    <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
      {menuButtons.Pin.svg}
    </View>
    <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
      {menuButtons.Pin.text}
    </Text>
  </>,

  <>
    <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
      {menuButtons.Notifications.svg.off}
    </View>
    <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
      {menuButtons.Notifications.text.off}
    </Text>
  </>,

  <>
    <View style={modalWindowChatStateStyle.chatMenuSvgContainer}>
      {menuButtons.Select.svg}
    </View>
    <Text style={modalWindowChatStateStyle.chatMenuButtonText}>
      {menuButtons.Select.text}
    </Text>
  </>,

  <>
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
  </>,

  <>
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
  </>,
];

export default ChatMenuButtonsContainers;
