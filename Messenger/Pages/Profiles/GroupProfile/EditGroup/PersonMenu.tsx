//Viktor Hraboviuk

import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "./ProfileGroupStyles";

export const PersonMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false); // Початково приховане меню
  return (
    <View style={styles.PersonMenu}>
      <TouchableOpacity onPress={() => setMenuVisible(false)}>
        <Text style={{ color: "red" }}>
          В смітник
          <EvilIcons name="trash" size={20} color="red" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
