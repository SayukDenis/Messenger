import React, { useRef, useState, useEffect, Ref } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Animated,
  LayoutChangeEvent,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import MySelfUser from "../1HelpFullFolder/MySelfUser";
import { footerstyles } from "../Styles/FooterStyle";
import FolderContainer from "./Footer containers/FolderContainer";
import FolderIndicator from "./Footer containers/FolderIndicator";

interface FooterProps {
  user: MySelfUser;
  isTouchableForHeader: boolean;
  scrollViewRefFooter: Ref<ScrollView | null>;
  handleLayout: (event: LayoutChangeEvent, index: number) => void;
  currentPosition: number;
  isVisibleForModalFolder: boolean;
  animationState: boolean;
  handleFolderPress: (index: number) => void;
  handleLongPress: (e: GestureResponderEvent, index: number) => void;
  positionsOfFolder: number[];
  widths: number[];
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Footer: React.FC<FooterProps> = ({
  user,
  isTouchableForHeader,
  scrollViewRefFooter,
  handleLayout,
  currentPosition,
  isVisibleForModalFolder,
  animationState,
  handleFolderPress,
  handleLongPress,
  positionsOfFolder,
  widths,
}) => {
  useEffect(() => {
    console.log("RERENDER");
  });
  return (
    <>
      <View
        style={[
          footerstyles.container,
          { zIndex: isTouchableForHeader ? 3 : 5 },
        ]}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={footerstyles.scrollView}
          ref={scrollViewRefFooter}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              {user.folders.map((folder, index) => {
                return (
                  <View
                    key={index}
                    onLayout={(event) => handleLayout(event, index)}
                    style={[isVisibleForModalFolder ? { zIndex: 10 } : null]}
                  >
                    <FolderContainer
                      key={index}
                      folder={folder}
                      containerStyle={footerstyles.folderContainer}
                      textStyle={footerstyles.folder}
                      isSelected={
                        !isVisibleForModalFolder &&
                        index === Math.round(currentPosition / screenWidth)
                      }
                      onPress={
                        animationState ? null : () => handleFolderPress(index)
                      }
                      handleLongPress={(e) => handleLongPress(e, index)}
                    />
                  </View>
                );
              })}
            </View>

            <FolderIndicator
              currentPosition={currentPosition}
              screenWidth={screenWidth}
              widths={widths}
              positionsOfFolder={positionsOfFolder}
              isVisibleForModalFolder={isVisibleForModalFolder}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Footer;
