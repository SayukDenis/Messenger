// Viktor Hraboviuk
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "./ProfileGroupStyles";

interface PersonMenuProps {
  setWhatMenuVisible: (visible: number) => void;
  handleTrashPress: () => void;
}

export const PersonMenu: React.FC<PersonMenuProps> = (props) => {
  return (
    <View style={styles.PersonMenu}>
      <TouchableOpacity onPress={props.handleTrashPress}>
        <Text style={{ color: "red" }}>
          В смітник
          <EvilIcons name="trash" size={20} color="red" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
