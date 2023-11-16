// Viktor Hraboviuk

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChooseAuthor() {
  const navigation = useNavigation();

  const Viktor = () => {
    navigation.navigate("MainGroupPage" as never);
  };
  const Oleksii = () => {
    navigation.navigate("MainUserScreen" as never);
  };

  return (
    <View>
      <TouchableOpacity
        style={{ height: "50%", backgroundColor: "blue" }}
        onPress={Viktor}
      >
        <Text style={{ top: "50%", left: "35%", fontSize: 40, color: "white" }}>
          Viktor
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ height: "50%", backgroundColor: "yellow" }}
        onPress={Oleksii}
      >
        <Text style={{ top: "50%", left: "35%", fontSize: 40 }}>Oleksii</Text>
      </TouchableOpacity>
    </View>
  );
}
