import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./ProfileGroupStyles";
import { UserProps } from "../../SemiComponents/DBUser";
import { PersonMenu } from "./PersonMenu";

export const User: React.FC<UserProps> = (props) => {
  const [whatMenuVisible, setWhatMenuVisible] = useState(-1);

  return (
    <View>
      {props.MembersName.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.PersonBg}
          onLongPress={() => setWhatMenuVisible(index)}
        >
          <Image style={styles.PersonIcon} source={{ uri: props.ImagePath }} />
          <Text style={styles.PersonNick}>{item.name}</Text>
          {whatMenuVisible === index && (
            <PersonMenu setWhatMenuVisible={setWhatMenuVisible} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};
