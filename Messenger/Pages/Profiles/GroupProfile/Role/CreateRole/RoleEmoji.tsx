import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";

export const RoleEmoji = ({
  onSelectEmoji,
}: {
  onSelectEmoji: (emoji: string) => void;
}) => {
  const emojis = [
    "😀",
    "😍",
    "👍",
    "👋",
    "🎉",
    "🤯",
    "😎",
    "🦫",
    "❤️",
    "🤡",
    "😂",
    "😡",
    "😭",
    "😋",
    "😐",
    "🤓",
    "😈",
    "🤢",
    "👽",
    "🤖",
    "😼",
  ];

  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [EmojiMenuOpen, setEmojiMenuOpen] = useState(false);

  // Функція для розділення emoji на рядки
  const chunkArray = (array: string[], chunkSize: number) => {
    const chunks: string[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const emojiRows = chunkArray(emojis, 7); // Розділити emojis на рядки по 7 emoji в кожному рядку

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "rgb(218, 182, 113)",
        left: "1.25%",
        flexWrap: "wrap", // Дозволяє emoji переносити на новий рядок
        width: EmojiMenuOpen ? "95%" : "12%",
      }}
    >
      {EmojiMenuOpen ? (
        <>
          {emojiRows.map((row, rowIndex) => (
            <View key={rowIndex} style={{ flexDirection: "row" }}>
              {row.map((emoji, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedEmoji(emoji);
                    onSelectEmoji(emoji);
                    setEmojiMenuOpen(true);
                  }}
                  style={{ padding: 10 }}
                >
                  <Text style={{ fontSize: 24 }}>{emoji}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
          <TouchableOpacity
            style={{ left: "93%", top: "2%", position: "absolute" }}
            onPress={() => {
              setEmojiMenuOpen(false);
            }}
          >
            <Text>✖️</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setSelectedEmoji(emojiRows[0][0]);
            onSelectEmoji(emojiRows[0][0]);
            setEmojiMenuOpen(true);
          }}
          style={{ padding: 10 }}
        >
          <Text style={{ fontSize: 24 }}>{emojiRows[0][0]}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
