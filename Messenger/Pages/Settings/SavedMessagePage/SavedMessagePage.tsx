import React from 'react';
import { View } from 'react-native';
import StyleSavedMessage from './StyleSavedMessage';
import HeaderSavedMessage from './HeaderSavedMessagePage.tsx/HeaderSavedMessage';
import FooterSavedMessage from './Footer/FooterSavedMessage';
import CenterSavedMessage from './CenterSavedMessage/CenterSavedMessage';
import BackGroundGradientView from '../../SemiComponents/BackGroundGradientView';
import HeaderContainer from '../../SemiComponents/HeaderContainer';

const SavedmessagePage: React.FC<any> = ({ navigation })=>{
    return <BackGroundGradientView >
    <HeaderContainer><HeaderSavedMessage navigation = {navigation}/></HeaderContainer>
    <CenterSavedMessage></CenterSavedMessage>
    <FooterSavedMessage></FooterSavedMessage>
    </BackGroundGradientView>
};

export default SavedmessagePage;