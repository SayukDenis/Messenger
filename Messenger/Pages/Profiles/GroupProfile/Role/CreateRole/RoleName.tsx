import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../../EditGroup/ProfileGroupStyles";

export const RoleName = ({ selectedEmoji }: { selectedEmoji: string }) => {
  const [roleName, setRoleName] = useState("");

  return (
    <View>
      <Text style={{ top: "40%", left: "5%", fontSize: 20 }}>Name</Text>
      <Text style={{ top: "20%", left: "5%", fontSize: 24 }}>
        {selectedEmoji}
      </Text>
      <TextInput
        style={styles.GroupName}
        onChangeText={(text) => {
          setRoleName(text);
        }}
        value={roleName}
      />
    </View>
  );
};
