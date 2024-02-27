// GroupNameInput.tsx
import React, { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "./ProfileGroupStyles";

interface GroupNameInputProps {
  setGroupHeadName: (value: string) => void;
}

export const GroupNameInput: React.FC<GroupNameInputProps> = (props) => {
  return (
    <View>
      <Text style={{ top: "40%", left: "5%", fontSize: 20 }}>Group name</Text>
      <TextInput
        style={styles.GroupName}
        onChangeText={(text) => {
          props.setGroupHeadName(text);
        }}
      />
    </View>
  );
};
