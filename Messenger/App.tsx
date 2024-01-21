import { registerRootComponent } from "expo";
import { StatusBar, AppRegistry } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "./ReducersAndActions/ConfigureStore/ConfigureStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation/Navigation";
import { View } from "react-native";

export default function App() {
  StatusBar.setBarStyle("dark-content");


  
  return (<View></View>
  );
}
registerRootComponent(App);
AppRegistry.registerComponent("10", () => App);
AppRegistry.registerComponent("10".toLowerCase(), () => App);