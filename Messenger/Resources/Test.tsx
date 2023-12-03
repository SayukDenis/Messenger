import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { globalStyles } from "./styles";

export default function Test() {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={globalStyles.header}>
        <Text>Random text, lol</Text>
      </View>
      <View style={{ flex: 1, alignContent: "flex-start" }}>
        <View style={globalStyles.button}>
          <Text>Aboba</Text>
        </View>
      </View>
      <View style={globalStyles.footer}>
        <Text>Random text, lol</Text>
      </View>
    </View>
  );
}
