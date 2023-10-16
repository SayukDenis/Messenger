import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import StyleEditPageHeader from './StyleEditPageHeader';

const EditHeader = ()=>{
    return<View style ={StyleEditPageHeader.header}>
    <TouchableOpacity style ={StyleEditPageHeader.backButt}><Text>but</Text></TouchableOpacity>
    <View style ={StyleEditPageHeader.conteinterUserName}><Text style={StyleEditPageHeader.UserName}>Alekseks</Text></View>
    </View>
}

export default EditHeader;