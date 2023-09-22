import { View, StyleSheet, StatusBar, Image } from 'react-native';
import StylesSettings from './StyleSetting';
import Header from './Header/Heder';
import Center from './Center/Center';

const Settingspage = () =>{
  return <View style = {StylesSettings.container}>
    <StatusBar hidden={true}/>
   <Header></Header>
   <Center></Center>
  </View>
}

export default Settingspage;