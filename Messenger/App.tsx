import { registerRootComponent } from "expo";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";

import React from "react";

export default function App() {
 
  return (
      <View>
        <Text>Start working!</Text>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3C07C",
  },
});

registerRootComponent(App);

