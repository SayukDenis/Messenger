import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "./ProfileGroupStyles";
import { PersonMenu } from "./PersonMenu";
import { UserProps } from "../../SemiComponents/DBUser";

export const User: React.FC<UserProps> = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.PersonBg}
        onLongPress={() => setMenuVisible(true)}
      >
        {menuVisible && <PersonMenu />}
        <Image style={styles.PersonIcon} source={{ uri: props.ImagePath }} />
        <Text style={styles.PersonNick}>{props.Nickname}</Text>
      </TouchableOpacity>
    </View>
  );
};
