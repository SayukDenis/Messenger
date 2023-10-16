import React from 'react';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
import StyleEditCenter from './StyleEditCenter';

const EditCenter =()=>{
    return <View style ={StyleEditCenter.conteiner}>
        <Image style={StyleEditCenter.avatar} source={{uri:'https://www.meme-arsenal.com/memes/a297a80a2839282005e0a60135421919.jpg'}}></Image>
        <TouchableOpacity style={StyleEditCenter.editPhotoButt}><Text>Edit photo</Text></TouchableOpacity>
        <View style ={StyleEditCenter.box}></View>
        <Text style ={StyleEditCenter.paragTextStyle}>Name</Text>
        <TextInput style ={StyleEditCenter.inputText} placeholder='First name (required)'/>
        <TextInput style ={StyleEditCenter.inputText} placeholder='Last name (optional)'/>
        <Text style ={StyleEditCenter.paragTextStyle}>Bio</Text>
        <TextInput style ={StyleEditCenter.inputText} placeholder='Your bio'/>
        <Text style ={StyleEditCenter.paragTextStyle}>Edit info</Text>
        <TextInput style ={StyleEditCenter.inputText} placeholder='@yourname'/>
        <TextInput style ={StyleEditCenter.inputText} placeholder='edit your number'/>
    </View>
}

export default EditCenter;