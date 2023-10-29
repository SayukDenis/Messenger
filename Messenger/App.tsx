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
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer} from "./ReducersAndActions/Reducers/ChatListActions/ChatListActions";
export default function App() {
  StatusBar.setBarStyle("dark-content");
  const store=createStore(rootReducer)
  return (
    <Provider store={store}>
      <View style={style.container}>
        <ChatList />
      </View>
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
