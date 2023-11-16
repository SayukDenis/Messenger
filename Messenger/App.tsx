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
import Authorization from './Pages/Authorization/Authorization'; 
import PhoneCodeRegistration from './Pages/Authorization/Pages/PhoneCodeRegistration';
import Registration from './Pages/Authorization/Pages/Registration';
import CodePassword from './Pages/CodePassword/CodePassword'; 
import "tailwindcss-react-native/types.d";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer} from "./ReducersAndActions/Reducers/ChatListActions/ChatListActions";
import Dialogue from "./Pages/Chats/Dialogue/Dialogue";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TailwindProvider } from 'tailwindcss-react-native'
export default function App() {
  StatusBar.setBarStyle("dark-content");
  const Stack = createStackNavigator();
  const store=createStore(rootReducer)
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Dialogue' component={Dialogue} options={{ headerShown:false }}/>
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}

// <LinearGradient style={{flex:1}} start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#D7B168', '#D783FF']}>
// 
// </LinearGradient>

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
