import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { footerstyles } from "../../Styles/FooterStyle";
import { connect, useSelector } from "react-redux";
import Folder from "../../../../dao/Models/Folder";
import { booleanForLogging } from "../../ChatList";

interface FolderProps {
  folder: Folder;
  isSelected: boolean;
  onPress: any;
  handleLongPress: any;
  index: number;
}

const FolderContainer: React.FC<FolderProps> = React.memo(
  ({ folder, isSelected, onPress, handleLongPress, index }) => {
    useEffect(() => {
      if (booleanForLogging) {
        console.log("RERENDER FOLDER CONTAINER IN FOOTER " + folder.folderName);
      }
    });
    const OnPressRef = useRef((event: any) => {
      onPress.current(event, index);
    });
    const isSelectedThere = useSelector((state: any) => {
      return state.chatListReducer.folderSelectedArray.folderSelectedArray[
        index
      ];
    });
    const OnLongPressRef = useRef((event: any) => {
      handleLongPress.current(event, index);
    });

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={OnPressRef.current}
        onLongPress={OnLongPressRef.current}
      >
        <View
          style={[
            footerstyles.folderContainer,
            isSelected ? footerstyles.selectedFolderContainer : null,
          ]}
        >
          <Text
            style={
              isSelected && isSelectedThere
                ? footerstyles.selectedText
                : footerstyles.folder
            }
          >
            {folder.folderName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export default connect(null)(FolderContainer);
