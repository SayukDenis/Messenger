import React from "react";
import { View } from "react-native";
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
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });

  const currentTab = useSelector((state: any) => {
    let Tab = state.chatListReducer.currentTab.currentTab;
    return Tab;
  });

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
