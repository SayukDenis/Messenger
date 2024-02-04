import React from 'react';
import StyleConfidentHeader from './StyleHeader';
import { View, TouchableOpacity, Text } from 'react-native';
import BackButton from '../../../../SemiComponents/BackButton';

const Header : React.FC<any> = ({ navigation })=>{
    return<View style = {StyleConfidentHeader.container}>
            <TouchableOpacity style={StyleConfidentHeader.backButt} onPress={() => navigation.goBack() }><BackButton></BackButton></TouchableOpacity>
        <View style ={StyleConfidentHeader.ConfArticleConteiner}><Text style ={StyleConfidentHeader.ConfArticleText}>Confidentiality</Text></View>
    </View>
}

export default Header;