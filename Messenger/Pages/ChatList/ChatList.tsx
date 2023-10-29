import { View } from "react-native"
import { Text,StyleSheet,Dimensions} from "react-native"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { mySelfUser } from "./1HelpFullFolder/Initialization";
import React, { useState } from 'react';
import Main from "./Components/Main";
 export default function ChatList(){
   const [touchable,setTouchable]=useState<boolean>(false);
   const onPress=()=>{
    setTouchable(!touchable);
   }
    return(
     <View style={styles.mainContainer}>
        <Header mySelfUser={mySelfUser} onPress={onPress} isTouchableHeader={touchable}/>
        <Main user={mySelfUser} onPressForTouchableHeader={onPress} isTouchableForHeader={touchable}/>
    </View>);
}

const styles = StyleSheet.create({
    mainContainer: {
      //backgroundColor:"blue",
      flex:1,
      
    }})