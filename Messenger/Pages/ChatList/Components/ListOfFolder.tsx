import React, { useEffect, useRef } from "react";
import { View, Dimensions, FlatList, Platform, Text } from "react-native";
import { listOfChatsStyle } from "../Styles/ListOfChatsStyle";
import ChatContainer from "./List of folders containers/ChatContainer";
import { connect, useSelector } from "react-redux";
import SelfProfile from "../../../dao/Models/SelfProfile";
import { booleanForLogging } from "../ChatList";
import { footerstyles } from "../Styles/FooterStyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { dataSource } from "../../../dao/local/database";
import Dialogue from "../../../dao/Models/Chats/Dialogue";
import Channel from "../../../dao/Models/Chats/Channel";
import Group from "../../../dao/Models/Chats/Group";
import Folder from "../../../dao/Models/Folder";

interface ListOfFolderProps {
  currentFolder: number;
  navigation: any;
  setVisibleModalWindowChatState: React.MutableRefObject<() => void>;
  dialogues: Dialogue[];
}

const ListOfFolder: React.FC<ListOfFolderProps> = ({
  currentFolder,
  navigation,
  setVisibleModalWindowChatState,
  dialogues
}) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  useEffect(() => {
    if (booleanForLogging) {
      console.log("RERENDER LIST OF FOLDERS");
    }
  });

  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser.selfProfile;
    return self;
  });

  const currentTab = useSelector((state: any) => {
    let Tab = state.chatListReducer.currentTab.currentTab;
    return Tab;
  });

  const tabs = selfProfile?.tabs;
  const selectedTab = tabs && tabs[currentTab];

  if (!selectedTab || !selfProfile?.tabs[currentTab]) {
    return <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}><Text>Loading...</Text></View>; 
  }

  const keyExtractor = (index: any) => index.toString();

  const manager = dataSource.manager;
  const renderItem = ({ item, index }: any) => {
    console.log('ListOfFolder', index);
    return (
      <ChatContainer
        key={index}
        chat={item}
        nesting={0}
        navigation={navigation}
        setVisibleModalWindowChatState={setVisibleModalWindowChatState}
      />
    );
  }
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
        data={dialogues} // selfProfile.tabs[currentTab].folders[currentFolder].chats
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

const mapStateToProps = (state: any) => ({
  dialogues: state.selfProfileUser.dialogues
})

export default connect(mapStateToProps)(React.memo(ListOfFolder));
