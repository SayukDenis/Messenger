// Viktor Hraboviuk

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChooseAuthor() {
  const navigation = useNavigation();

  return (
    <View>
      {/* Group */}
      <TouchableOpacity
        style={{
          height: "33.333%",
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("GroupNavigation" as never);
        }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Group</Text>
      </TouchableOpacity>

      {/* User */}
      <TouchableOpacity
        style={{
          height: "33.333%",
          backgroundColor: "yellow",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("UserNavigation" as never);
        }}
      >
        <Text style={{ fontSize: 40 }}>User</Text>
      </TouchableOpacity>

      {/* Channel */}
      <TouchableOpacity
        style={{
          height: "33.333%",
          backgroundColor: "magenta",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.navigate("ChannelNavigation" as never);
        }}
      >
        <Text style={{ fontSize: 40 }}>Channel</Text>
      </TouchableOpacity>
    </View>
  );
}
