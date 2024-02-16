import React, { useEffect } from "react";
import { View, Dimensions, FlatList } from "react-native";
import { listOfChatsStyle } from "../Styles/ListOfChatsStyle";
import ChatContainer from "./List of folders containers/ChatContainer";
import { connect, useSelector } from "react-redux";
import SelfProfile from "../../../dao/Models/SelfProfile";
import { booleanForLogging } from "../ChatList";
import { footerstyles } from "../Styles/FooterStyle";

interface ListOfFolderProps {
  currentFolder: number;
  navigation: any;
}

const ListOfFolder: React.FC<ListOfFolderProps> = ({
  currentFolder,
  navigation,
}) => {
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

  const currentTab = useSelector((state: any) => {
    let Tab = state.chatListReducer.currentTab.currentTab;
    return Tab;
  });

  const keyExtractor = (index: any) => index.toString();

  const renderItem = ({ item, index }: any) => (
    <ChatContainer
      key={index}
      chat={item}
      nesting={0}
      navigation={navigation}
    />
  );

  const ListHeaderComponent = () => (
    <View style={[listOfChatsStyle.gapContainerHigh]} />
  );

  const ListFooterComponent = () => (
    <View style={{ height: footerstyles.container.height }}></View>
  );

  const ItemSeparatorComponent = () => (
    <View
      style={{
        width: screenWidth,
        height: 2,
        opacity: 0.1,
        backgroundColor: "gray",
      }}
    />
  );

  return (
    <View>
      <FlatList
        data={selfProfile.tabs[currentTab].folders[currentFolder].chats}
        keyExtractor={keyExtractor}
        nestedScrollEnabled={true}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        showsVerticalScrollIndicator={false}
        windowSize={20}
        initialNumToRender={10}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

export default connect(null)(React.memo(ListOfFolder));
