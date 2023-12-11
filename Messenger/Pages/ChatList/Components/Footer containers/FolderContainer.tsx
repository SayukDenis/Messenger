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

interface FolderProps {
  containerStyle?: StyleProp<ViewStyle>; // Стиль для контейнера
  textStyle?: StyleProp<TextStyle>; // Стиль для тексту
  folder: Folder;
  isSelected: boolean; 
  onPress: any;
  handleLongPress: any;
  index:number;

}

const FolderContainer: React.FC<FolderProps> = React.memo(
  ({
    containerStyle,
    textStyle,
    folder,
    isSelected,
    onPress,
    handleLongPress,
    index,

  }) => {
    
    const OnPressRef=useRef((event:any)=>{
      onPress.current(event,index)
    })
    const isSelectedThere=useSelector((state:any)=>{
   //  console.log(folder.name+":"+state.folderSelectedArray.folderSelectedArray[index])
      return state.chatListReducer.folderSelectedArray.folderSelectedArray[index]
    })
    const OnLongPressRef=useRef((event:any)=>{
      handleLongPress.current(event,index)
    })
    
    return (
      <>
        <TouchableOpacity
          activeOpacity={1}
          onPress={OnPressRef.current}
          onLongPress={OnLongPressRef.current}
        >
          <View style={[containerStyle,isSelected?footerstyles.selectedFolderContainer:null,]}>
            <Text style={isSelected &&isSelectedThere? footerstyles.selectedText : textStyle}>
              {folder.folderName}
            </Text>
          </View>
        </TouchableOpacity>
      </>
    );
  }
);

export default connect(null)(FolderContainer);
