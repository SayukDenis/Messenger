// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import EyeIcon from "./Icons/EyeIcon";
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
        <View style={styles.elseFeaturesButtonsContainer}>
          {/* Private channel button */}
          <TouchableOpacity
            onPress={() => {
              props.onPrivatePress();
            }}
            style={styles.elseFeatureButton}
          >
            <EyeWithLineIcon style={styles.elseFeatureIcon} />
            <Text style={styles.elseFeatureTitle}>Private channe</Text>
          </TouchableOpacity>

          {/* Public channel button */}
          <TouchableOpacity
            onPress={() => {
              props.onPublicPress();
            }}
            style={styles.elseFeatureButton}
          >
            <EyeIcon style={styles.elseFeatureIcon} />
            <Text style={styles.elseFeatureTitle}>Public channel</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default TypeChannelMenu;
