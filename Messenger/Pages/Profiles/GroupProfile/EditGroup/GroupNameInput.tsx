import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { State as GestureState, TextInput } from "react-native-gesture-handler";
import { styles } from "./ProfileGroupStyles";

export const GroupName = ({
  setGroupNameExample,
}: {
  setGroupNameExample: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [GroupName, setGroupName] = useState("");
  return (
    <View>
      <Text style={{ top: "40%", left: "5%", fontSize: 20 }}>Group name</Text>
      <TextInput
        style={styles.GroupName}
        onChangeText={(text) => {
          setGroupName(text); // Оновлено значення GroupName
        }}
        value={GroupName}
      />
    </View>
  );
};
