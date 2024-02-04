import React from "react";
import {View, Text, TouchableOpacity } from "react-native";
import StyleBlockUserHeader from "./StyleBlockUser";
import BackButton from "../../../../SemiComponents/BackButton";

const BlocUserHeader: React.FC<any> = ({ navigation })=> {
    return <View style = {StyleBlockUserHeader.container} >
        <TouchableOpacity style ={StyleBlockUserHeader.backButt} onPress={() => navigation.goBack()}><BackButton></BackButton></TouchableOpacity>
        <View style ={StyleBlockUserHeader.BlockUserArticleConteiner}><Text style={StyleBlockUserHeader.BlockUserArticleText}>Blocked users</Text></View>
        <TouchableOpacity style ={StyleBlockUserHeader.UnblockButt}><Text>Unblock</Text></TouchableOpacity>
    </View>
}

export default BlocUserHeader;