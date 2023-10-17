import React from 'react';
import { View } from 'react-native';
import StyleSavedMessage from './StyleSavedMessage';
import HeaderSavedMessage from './HeaderSavedMessagePage.tsx/HeaderSavedMessage';
import FooterSavedMessage from './Footer/FooterSavedMessage';
import CenterSavedMessage from './CenterSavedMessage/CenterSavedMessage';

const SavedmessagePage: React.FC<any> = ({ navigation })=>{
    return <View style ={StyleSavedMessage.conteiner}>
    <HeaderSavedMessage navigation = {navigation}></HeaderSavedMessage>
    <CenterSavedMessage></CenterSavedMessage>
    <FooterSavedMessage></FooterSavedMessage>
    </View>
};

export default SavedmessagePage;