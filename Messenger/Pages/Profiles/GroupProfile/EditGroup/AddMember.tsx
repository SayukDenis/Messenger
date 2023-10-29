import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./ProfileGroupStyles";

export const AddMember = () => {
  return (
    <TouchableOpacity style={styles.AddMember}>
      <Text style={{ color: "rgb(92, 64, 129)", textAlign: "center" }}>
        + Member
      </Text>
    </TouchableOpacity>
  );
};
