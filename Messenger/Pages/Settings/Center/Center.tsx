import React from 'react';
import { View, Image, Button, Text,TouchableOpacity  } from 'react-native';
import StyleCentre from './StyleCenter';
import ButtonList from './ButtonLIst/Buttonlist';
import StyleButtonList from './ButtonLIst/StyleButtonLIst';

const Center =()=>{
    return <View style={StyleCentre.conteiner} >
           <Image style={StyleCentre.imgStyle} source={{uri:'https://www.meme-arsenal.com/memes/a297a80a2839282005e0a60135421919.jpg'}}></Image>
           <View style={StyleCentre.button}><Button title ="Edit" ></Button></View>
           <View style={StyleCentre.box}></View>
           <Text style= {StyleCentre.text}>Settings</Text>
           <ButtonList></ButtonList>
           <Text style= {StyleCentre.text}>Help</Text>
           <TouchableOpacity style={StyleButtonList.button}>
                <Text>Question in Telintik</Text>
           </TouchableOpacity>
            <TouchableOpacity style={StyleButtonList.button}>
                <Text>Ask a Question</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={StyleCentre.editButton} >
                <Text style={StyleCentre.editButtonText}>Edit</Text>
            </TouchableOpacity>
    </View>
}

export default Center;