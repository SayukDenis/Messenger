// Oleksii Kovalenko telegram - @traewe

import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Navigation from "./Navigation.tsx";

const Stack = createStackNavigator();

const DialogueProfile = () => {
  const [dataLoaded] = useFonts({
    "JacquesFrancois-Regular": require("../SemiComponents/Assets/JacquesFrancois-Regular.ttf"),
  });

  if (!dataLoaded) {
    return null;
  }

  return <Navigation />;
};

export default DialogueProfile;
