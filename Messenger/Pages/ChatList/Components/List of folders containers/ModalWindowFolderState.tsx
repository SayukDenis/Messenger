import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  Text,
  Dimensions,
  Platform,
  View,
} from "react-native";
import { BlurView } from "expo-blur";
import { footerstyles } from "../../Styles/FooterStyle";
import FolderModalWindow from "../Footer containers/FolderModalWindow";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import { useSelector } from "react-redux";
import BlurAll from "../../../SemiComponents/BlurAll";
const { height: screenHeight } = Dimensions.get("window");

interface ModalWindowProps {
  isVisibleForModalFolder: boolean;
  animationState: boolean;
  selectedLongPressFolder: number;
  selectedFolder: number;
  positionX: number;
  positionXInContainer: number;
  widths: number[];
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
    <BlurAll
      
      handlePress={handlePress}
      handlePressOut={handlePressOut}
    >
      <FolderModalWindow
        folder={selfProfile.tabs[currentTab].folders[selectedLongPressFolder]}
        positionX={positionX}
        positionXInContainer={positionXInContainer}
        widthOfFolder={widths[selectedLongPressFolder]}
        exit={isVisibleForModalFolder}
        booleanRefForEndAnimation={setAnimation}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={[
          footerstyles.folderContainer,
          {
            zIndex: 10,
            position: "absolute",
            left: positionX - positionXInContainer,
            bottom:
              Platform.OS == "ios" && useSafeAreaInsets().bottom != 0
                ? screenHeight * 0.0049 + useSafeAreaInsets().bottom
                : screenHeight * 0.0165,
            borderRadius: 100,
            justifyContent: "center",
            height: screenHeight * 0.036,
            backgroundColor: "#E7E6E4",
            alignSelf: "center",
          },
        ]}
      >
        <Text
          style={[
            selectedLongPressFolder == selectedFolder
              ? footerstyles.selectedText
              : footerstyles.folder,
          ]}
        >
          {
            selfProfile.tabs[currentTab].folders[selectedLongPressFolder]
              .folderName
          }
        </Text>
      </TouchableOpacity>
    </BlurAll>
  );
};

export default ModalWindowFolderState;
