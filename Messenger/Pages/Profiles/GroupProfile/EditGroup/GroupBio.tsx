import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./ProfileGroupStyles";

export const GroupBio = ({
  setBioTextExample,
}: {
  setBioTextExample: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [BioText, setBioText] = useState("");

  return (
    <View>
      <Text style={{ top: "-10%", left: "5%", fontSize: 20 }}>Bio</Text>
      <TextInput
        style={styles.BioText} // Ви маєте мати визначений стиль BioText в ProfileGroupStyles
        onChangeText={(text) => {
          setBioText(text); // Оновлено значення BioText
        }}
        value={BioText}
      />
    </View>
  );
};
