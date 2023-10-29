import React from 'react';
import StyleHeader from "./StyleHeader";
import { View, TouchableOpacity, Text } from 'react-native';

const Header : React.FC<any> = ({ navigation })=>{
    return<View style = {StyleHeader.header}>
        <View style = {StyleHeader.backButContainer} >
            <TouchableOpacity style={StyleHeader.backbutton} onPress={() => navigation.goBack() }><Text>Back</Text></TouchableOpacity>
        </View>
        <View style ={StyleHeader.conteinerConfidentialityPage}><Text>Confidentiality</Text></View>
    </View>
}

export default Header;