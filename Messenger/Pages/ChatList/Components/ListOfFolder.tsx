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
import { listOfChatsStyle } from "../Styles/ListOfChatsStyle";
import ChatContainer from "./List of folders containers/ChatContainer";
import { connect, useSelector } from "react-redux";
import SelfProfile from "../../../dao/Models/SelfProfile";
import { booleanForLogging } from "../ChatList";

interface ListOfFolderProps {
  currentFolder: number;
}

const ListOfFolder: React.FC<ListOfFolderProps> = ({ currentFolder }) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  useEffect(() => {
    if (booleanForLogging) {
      console.log("RERENDER LIST OF FOLDERS");
    }
  });
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });
  const currentTab: number = 0;
  return (
    <View style={{ height: screenHeight, width: screenWidth }}>
      <FlatList
        data={selfProfile.tabs[currentTab].folders[currentFolder].chats}
        keyExtractor={(item, index) => index.toString()}
        nestedScrollEnabled={true}
        renderItem={({ item, index }) => (
          <ChatContainer key={index} chat={item} />
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
