import React from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Look from "../Look";
import Test from "../../../Resources/Test";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const ThemeNavigation = (theme_par: Theme) => {
  return (
    <NavigationContainer theme={theme_par}>
      <Stack.Navigator
        initialRouteName="Look"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Look" component={Look} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default connect(null)(ThemeNavigation);
