import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react';
import React from 'react';
import Settingspage from './Pages/Settings/MainSettingPage/settingsPage/Settings';
import ConfidentialityPage from './Pages/Settings/ConfidentialityPage/MainConfidentiality/ConfidentialPage';
import BlockUser from './Pages/Settings/ConfidentialityPage/BlockedUser/BlockUser';
import PasswordPage from './Pages/Settings/ConfidentialityPage/Password/Password';
import EditPage from './Pages/Settings/MainSettingPage/EdiitPage/EditPage';
import QuestionPage from './Pages/Settings/Questionspage/Questionspage';
import SavedmessagePage from './Pages/Settings/SavedMessagePage/SavedMessagePage';
import Navigation from './Pages/Settings/MainSettingPage/settingsPage/Center/Navigation';
export default function App() {

  const style = StyleSheet.create({
      conteiner:{
        flex:1,
      }
  });

  return <View style={style.conteiner}>
    <StatusBar hidden={true}/> 
    <Navigation></Navigation>
  </View>
}

