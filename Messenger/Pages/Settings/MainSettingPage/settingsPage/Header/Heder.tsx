import React from "react";
import { View, Button, Text } from "react-native";
import StyleHeadr from "./StyleHeadr";

const Header = () => {
    return <View style ={StyleHeadr.header}>
         <View style ={StyleHeadr.container}>
         <View><Button title ="bacK" ></Button></View>
               <Text style = {StyleHeadr.tag}>tag</Text>
               <Text style = {StyleHeadr.userName}>Name</Text>
               <Text style = {StyleHeadr.phoneNumber}>phone</Text></View>
    </View>
}

export default Header;