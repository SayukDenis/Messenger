import { registerRootComponent } from "expo";
import { StatusBar, AppRegistry } from "react-native";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./ReducersAndActions/ConfigureStore/ConfigureStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation/Navigation";
import Test from "./Resources/Test";
import { globalStyles } from "./Resources/styles";
import Look from "./Pages/Look/Look";
import { ThemeProvider } from "./Resources/ThemeProvider";

export default function App() {
  StatusBar.setBarStyle("dark-content");

  //const [isDarkTheme, setTheme] = useState(false);

  return (
    <ThemeProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <Provider store={store}>
        <Look />
      </Provider>
    </ThemeProvider>
  );
}
registerRootComponent(App);
AppRegistry.registerComponent("10", () => App);
AppRegistry.registerComponent("10".toLowerCase(), () => App);
