import { registerRootComponent } from "expo";
import { StatusBar, AppRegistry } from "react-native";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./ReducersAndActions/ConfigureStore/ConfigureStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initialization } from "./Initialization/Initialization";
import { dataSource } from "./dao/local/database";
import 'react-native-url-polyfill/auto';
import Navigation from "./Navigation/Navigation";

const manager = dataSource.manager;

export default function App() {
  StatusBar.setBarStyle("dark-content");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await initialization();
  //     if (!dataSource.isInitialized) await dataSource.initialize();
  //   };
  //   fetchData();
  // }, []);

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