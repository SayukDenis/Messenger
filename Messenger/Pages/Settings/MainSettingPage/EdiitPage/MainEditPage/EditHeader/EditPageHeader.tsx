import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import StyleEditPageHeader from './StyleEditPageHeader';
import BackButton from '../../../../../SemiComponents/BackButton';

const EditHeader: React.FC<any> = ({ navigation })=>{
    return<View style ={StyleEditPageHeader.container} >
    <TouchableOpacity style = {StyleEditPageHeader.backButt} onPress={() => navigation.goBack() }><BackButton/></TouchableOpacity>
    <View style ={StyleEditPageHeader.userNameConteiner}><Text style ={StyleEditPageHeader.userNameText}>User name</Text></View>
    </View>
}

export default EditHeader;