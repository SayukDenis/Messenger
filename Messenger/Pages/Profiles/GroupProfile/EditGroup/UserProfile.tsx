import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./ProfileGroupStyles";
import { PersonMenu } from "./PersonMenu";
import { UserProps } from "../../SemiComponents/DBUser";

export const User: React.FC<UserProps> = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View>
      {props.MembersName.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.PersonBg}
          onLongPress={() => setMenuVisible(true)}
        >
          {menuVisible && <PersonMenu />}
          <Image style={styles.PersonIcon} source={{ uri: props.ImagePath }} />
          <Text style={styles.PersonNick}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
