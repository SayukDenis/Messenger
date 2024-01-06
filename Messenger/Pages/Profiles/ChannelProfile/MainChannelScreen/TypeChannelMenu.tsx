// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import EyeIcon from "../../SemiComponents/MainScreen/Icons/EyeIcon";
import EyeWithLineIcon from "./Icons/EyeWithLineIcon";

interface TypeChannelMenuProps {
  isVisible: boolean;
  onPrivatePress: () => void;
  onPublicPress: () => void;
}

const TypeChannelMenu: React.FC<TypeChannelMenuProps> = (props) => {
  return (
    <>
      {props.isVisible && (
        <View style={styles.typeChannelMenuContainer}>
          {/* Private channel button */}
          <TouchableOpacity
            onPress={() => {
              props.onPrivatePress();
            }}
            style={styles.typeChannelMenuButton}
          >
            <EyeWithLineIcon style={styles.typeChannelMenuIcon} />
            <Text style={styles.typeChannelMenuTitle}>Private channe</Text>
          </TouchableOpacity>

          {/* Public channel button */}
          <TouchableOpacity
            onPress={() => {
              props.onPublicPress();
            }}
            style={styles.typeChannelMenuButton}
          >
            <EyeIcon style={styles.typeChannelMenuIcon} />
            <Text style={styles.typeChannelMenuTitle}>Public channel</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default TypeChannelMenu;
