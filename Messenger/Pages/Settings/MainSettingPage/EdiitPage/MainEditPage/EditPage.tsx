import React from 'react';
import { View,Text } from 'react-native';
import EditHeader from './EditHeader/EditPageHeader';
import EditCenter from './EditCenter/EditCenter';
import StyleEditPage from './StyleEditPage';
import HeaderContainer from '../../../../SemiComponents/HeaderContainer';
import { heightOfHeader } from '../../../../ChatList/Constants/ConstantsForChatlist';
import BackGroundGradientView from '../../../../SemiComponents/BackGroundGradientView';

const EditPage: React.FC<any> = ({ navigation })=>{
    return<BackGroundGradientView>
        <View style = {StyleEditPage.EditPageConteiner}>
        <HeaderContainer><EditHeader navigation = {navigation} ></EditHeader></HeaderContainer>
        <View style = {{marginTop:heightOfHeader}}></View>
        <EditCenter navigation = {navigation}></EditCenter>
    </View>
    </BackGroundGradientView>
}

export default EditPage;