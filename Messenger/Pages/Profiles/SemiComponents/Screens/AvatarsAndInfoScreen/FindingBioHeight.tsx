// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, Text, Dimensions } from "react-native";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";
import { styles } from "./Styles";

interface FindingBioHeightProps {
  setBioTextHeight: (value: number) => void;
}

export const FindingBioHeight: React.FC<FindingBioHeightProps> = (props) => {
  return (
    <View
      style={[
        styles.infoView,
        {
          height: "100%",
          left: -2 * Dimensions.get("screen").width,
          position: "absolute",
          opacity: 1,
          backgroundColor: "red",
        },
      ]}
    >
      <Text
        style={[styles.infoTitle, { color: "rgba(255, 255, 255, 0.54)" }]}
        onLayout={(event) => {
          props.setBioTextHeight(event.nativeEvent.layout.height);
        }}
      >
        <Text style={styles.infoTitle}>Bio:</Text>
        {GetProfile().bio}
      </Text>
    </View>
  );
};
