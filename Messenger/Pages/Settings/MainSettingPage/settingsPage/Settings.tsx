import { View, StatusBar } from 'react-native';
import React from 'react';
import StylesSettings from './StyleSetting';
import Header from './Header/Heder';
import Center from './Center/Center';
import BackGroundGradientView from '../../../SemiComponents/BackGroundGradientView';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import { heightOfHeader } from '../../../ChatList/Constants/ConstantsForChatlist';
import { ScrollView } from 'react-native-gesture-handler';

const Settingspage: React.FC<any> = ({ navigation })=>{
  return <BackGroundGradientView>
            <View style = {StylesSettings.container}>
                <HeaderContainer><Header navigation= {navigation}></Header></HeaderContainer>
                
                        <Center navigation= {navigation}></Center>
            </View>
  </BackGroundGradientView>
  
}

export default Settingspage;