import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
      <View style={footerstyles.folderContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={OnPressRef.current}
          onLongPress={OnLongPressRef.current}
        >
          <Text
            style={[
              footerstyles.textPosition,
              isSelected && isSelectedThere ? footerstyles.selectedText : null,
            ]}
          >
            {folder.folderName}
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <CountOfUnreadMessageOnFolderComponent
            folder={folder}
            isSelected={isSelected && isSelectedThere}
          />
        </View>
      </View>
    );
  }
);

export default connect(null)(FolderContainer);
