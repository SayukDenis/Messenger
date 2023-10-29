import React, { useEffect, useState } from "react";
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
  onPress: () => void;
  handleLongPress: (e: GestureResponderEvent) => void;
}

const FolderContainer: React.FC<FolderProps> = React.memo(
  ({
    containerStyle,
    textStyle,
    folder,
    isSelected,
    onPress,
    handleLongPress
  }) => {
    const [isSelectedThis, setIsSelectedThis] = useState(false);
    
    return (
      <>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          onLongPress={handleLongPress}
        >
          <View style={[containerStyle]}>
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
