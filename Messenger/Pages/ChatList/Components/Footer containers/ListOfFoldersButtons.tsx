import React from "react";
import { Text, View } from "react-native";
import FolderContainer from "./FolderContainer";
import { useSelector } from "react-redux";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import { footerstyles } from "../../Styles/FooterStyle";

interface ListOfFoldersButtonsProps {
  isVisibleForModalFolder: boolean;
  OnPressRef: any;
  LongPressRef: any;
  handleLayout: any;
}

const ListOfFoldersButtons: React.FC<ListOfFoldersButtonsProps> = ({
  isVisibleForModalFolder,
  OnPressRef,
  LongPressRef,
  handleLayout,
}) => {
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

  return (
    <View style={footerstyles.listOfFoldersButtons}>
      {selfProfile.tabs[currentTab].folders.map((folder, index) => (
        <View
          key={index}
          onLayout={(event) => handleLayout.current(event, index)}
        >
          <FolderContainer
            key={index}
            index={index}
            folder={folder}
            isSelected={!isVisibleForModalFolder}
            onPress={OnPressRef}
            handleLongPress={LongPressRef}
          />
        </View>
      ))}
    </View>
  );
};

export default ListOfFoldersButtons;
