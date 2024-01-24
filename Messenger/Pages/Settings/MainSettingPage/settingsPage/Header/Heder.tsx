import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import StyleHeadr from "./StyleHeadr";
import BackButton from "../../../../SemiComponents/BackButton";

const Header:React.FC<any> = ({navigation}) => {
    return <View>
         <View style ={StyleHeadr.container}>
                <View style={StyleHeadr.backButt}><TouchableOpacity onPress ={()=> navigation.goBack()}><BackButton></BackButton></TouchableOpacity></View>
                <View style = {StyleHeadr.userNameConteiner}><Text style={StyleHeadr.userNameText}>Name</Text></View>
          </View>     
    </View>
}

export default Header;