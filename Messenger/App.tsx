import { registerRootComponent } from "expo";
import { StatusBar, AppRegistry } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "./ReducersAndActions/ConfigureStore/ConfigureStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation/Navigation";
import { View } from "react-native";
import { printSelfProfile } from "./Initialization/Print";
import DataBase from "./dao/dao/Database";

export default function App() {
  StatusBar.setBarStyle("dark-content");
  //printSelfProfile();
  
  DataBase.getInstance().then(db => db.createDatabaseAsync());

  return (<View></View>);
}
registerRootComponent(App);
AppRegistry.registerComponent("10", () => App);
AppRegistry.registerComponent("10".toLowerCase(), () => App);
