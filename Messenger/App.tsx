import { registerRootComponent } from "expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "./Resources/styles";
import { StatusBar, AppRegistry, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "./ReducersAndActions/ConfigureStore/ConfigureStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation/Navigation";
import Test from "./Resources/Test";
import Look from "./Pages/Look/Look";
export default function App() {
  StatusBar.setBarStyle("dark-content");

  return (
    <SafeAreaProvider style={{ backgroundColor: "red", flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
          <Navigation />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
}
registerRootComponent(App);
AppRegistry.registerComponent("10", () => App);
AppRegistry.registerComponent("10".toLowerCase(), () => App);
