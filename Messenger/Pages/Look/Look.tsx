import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { globalStyles } from "../../Resources/styles";
import { Text } from "react-native";

const Look = () => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#D7B168", "#D783FF"]}
    >
      <View style={globalStyles.header}>
        <Text style={{}}>Look</Text>
      </View>
    </LinearGradient>
  );
};

export default Look;
