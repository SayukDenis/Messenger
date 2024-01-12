// Viktor Hraboviuk
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./ProfileGroupStyles";
import { UserProps, user } from "../../SemiComponents/DBUser";
import { PersonMenu } from "./PersonMenu";

export const User: React.FC<UserProps> = (props) => {
  const [visibleState, setVisibleState] = useState(
    props.members.map(() => true)
  );
  const [whatMenuVisible, setWhatMenuVisible] = useState(-1);

  const handleMenuPress = (index: number) => {
    setWhatMenuVisible(index);
  };

  const handleTrashPress = (index: number) => {
    const updatedVisibleState = [...visibleState];
    updatedVisibleState[index] = false;
    setVisibleState(updatedVisibleState);
    setWhatMenuVisible(-1);
  };

  return (
    <View>
      {props.members.map((item, index) => {
        // Перевірка видимості для кожного конкретного юзера
        if (!visibleState[index]) {
          return null;
        }

        return (
          <TouchableOpacity
            key={index}
            style={styles.PersonBg}
            onLongPress={() => handleMenuPress(index)}
          >
            <Image
              style={styles.PersonIcon}
              source={{ uri: props.ImagePath }}
            />
            <Text style={styles.PersonNick}>{item.name}</Text>
            {whatMenuVisible === index && (
              <PersonMenu
                setWhatMenuVisible={setWhatMenuVisible}
                handleTrashPress={() => handleTrashPress(index)}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
