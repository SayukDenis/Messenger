import { registerRootComponent } from "expo";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  AppRegistry,
  SafeAreaView,
} from "react-native";
import ChatList from "./Pages/ChatList/ChatList";
import Authorization from "./Pages/Authorization/Authorization";
import PhoneCodeRegistration from "./Pages/Authorization/Pages/PhoneCodeRegistration";
import Registration from "./Pages/Authorization/Pages/Registration";
import CodePassword from "./Pages/CodePassword/CodePassword";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./ReducersAndActions/Reducers/ChatListActions/ChatListActions";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation/Navigation"
export default function App() {
  StatusBar.setBarStyle("dark-content");
  const store = createStore(rootReducer);
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <Provider store={store}>
        <Navigation/>
      </Provider>
    </SafeAreaProvider>
  );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

registerRootComponent(App);
AppRegistry.registerComponent("10", () => App);
AppRegistry.registerComponent("10".toLowerCase(), () => App);
