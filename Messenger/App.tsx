import { registerRootComponent } from "expo";
import { StatusBar, AppRegistry, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "./ReducersAndActions/ConfigureStore/ConfigureStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation/Navigation";
import { printSelfProfile } from './Initialization/Print';



export default function App() {
  StatusBar.setBarStyle("dark-content");

  printSelfProfile();

  return (<View></View>)

  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
}
registerRootComponent(App);
AppRegistry.registerComponent("10", () => App);
AppRegistry.registerComponent("10".toLowerCase(), () => App);