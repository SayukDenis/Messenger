import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import MainUserPage from "./Pages/Profiles/DialogueProfile/MainUserScreen/MainUserScreen";
import AppNavigation from "./Pages/Profiles/GroupProfile/Navigation";
import DialogueProfile from "./Pages/Profiles/DialogueProfile/DialogueProfile";
import MainGroupPage from "./Pages/Profiles/GroupProfile/MainGroupPage/MainGroupPage";

export default function App() {
  return <AppNavigation />;
}
