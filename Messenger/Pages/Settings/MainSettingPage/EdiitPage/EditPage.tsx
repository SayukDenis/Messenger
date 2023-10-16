import React from 'react';
import { View } from 'react-native';
import EditHeader from './EditHeader/EditPageHeader';
import EditCenter from './EditCenter/EditCenter';
import StyleEditPage from './StyleEditPage';

const EditPage = ()=>{
    return<View style = {StyleEditPage.EditPageConteiner}>
        <EditHeader></EditHeader>
        <EditCenter></EditCenter>
    </View>
}

export default EditPage;