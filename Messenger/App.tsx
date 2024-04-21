import { registerRootComponent } from "expo";
import { StatusBar, AppRegistry, View, Text } from "react-native";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./ReducersAndActions/ConfigureStore/ConfigureStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StartPage from "./Pages/Profiles/SemiComponents/Navigation";
import { initialization } from "./Initialization/Initialization";
import { Run } from "./dao/test/manualTest/_orchestrator";

export default function App() {
  StatusBar.setBarStyle("dark-content");
  useEffect(() => {
    const fetchData = async () => {
      await initialization();
    };
    fetchData();
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <Provider store={store}>
        <StartPage />
      </Provider>
    </SafeAreaProvider>
  );
}
registerRootComponent(App);
AppRegistry.registerComponent("10", () => App);
AppRegistry.registerComponent("10".toLowerCase(), () => App);
