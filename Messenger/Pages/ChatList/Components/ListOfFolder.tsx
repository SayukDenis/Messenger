import React, { useEffect, useState } from "react";
import {
  View,
  Animated,
  Dimensions,
  Text,
  FlatList,
  ScrollView,
  GestureResponderEvent,
} from "react-native";
import MySelfUser from "../1HelpFullFolder/MySelfUser";
import { listOfChatsStyle } from "../Styles/ListOfChatsStyle";
import ChatContainer from "./List of folders containers/ChatContainer";
import { connect, useSelector } from "react-redux";

interface ListOfFolderProps {
  user: MySelfUser;
  selectedFolder: number;
  currentFolder: number;
}

const ListOfFolder: React.FC<ListOfFolderProps> = ({
  user,
  currentFolder,
  selectedFolder
}) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  
  return (
    <>
      <FlatList
        data={user.folders[currentFolder].listOfChats}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ChatContainer key={index} chat={item} isCurrent={true} />
        )}
        ListHeaderComponent={
          <>
            <View style={listOfChatsStyle.gapContainerHigh} />
            <View style={listOfChatsStyle.lineStyle} />
          </>
        }
        ListFooterComponent={<View style={listOfChatsStyle.gapContainerDown} />}
        showsVerticalScrollIndicator={false}
        windowSize={screenHeight}
      />
    </>
  );
};

export default connect(null)(ListOfFolder);
