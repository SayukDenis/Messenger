// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, Text, ViewStyle } from "react-native";
import { styles } from "../../../SemiComponents/ProfileStyles";

interface BranchAppearanceProps {
  emoji: string;
  name: string;
  color: string;
  style?: ViewStyle;
}

const BranchAppearance: React.FC<BranchAppearanceProps> = (props) => {
  return (
    <View style={[styles.branchAppearanceContainer, props.style]}>
      <View style={[styles.branchAvatar, { backgroundColor: props.color }]}>
        <Text style={{ fontSize: 24 }}>{props.emoji}</Text>
      </View>
      <View style={styles.branchTitleContainer}>
        <Text style={styles.branchTitle}>{props.name}</Text>
      </View>
    </View>
  );
};

export default BranchAppearance;
