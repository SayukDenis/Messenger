import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../ChannelProfile/SettingsScreen/Styles";
import RightArrow from "../../SemiComponents/Assets/Icons/RightArrow";

interface SettingsBranchesButtonProps {
  onPress: () => void;
}

const SettingsBranchesButton: React.FC<SettingsBranchesButtonProps> = (
  props
) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={styles.settingOption}
    >
      <Text style={styles.settingOptionTitle}>Branches</Text>
      <RightArrow style={styles.settingOptionRightArrow} />
    </TouchableOpacity>
  );
};

export default SettingsBranchesButton;
