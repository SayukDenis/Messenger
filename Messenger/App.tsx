import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react';
import Settingspage from './Pages/Settings/Settings';
export default function App() {
  return (
    <div >
      <Settingspage></Settingspage>
    </div>
  );
}

