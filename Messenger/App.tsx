import { registerRootComponent } from "expo";
import { StatusBar, AppRegistry, Text } from "react-native";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./ReducersAndActions/ConfigureStore/ConfigureStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation/Navigation";
import { initialization } from "./Initialization/Initialization";


export default function App() {
  StatusBar.setBarStyle("dark-content");

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    const fetchData = async () => {
      await initialization();
    };
    fetchData();
  }, []);
  return (
    <Text>Hello</Text>
    //<SafeAreaProvider>
    //  <StatusBar translucent backgroundColor="transparent" />
    //  <Provider store={store}>
    //    <Navigation />
    //  </Provider>
    //</SafeAreaProvider>
  );
}
registerRootComponent(App);
AppRegistry.registerComponent("10", () => App);
AppRegistry.registerComponent("10".toLowerCase(), () => App);
