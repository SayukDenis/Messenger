import React from "react";
import {View, Text, TouchableOpacity } from "react-native";
import StyleBlockUserHeader from "./StyleBlockUser";

const BlocUserHeader: React.FC<any> = ({ navigation })=> {
    return <View style = {StyleBlockUserHeader.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text>but</Text></TouchableOpacity>
        <Text>Blocked users</Text>
        <TouchableOpacity><Text style={StyleBlockUserHeader.unblockButt}>Unblock</Text></TouchableOpacity>
    </View>
}

export default BlocUserHeader;