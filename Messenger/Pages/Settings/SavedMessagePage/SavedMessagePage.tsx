import React from 'react';
import { View } from 'react-native';
import StyleSavedMessage from './StyleSavedMessage';
import HeaderSavedMessage from './HeaderSavedMessagePage.tsx/HeaderSavedMessage';

const SavedmessagePage: React.FC<any> = ({ navigation })=>{
    return <View style ={StyleSavedMessage.conteiner}>
    <HeaderSavedMessage navigation = {navigation}></HeaderSavedMessage>
    </View>
};

export default SavedmessagePage;