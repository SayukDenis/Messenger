import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./ProfileGroupStyles";

interface GroupBioInputProps {
  setBioText: (value: string) => void;
}
export const GroupBio: React.FC<GroupBioInputProps> = (props) => {
  return (
    <View>
      <Text style={{ top: "-10%", left: "5%", fontSize: 20 }}>Bio</Text>
      <TextInput
        style={styles.BioText}
        onChangeText={(text) => {
          props.setBioText(text);
        }}
      />
    </View>
  );
};
