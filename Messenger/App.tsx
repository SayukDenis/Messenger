import React from "react";
import { useFonts } from "expo-font";
import DialogueProfile from "./Pages/Profiles/DialogueProfile/DialogueProfile";
import AppNavigation from "./Pages/Profiles/GroupProfile/Navigation";

export default function App() {
  const [dataLoaded] = useFonts({
    "JacquesFrancois-Regular": require("./Pages/Profiles/SemiComponents/Assets/JacquesFrancois-Regular.ttf"),
  });

  if (!dataLoaded) {
    return null;
  }
  return <AppNavigation />;
}
