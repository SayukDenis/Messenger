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
import Folder from "../../1HelpFullFolder/Folder";

interface FolderProps {
  containerStyle?: StyleProp<ViewStyle>; // Стиль для контейнера
  textStyle?: StyleProp<TextStyle>; // Стиль для тексту
  folder: Folder;
  isSelected: boolean; // Додаємо флаг для визначення, чи обрана папка
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
    index
  }) => {
    useEffect(()=>{
      //console.log(folder.name)
    })
    const OnPressRef=useRef((event:any)=>{
      
      //console.log(event)
      onPress.current(event,index)
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
          <View style={[containerStyle,isSelected?footerstyles.selectedFolderContainer:null]}>
            <Text style={isSelected ? footerstyles.selectedText : textStyle}>
              {folder.name}
            </Text>
          </View>
        </TouchableOpacity>
      </>
    );
  }
);

export default FolderContainer;
