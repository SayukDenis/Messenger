import React from 'react';
import { View,Image } from 'react-native';
import { headerstyles } from '../Styles/HeaderStyle';
import MagnifyingGlass from './Headers containers/MagnifyingGlass';
import ModeActivity from './Headers containers/ModeActivity';
import ModeOfEmployment from './Headers containers/ModeOfEmployment';
import Line from './Headers containers/Line';
import MySelfUser from '../1HelpFullFolder/MySelfUser';
export default function Header({ mySelfUser }: { mySelfUser: MySelfUser }) {
   
  return (
    <View style={headerstyles.container}>
      <MagnifyingGlass style={headerstyles.magnifyingglass}/>
      <View style={headerstyles.containerforavatar}>
      <Image source={{uri:mySelfUser.urlForPicture}} style={headerstyles.avatar}></Image>
      <ModeActivity style={headerstyles.modeactivity}/>
      </View>
      <ModeOfEmployment/>
      <View style={headerstyles.hamburgerview}>
        <Line style={headerstyles.lineForHamburger}/>
        <Line style={headerstyles.lineForHamburger}/>
        <Line style={headerstyles.lineForHamburger}/>
      </View>
    </View>
  );
}
