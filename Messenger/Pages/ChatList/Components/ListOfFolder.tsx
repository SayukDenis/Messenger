import React, { useEffect, useState } from "react";
import {
  View,
  Animated,
  Dimensions,
  Text,
  FlatList,
  ScrollView,
  GestureResponderEvent,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import MySelfUser from "../1HelpFullFolder/MySelfUser";
import { listOfChatsStyle } from "../Styles/ListOfChatsStyle";
import ChatContainer from "./List of folders containers/ChatContainer";
import { connect, useSelector } from "react-redux";

interface ListOfFolderProps {
  user: MySelfUser;
  currentFolder: number;
}

const ListOfFolder: React.FC<ListOfFolderProps> = ({ user, currentFolder }) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  useEffect(() => {
    console.log(user.folders[currentFolder].name);
  });
  return (
    <View style={{ height: screenHeight, width: screenWidth }}>
      <FlatList
        data={user.folders[currentFolder].listOfChats}
        keyExtractor={(item, index) => index.toString()}
        nestedScrollEnabled={true}
        renderItem={({ item, index }) => (
          <ChatContainer key={index} chat={item} isCurrent={true} />
        )}
        ListHeaderComponent={
          <>
            <View style={[listOfChatsStyle.gapContainerHigh]} />
          </>
        }
        ListFooterComponent={
          <View
            style={{
              height:
                Platform.OS == "ios" && useSafeAreaInsets().bottom != 0
                  ? screenHeight * 0.05 + useSafeAreaInsets().bottom
                  : screenHeight * 0.06,
            }}
          />
        }
        showsVerticalScrollIndicator={false}
        windowSize={10}
        initialNumToRender={10}
      />
    </View>
  );
};

export default connect(null)(ListOfFolder);
