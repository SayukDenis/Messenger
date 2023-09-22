import { View,StyleSheet,Text,Dimensions } from 'react-native';
import ChatList from './Pages/ChatList/ChatList';
import React from 'react';


export default function App(){
  return(
    <View style={style.container}>
      <ChatList/>
    </View>
  );
}

const { width: screenWidth ,height:screenHeight} = Dimensions.get('window');
const style=StyleSheet.create(
    {
      container:{
        flex:1,
        backgroundColor:'#E3C07C'
      }
    }
  )