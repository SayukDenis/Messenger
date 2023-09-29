import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import MainUserPage from "./Pages/Profiles/DialogueProfile/MainUserPage/MainUserPage";
import AppNavigation from "./Pages/Profiles/GroupProfile/Navigation";

export default function App() {
  return <MainUserPage />;
}
