import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import StyleEditBioPageHeader from './StyleEditBioPage';

const EditBioPageHeader: React.FC<any> = ({ navigation })=>{
    return<View style ={StyleEditBioPageHeader.header}>
    <TouchableOpacity style ={StyleEditBioPageHeader.backButt} onPress={() => navigation.goBack() }><Text>but</Text></TouchableOpacity>
    <View style ={StyleEditBioPageHeader.conteinterUserName}><Text style={StyleEditBioPageHeader.UserName}>Your bio</Text></View>
    <TouchableOpacity style ={StyleEditBioPageHeader.backButt}><Text>Done</Text></TouchableOpacity>
    </View>
}

export default EditBioPageHeader;