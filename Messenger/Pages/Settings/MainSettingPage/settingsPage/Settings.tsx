import { View, StatusBar } from 'react-native';
import StylesSettings from './StyleSetting';
import Header from './Header/Heder';
import Center from './Center/Center';

const Settingspage: React.FC<any> = ({ navigation })=>{
  return <View style = {StylesSettings.container}>
    <StatusBar hidden={true}/>
    <Header></Header>
   <Center navigation= {navigation}></Center>
  </View>
}

export default Settingspage;