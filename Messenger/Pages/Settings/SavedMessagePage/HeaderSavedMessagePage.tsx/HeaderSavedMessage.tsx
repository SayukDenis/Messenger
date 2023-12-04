import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import StyleHeaderSavedMessage from './StyleHeadreSavedMessage';

const HeaderSavedMessage: React.FC<any> = ({ navigation })=>{
    return <View style ={StyleHeaderSavedMessage.header}> 
        <View style ={StyleHeaderSavedMessage.headerContainer}>
            <TouchableOpacity onPress={()=> navigation.goBack()}><Text>But</Text></TouchableOpacity>
            <Text>Saved Message</Text>
            <TouchableOpacity><Text>search</Text></TouchableOpacity>
        </View>
    </View>
}

export default HeaderSavedMessage;