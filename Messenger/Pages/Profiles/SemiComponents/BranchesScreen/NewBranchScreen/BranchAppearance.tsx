// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { styles } from "../Styles";
import { LinearGradient } from "expo-linear-gradient";

interface BranchAppearanceProps {
  emoji: string;
  name: string;
  color: string;
  style?: ViewStyle;
}

const BranchAppearance: React.FC<BranchAppearanceProps> = (props) => {
  return (
    <View style={[styles.branchAppearanceContainer, props.style]}>
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        style={[styles.linearGradient, { opacity: 0.7 }]}
      />
      <View
        style={[
          styles.branchAvatarWhileCreatingBranch,
          { backgroundColor: props.color },
        ]}
      >
        <Text style={{ fontSize: 24 }}>{props.emoji}</Text>
      </View>
      <View style={styles.branchTitleContainer}>
        <Text style={styles.branchTitleWhileCreating}>{props.name}</Text>
      </View>
    </View>
  );
};

export default BranchAppearance;
