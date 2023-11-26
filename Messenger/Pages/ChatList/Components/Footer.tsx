import React, { useRef, useState, useEffect, Ref } from "react";
import { View, ScrollView, Dimensions, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MySelfUser from "../1HelpFullFolder/MySelfUser";
import { footerstyles } from "../Styles/FooterStyle";
import FolderContainer from "./Footer containers/FolderContainer";
import FolderIndicator from "./Footer containers/FolderIndicator";
import { connect} from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

interface FooterProps {
  user: MySelfUser;
  isTouchableForHeader: boolean;
  scrollViewRefFooter: Ref<ScrollView | null>;
  handleLayout: any;
  isVisibleForModalFolder: boolean;
  handleFolderPress: any;
  handleLongPress: any;
  positionsOfFolder: any;
  widths: any;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Footer: React.FC<FooterProps> = ({
  user,
  isTouchableForHeader,
  scrollViewRefFooter,
  handleLayout,
  isVisibleForModalFolder,
  handleFolderPress,
  handleLongPress,

  widths,
  positionsOfFolder,
}) => {
  useEffect(() => {
    console.log("RERENDER");
  });
  const OnPressRef = useRef((event: any, index) => {
    handleFolderPress.current(index);
  });
  const LongPressRef = useRef((e: any, index) => {
    handleLongPress.current(e, index);
  });
  return (
    <View
      style={[
        footerstyles.container,
        {
          zIndex: isTouchableForHeader ? 3 : 5,
          height:
            Platform.OS == "ios"&& useSafeAreaInsets().bottom!=0
              ? screenHeight * 0.05 + useSafeAreaInsets().bottom
              : screenHeight * 0.06,
              overflow:"hidden"
        },
      ]}
    >
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        locations={[0.25, 0.5, 0.75]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          opacity:0.7,
          bottom: 0,
          position:"absolute",
          left: 0,
          right: 0,
          height: screenHeight,
          width: screenWidth,

        
        }}
      />
      <View
        style={{
          marginBottom: Platform.OS == "ios" ? useSafeAreaInsets().bottom : 0,flex:1,
        }}
      >
        
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={footerstyles.scrollView}
          ref={scrollViewRefFooter}
        >
          <View style={{ justifyContent: Platform.OS == "ios"&& useSafeAreaInsets().bottom!=0?"flex-end":"center" }}>
            <View style={{ flexDirection: "row" }}>
              {user.folders.map((folder, index) => (
                <View
                  key={index}
                  onLayout={(event) => handleLayout.current(event, index)}
                >
                  <FolderContainer
                    key={index}
                    index={index}
                    folder={folder}
                    containerStyle={footerstyles.folderContainer}
                    textStyle={footerstyles.folder}
                    isSelected={!isVisibleForModalFolder}
                    onPress={OnPressRef}
                    handleLongPress={LongPressRef}
                  />
                </View>
              ))}
            </View>
            <FolderIndicator
              screenWidth={screenWidth}
              widths={widths}
              positionsOfFolder={positionsOfFolder}
              isVisibleForModalFolder={isVisibleForModalFolder}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const mapToState = (state) => ({
  selectedFolder: state.selectedFolder.selectedFolder,
});

export default connect(null)(Footer);
