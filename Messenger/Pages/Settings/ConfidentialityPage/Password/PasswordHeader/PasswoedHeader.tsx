import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import StylePasswordHeader from "./StylePasswordHeader";


const PasswordHeader: React.FC<any> = ({ navigation })=>{
    return<View style={StylePasswordHeader.header}>
            <TouchableOpacity style={StylePasswordHeader.backButContainer} onPress={() => navigation.goBack()}><Text>But</Text></TouchableOpacity>
            <View style ={StylePasswordHeader.textconteinter}>
                <Text style = {StylePasswordHeader.styleText}>Lock code</Text>
            </View>
    </View>
}

export default PasswordHeader;