import React, { useEffect } from "react";
import { View, FlatList, Platform } from "react-native";
import { listOfChatsStyle } from "../Styles/ListOfChatsStyle";
import ChatContainer from "./List of folders containers/ChatContainer";
import { connect, useSelector } from "react-redux";
import SelfProfile from "../../../dao/Models/SelfProfile";
import { booleanForLogging } from "../ChatList";
import { footerstyles } from "../Styles/FooterStyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ListOfFolderProps {
  currentFolder: number;
  navigation: any;
  setVisibleModalWindowChatState: React.MutableRefObject<() => void>;
  isSelectChatMode: boolean;
}

const ListOfFolder: React.FC<ListOfFolderProps> = ({
  currentFolder,
  navigation,
  setVisibleModalWindowChatState,
  isSelectChatMode,
}) => {
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
      setVisibleModalWindowChatState={setVisibleModalWindowChatState}
      isSelectChatMode={isSelectChatMode}
    />
  );

  const ListHeaderComponent = () => (
    <View style={[listOfChatsStyle.gapContainerHigh]} />
  );

  const ListFooterComponent = () => (
    <View
      style={{
        height:
          footerstyles.container.height +
          (Platform.OS === "ios" ? useSafeAreaInsets().bottom : 0),
      }}
    ></View>
  );

  const ItemSeparatorComponent = () => (
    <View style={listOfChatsStyle.itemSeparatorComponent} />
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
