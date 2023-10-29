import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  Text,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { footerstyles } from "../../Styles/FooterStyle";
import FolderModalWindow from "../Footer containers/FolderModalWindow";
const { height: screenHeight } = Dimensions.get("window");

interface ModalWindowProps {
  isVisibleForModalFolder: boolean;
  animationState: boolean;
  selectedLongPressFolder: number;
  selectedFolder: number;
  user: any; // замініть на правильний тип даних користувача
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
  user,
  positionX,
  positionXInContainer,
  widths,
  setAnimation,
  handlePress,
  handlePressOut,
  
}) => {
  if (!animationState) {
    return null;
  }

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
      }}
      onPress={handlePress}
      onPressOut={handlePressOut}
      onLongPress={handlePress}
      activeOpacity={1}
    >
      <StatusBar hidden />
      <BlurView
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        intensity={40}
      />
      <FolderModalWindow
        folder={user.folders[selectedLongPressFolder]}
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
            bottom: screenHeight * 0.032,
            borderRadius: 100,
            height: screenHeight * 0.036,
            backgroundColor: "#E7E6E4",
            shadowColor: "black",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.3,
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
          {user.folders[selectedLongPressFolder].name}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ModalWindowFolderState;
