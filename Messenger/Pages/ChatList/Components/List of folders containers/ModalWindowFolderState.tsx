import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { footerstyles } from "../../Styles/FooterStyle";
import FolderModalWindow from "../Footer containers/FolderModalWindow";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import { useSelector } from "react-redux";
import BlurAll from "../../../SemiComponents/BlurAll";
import CountOfUnreadMessageOnFolderComponent from "../Footer containers/CountOfUnreadMessageOnFolderComponent";

interface ModalWindowProps {
  isVisibleForModalFolder: boolean;
  animationState: boolean;
  selectedLongPressFolder: number;
  selectedFolder: number;
  positionX: number;
  positionXInContainer: number;
  widths: any;
  setAnimation: () => void;
  handlePress: () => void;
  handlePressOut: () => void;
}

const ModalWindowFolderState: React.FC<ModalWindowProps> = ({
  isVisibleForModalFolder,
  animationState,
  selectedLongPressFolder,
  selectedFolder,
  positionX,
  positionXInContainer,
  widths,
  setAnimation,
  handlePress,
  handlePressOut,
}) => {
  const selfProfile: SelfProfile = useSelector((state: any) => {
    return state.selfProfileUser;
  });
  const currentTab = useSelector((state: any) => {
    let Tab = state.chatListReducer.currentTab.currentTab;
    return Tab;
  });
  if (!animationState) {
    return null;
  }
  return (
    <BlurAll handlePress={handlePress} handlePressOut={handlePressOut}>
      <FolderModalWindow
        folder={selfProfile.tabs[currentTab].folders[selectedLongPressFolder]}
        positionX={positionX}
        positionXInContainer={positionXInContainer}
        widthOfFolder={widths.current[selectedLongPressFolder]}
        exit={isVisibleForModalFolder}
        booleanRefForEndAnimation={setAnimation}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={[
          {
            position: "absolute",
            flexDirection: "row",
            bottom:
              footerstyles.listOfFoldersButtons.marginBottom +
              footerstyles.selectedFolder.height,
            backgroundColor: "#CBB2FF",
            paddingHorizontal: footerstyles.folderContainer.paddingHorizontal,
            paddingVertical: footerstyles.folderContainer.paddingVertical,
            left:
              positionX -
              positionXInContainer -
              footerstyles.folderContainer.paddingHorizontal,
            borderRadius: 100,
          },
        ]}
      >
        <Text
          style={[
            footerstyles.textPosition,
            selectedLongPressFolder == selectedFolder
              ? footerstyles.selectedText
              : null,
          ]}
        >
          {
            selfProfile.tabs[currentTab].folders[selectedLongPressFolder]
              .folderName
          }
        </Text>

        <View style={{ flexDirection: "row" }}>
          <CountOfUnreadMessageOnFolderComponent
            folder={
              selfProfile.tabs[currentTab].folders[selectedLongPressFolder]
            }
            isSelected={selectedLongPressFolder == selectedFolder}
          />
        </View>
      </TouchableOpacity>
    </BlurAll>
  );
};

export default ModalWindowFolderState;
