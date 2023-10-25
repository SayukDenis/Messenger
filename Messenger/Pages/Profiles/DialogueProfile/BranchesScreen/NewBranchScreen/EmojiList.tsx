// Oleksii Kovalenko telegram - @traewe

import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
} from "react-native";
import { styles } from "../Styles";
import RedCrossIcon from "../Icons/RedCrossIcon";

interface EmojiListProps {
  emojis: string[];
  pickedEmoji: string;
  onEmojiPress: (value: string) => void;
  style?: ViewStyle;
  numColumns: number;
}

const EmojiList: React.FC<EmojiListProps> = (props) => {
  return (
    <View style={[styles.emojiSelectionContainer, props.style]}>
      <FlatList
        key={props.numColumns}
        data={props.emojis}
        keyExtractor={(item) => item}
        horizontal={false}
        numColumns={props.numColumns}
        contentContainerStyle={{ width: "100%", padding: 15 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              if (props.pickedEmoji == item) props.onEmojiPress("");
              else props.onEmojiPress(item);
            }}
            style={[
              styles.blueBackgroundForPickedEmoji,
              {
                backgroundColor:
                  props.pickedEmoji === item
                    ? "rgb(93, 171, 228)"
                    : "rgb(218, 182, 113)",
              },
            ]}
          >
            {props.pickedEmoji == item && (
              <RedCrossIcon style={styles.redCrossIcon} />
            )}
            <Text style={{ fontSize: 23 }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default EmojiList;
