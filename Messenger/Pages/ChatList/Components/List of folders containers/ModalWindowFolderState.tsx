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
import FolderContainer from "../Footer containers/FolderContainer";
import CountOfUnreadMessageOnFolderComponent from "../Footer containers/CountOfUnreadMessageOnFolderComponent";
import { screenWidth } from "../../Constants/ConstantsForChatlist";
const { height: screenHeight } = Dimensions.get("window");

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
            zIndex: 10,
            position: "absolute",
            left: positionX - positionXInContainer,
            bottom:
              Platform.OS == "ios" && useSafeAreaInsets().bottom != 0
                ? screenHeight * 0.0049 + useSafeAreaInsets().bottom
                : screenHeight * 0.0165,
            borderRadius: 100,
            justifyContent: "center",
            height: screenHeight * 0.035,
            overflow: "hidden",

            alignSelf: "center",
            flexDirection: "row",
          },
        ]}
      >
        <View
          style={{
            position: "absolute",
            height: screenHeight * 0.035,
            width: screenWidth * 0.5,
            backgroundColor: "#CBB2FF",
          
          }}
        />
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

        <View style={{ flexDirection: "row", marginRight: 5 }}>
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
