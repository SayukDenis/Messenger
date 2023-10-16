import React from "react";
import { StyleSheet,View,Button, Text, TouchableOpacity } from "react-native";
import StyleBlockUserHeader from "./StyleBlockUser";

const BlocUserHeader = ()=>{
    return <View style = {StyleBlockUserHeader.header}>
        <Button title ='but'></Button>
        <Text>Blocked users</Text>
        <TouchableOpacity><Text style={StyleBlockUserHeader.unblockButt}>Unblock</Text></TouchableOpacity>
    </View>
}

export default BlocUserHeader;