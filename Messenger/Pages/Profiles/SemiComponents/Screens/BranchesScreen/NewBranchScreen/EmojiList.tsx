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
import { LinearGradient } from "expo-linear-gradient";

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
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        style={[styles.linearGradient, { opacity: 0.7 }]}
      />
      <FlatList
        key={props.numColumns}
        data={props.emojis}
        keyExtractor={(item) => item}
        horizontal={false}
        numColumns={props.numColumns}
        contentContainerStyle={{
          width: "100%",
          padding: 15,
        }}
        scrollEnabled={false}
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
                    : "transparent",
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
