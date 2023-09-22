import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle, ScrollView, TouchableOpacity } from 'react-native';
import { footerstyles } from '../../Styles/FooterStyle';
interface FolderProps {
  containerStyle?: StyleProp<ViewStyle>; // Стиль для контейнера
  textStyle?: StyleProp<TextStyle>; // Стиль для тексту
  text: string;
  isSelected: boolean; // Додаємо флаг для визначення, чи обрана папка
  onPress: () => void; // Додаємо функцію для обробки натискання
}

const Folder: React.FC<FolderProps> = ({ containerStyle, textStyle, text, isSelected, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View style={containerStyle}>
        <Text style={ isSelected ? footerstyles.selectedText :textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};


export default Folder;
