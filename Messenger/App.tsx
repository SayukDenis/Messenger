import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react';
import Settingspage from './Pages/Settings/Settings';
export default function App() {

  const style = StyleSheet.create({
      conteiner:{
        flex:1,
        backgroundColor:'#E3C07C'
      }
  });

  return <View style={style.conteiner}>
    <Settingspage></Settingspage>
  </View>
}

