import React from 'react';
import { View } from 'react-native';
import EditHeader from './EditHeader/EditPageHeader';
import EditCenter from './EditCenter/EditCenter';
import StyleEditPage from './StyleEditPage';

const EditPage: React.FC<any> = ({ navigation })=>{
    return<View style = {StyleEditPage.EditPageConteiner}>
        <EditHeader navigation = {navigation} ></EditHeader>
        <EditCenter navigation = {navigation}></EditCenter>
    </View>
}

export default EditPage;