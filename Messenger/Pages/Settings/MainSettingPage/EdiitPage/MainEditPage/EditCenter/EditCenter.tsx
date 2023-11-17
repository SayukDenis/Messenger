import React from 'react';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
import StyleEditCenter from './StyleEditCenter';

const EditCenter: React.FC<any> = ({ navigation })=>{
    return <View style ={StyleEditCenter.conteiner}>
        <Image style={StyleEditCenter.avatar} source={{uri:'https://www.meme-arsenal.com/memes/a297a80a2839282005e0a60135421919.jpg'}}></Image>
        <TouchableOpacity style={StyleEditCenter.editPhotoButt}><Text>Edit photo</Text></TouchableOpacity>
        <View style ={StyleEditCenter.box}></View>
        <Text style ={StyleEditCenter.paragTextStyle}>Name</Text>
        <TextInput style ={StyleEditCenter.inputText} placeholder='First name (required)'/>
        <TextInput style ={StyleEditCenter.inputText} placeholder='Last name (optional)'/>
        <Text style ={StyleEditCenter.paragTextStyle}>Bio</Text>
        <TouchableOpacity style ={StyleEditCenter.buttonConteiner} onPress={() => navigation.navigate('EditBioPage')} ><Text>Your bio</Text></TouchableOpacity>
        <Text style ={StyleEditCenter.paragTextStyle}>Edit info</Text>
        <TouchableOpacity style ={StyleEditCenter.buttonConteiner} onPress={() => navigation.navigate('EditUsernamePage')} ><Text>@yourname</Text></TouchableOpacity>
        <TouchableOpacity style ={StyleEditCenter.buttonConteiner} ><Text>Edit your number</Text></TouchableOpacity>
    </View>
}

export default EditCenter;