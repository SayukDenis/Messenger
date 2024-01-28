import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StyleConfidentialityCenter from "./StyleConfidentialytiCenter";
import ButtonForSettings from '../../../../SemiComponents/ButtonForSettings';

const Confidentialitycenter : React.FC<any> = ({ navigation })=>{
    return <View style ={StyleConfidentialityCenter.centerConteiner}>
       <Text style ={StyleConfidentialityCenter.textStyle}>User</Text>
       <View style ={StyleConfidentialityCenter.buttonsConteiner}>   
            <TouchableOpacity onPress={() => navigation.navigate('BlockUsers')}>
                <ButtonForSettings text='Blocked users'></ButtonForSettings>
            </TouchableOpacity>
       </View>
       <Text style ={StyleConfidentialityCenter.textStyle}>Privacy</Text>
       <View style ={StyleConfidentialityCenter.buttonsConteiner}>   
            <TouchableOpacity><ButtonForSettings text='Number phone'></ButtonForSettings></TouchableOpacity>
       </View>
       <Text style ={StyleConfidentialityCenter.textStyle}>Password</Text>
       <View style ={StyleConfidentialityCenter.buttonsConteiner}>   
            <TouchableOpacity onPress={() => navigation.navigate('PasswordPage')}>
                <ButtonForSettings text='Password for Telentik'/>
            </TouchableOpacity>
       </View>
    </View>
}

export default Confidentialitycenter;