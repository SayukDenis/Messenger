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
import CountOfUnreadMessageOnFolderComponent from "./CountOfUnreadMessageOnFolderComponent";

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
        style={{ flexDirection: "row" }}
      >
        <View style={[]}>
          <Text
            style={[
              footerstyles.textPosition,
              isSelected && isSelectedThere ? footerstyles.selectedText : null,
            ]}
          >
            {folder.folderName}
          </Text>
        </View>
        <View style={{flexDirection:"row",marginRight:5}}>
          <CountOfUnreadMessageOnFolderComponent
            folder={folder}
            isSelected={isSelected && isSelectedThere}
          />
        </View>
      </TouchableOpacity>
    );
  }
);

export default connect(null)(FolderContainer);
