import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import StylePasswordHeader from "./StylePasswordHeader";


const PasswordHeader = ()=>{
    return<View style={StylePasswordHeader.header}>
            <TouchableOpacity style={StylePasswordHeader.backButContainer}><Text>But</Text></TouchableOpacity>
            <View style ={StylePasswordHeader.textconteinter}>
                <Text style = {StylePasswordHeader.styleText}>Lock code</Text>
            </View>
    </View>
}

export default PasswordHeader;