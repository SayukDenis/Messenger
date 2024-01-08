import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import StyleEditPageHeader from './StyleEditPageHeader';

const EditHeader: React.FC<any> = ({ navigation })=>{
    return<View style ={StyleEditPageHeader.header}>
    <TouchableOpacity style ={StyleEditPageHeader.backButt} onPress={() => navigation.goBack() }><Text>but</Text></TouchableOpacity>
    </View>
}

export default EditHeader;