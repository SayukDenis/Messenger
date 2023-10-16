import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navigation from './Pages/Settings/MainSettingPage/settingsPage/Center/Navigation';
export default function App() {

  const style = StyleSheet.create({
      conteiner:{
        flex:1,
        backgroundColorL:'#E3C07C',
      }
  });

  return <View style={style.conteiner}>
    <StatusBar hidden={true}/> 
    <Navigation></Navigation>
  </View>
}

