import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import StyleHeadr from "./StyleHeadr";

const Header:React.FC<any> = ({navigation}) => {
    return <View style ={StyleHeadr.header}>
         <View style ={StyleHeadr.container}>
         <View><TouchableOpacity onPress ={()=> navigation.goBack()}><Text>Back</Text></TouchableOpacity>
         </View>
               <Text style = {StyleHeadr.tag}>tag</Text>
               <Text style = {StyleHeadr.userName}>Name</Text>
               <Text style = {StyleHeadr.phoneNumber}>phone</Text></View>
    </View>
}

export default Header;