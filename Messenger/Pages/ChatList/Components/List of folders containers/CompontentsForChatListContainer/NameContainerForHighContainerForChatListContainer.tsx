import React from "react";
import { Text, View } from "react-native";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import { connect } from "react-redux";

interface NameContainerProps {
  nameOfChat: string; 
}

const NameContainerForHighContainerForChatListContainer: React.FC<NameContainerProps> = ({ nameOfChat }) => {
  return (
    <View style={listOfChatsStyle.namecontainer}>
      <Text
        style={listOfChatsStyle.nameStyle}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {nameOfChat}
      </Text>
    </View>
  );
}

export default connect(null)(NameContainerForHighContainerForChatListContainer);
