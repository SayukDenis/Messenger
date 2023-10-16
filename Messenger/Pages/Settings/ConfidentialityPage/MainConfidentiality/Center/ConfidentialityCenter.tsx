import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StyleConfidentialityCenter from "./StyleConfidentialytiCenter";

const Confidentialitycenter = ()=>{
    return <View style ={StyleConfidentialityCenter.centerConteiner}>
       <Text style ={StyleConfidentialityCenter.textStyle}>User</Text>
       <View style ={StyleConfidentialityCenter.buttonsConteiner}>   
            <TouchableOpacity style ={StyleConfidentialityCenter.centerButtons}>
                <Text style ={StyleConfidentialityCenter.buttonText}>Blocked User</Text>
                <TouchableOpacity style= {StyleConfidentialityCenter.backButton}>
                    <Text style ={StyleConfidentialityCenter.buttonText}>back</Text>
                </TouchableOpacity>
            </TouchableOpacity>
       </View>
       <Text style ={StyleConfidentialityCenter.textStyle}>Privacy</Text>
       <View style ={StyleConfidentialityCenter.buttonsConteiner}>   
            <TouchableOpacity style ={StyleConfidentialityCenter.centerButtons}>
                <Text style ={StyleConfidentialityCenter.buttonText}>Number phone</Text>
                <TouchableOpacity style= {StyleConfidentialityCenter.backButton}>
                    <Text style ={StyleConfidentialityCenter.buttonText}>back</Text>
                </TouchableOpacity>
            </TouchableOpacity>
       </View>
       <Text style ={StyleConfidentialityCenter.textStyle}>Password</Text>
       <View style ={StyleConfidentialityCenter.buttonsConteiner}>   
            <TouchableOpacity style ={StyleConfidentialityCenter.centerButtons}>
                <Text style ={StyleConfidentialityCenter.buttonText}>Password for Telentik</Text>
                <TouchableOpacity style= {StyleConfidentialityCenter.backButton}>
                    <Text style ={StyleConfidentialityCenter.buttonText}>back</Text>
                </TouchableOpacity>
            </TouchableOpacity>
       </View>
    </View>
}

export default Confidentialitycenter;