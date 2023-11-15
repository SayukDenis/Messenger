import React, { useRef, useState, useEffect, Ref } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  LayoutChangeEvent,
  FlatList,
} from "react-native";
import MySelfUser from "../1HelpFullFolder/MySelfUser";
import { footerstyles } from "../Styles/FooterStyle";
import FolderContainer from "./Footer containers/FolderContainer";
import FolderIndicator from "./Footer containers/FolderIndicator";

interface FooterProps {
  user: MySelfUser;
  isTouchableForHeader: boolean;
  scrollViewRefFooter: Ref<ScrollView | null>;
  handleLayout: any;
  isVisibleForModalFolder: boolean;
  animationState: boolean;
  handleFolderPress: any;
  handleLongPress: any;
  positionsOfFolder: any;
  widths: any;
  selectedFolder: number;
  endDrag: boolean;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Footer: React.FC<FooterProps> = ({
  user,
  isTouchableForHeader,
  scrollViewRefFooter,
  handleLayout,
  isVisibleForModalFolder,
  animationState,
  handleFolderPress,
  handleLongPress,
  selectedFolder,
  widths,
  positionsOfFolder,
}) => {
  useEffect(() => {
    //console.log("RERENDER");
  });
  const OnPressRef = useRef((event: any, index) => {
    //console.log(10)
    handleFolderPress.current(index);
  });
  const LongPressRef = useRef((e: any, index) => {
    handleLongPress.current(e, index);
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
              {user.folders.map((folder, index) => (
                <View
                  key={index}
                  onLayout={(event: LayoutChangeEvent) =>
                    handleLayout.current(event, index)
                  }
                  style={[isVisibleForModalFolder ? { zIndex: 10 } : null]}
                >
                  <FolderContainer
                    key={index}
                    index={index}
                    folder={folder}
                    containerStyle={footerstyles.folderContainer}
                    textStyle={footerstyles.folder}
                    isSelected={
                      !isVisibleForModalFolder && index === selectedFolder
                    }
                    onPress={OnPressRef}
                    handleLongPress={LongPressRef}
                  />
                </View>
              ))}
            </View>

            <FolderIndicator
              selectedFolder={0}
  
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
