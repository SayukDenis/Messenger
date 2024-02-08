import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import StyleHeaderSavedMessage from './StyleHeadreSavedMessage';
import BackButton from '../../../SemiComponents/BackButton';
import SearchButton from '../../Notification/AddExeptionsNotifPage/AddExeptionsHeader/SvgComponent/SearchButton';

const HeaderSavedMessage: React.FC<any> = ({ navigation })=>{
    return (
        <View style = {StyleHeaderSavedMessage.container}>
            <TouchableOpacity style = {StyleHeaderSavedMessage.backButt} onPress={()=> navigation.goBack()}>
                <BackButton/>
            </TouchableOpacity>
            <View style = {StyleHeaderSavedMessage.SavedMessagesArticleConteiner}>
                <Text style = {StyleHeaderSavedMessage.SavedMessagesdArticleText}>Saved messages</Text>
            </View>
            <TouchableOpacity style = {StyleHeaderSavedMessage.searchButton}>
                <SearchButton/>
            </TouchableOpacity>
        </View>
    )
}
export default HeaderSavedMessage;