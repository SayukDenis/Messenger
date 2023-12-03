import { registerRootComponent } from "expo";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  AppRegistry,
} from "react-native";
import ChatList from "./Pages/ChatList/ChatList";
import Authorization from "./Pages/Authorization/Authorization";
import PhoneCodeRegistration from "./Pages/Authorization/Pages/PhoneCodeRegistration";
import Registration from "./Pages/Authorization/Pages/Registration";
import CodePassword from "./Pages/CodePassword/CodePassword";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./ReducersAndActions/Reducers/ChatListActions/ChatListActions";
import Dialogue from "./Pages/Chats/Dialogue/Dialogue";
import StartPage from "./Pages/Profiles/SemiComponents/Navigation";
import Navigation from "./Pages/Settings/Navigation";

export default function App() {
  StatusBar.setBarStyle("dark-content");
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <StartPage />
    </Provider>
  );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3C07C",
  },
});
registerRootComponent(App);
AppRegistry.registerComponent("10", () => App);
AppRegistry.registerComponent("10".toLowerCase(), () => App);
