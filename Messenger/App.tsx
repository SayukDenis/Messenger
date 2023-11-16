import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";
import { addClasses } from "./dao/dao/create";
export default function App() {
  addClasses();
  return (
    <View style={style.container}>
      <Text >Start working!</Text>
    </View>
  );
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
    },
    text: {
      fontSize: 20,
      marginTop: -20,
    }
});

