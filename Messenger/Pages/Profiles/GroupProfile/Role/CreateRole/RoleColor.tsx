import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../../EditGroup/ProfileGroupStyles";

export const RoleColorPicker = ({
  onSelectColor,
}: {
  onSelectColor: (color: string) => void;
}) => {
  const colors = ["black", "red", "blue", "green", "white", "purple"];
  const [selectedColor, setSelectedColor] = useState(colors[0]); // Вибраний колір - перший в списку

  const [colorPaletteOpen, setColorPaletteOpen] = useState(false);

  return (
    <View
      style={{
        width: colorPaletteOpen ? "95%" : "12%",
        height: colorPaletteOpen ? "15%" : "6.2%",
        bottom: "13.2%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgb(218, 182, 113)", // Змініть колір фону на потрібний
        left: colorPaletteOpen ? "1.25%" : "20%",
        borderRadius: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setColorPaletteOpen(true); // Переключення стану палітри кольорів
        }}
        style={{
          backgroundColor: colorPaletteOpen ? "rgb(218, 182, 113)" : colors[0],
          width: 30,
          height: 30,
          borderRadius: 15,
          left: "16%",
        }}
      ></TouchableOpacity>
      {colorPaletteOpen && (
        // Показувати палітру кольорів тільки якщо відкрита
        <View style={{ flexDirection: "row" }}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedColor(color);
                onSelectColor(color);
              }}
              style={{
                backgroundColor: color,
                width: 30,
                height: 30,
                borderRadius: 15,
                margin: 5,
                right: "20%",
                bottom: "9%",
              }}
            ></TouchableOpacity>
          ))}
          <TouchableOpacity
            style={{
              left: "115%",
              bottom: "40%",
              position: "absolute",
            }}
            onPress={() => {
              setColorPaletteOpen(false);
            }}
          >
            <Text>✖️</Text>
          </TouchableOpacity>
          <View style={{ top: "10%", backgroundColor: "rgb(227, 192, 124)" }}>
            <Text style={{ color: selectedColor }}>Aboba</Text>
          </View>
        </View>
      )}
    </View>
  );
};
