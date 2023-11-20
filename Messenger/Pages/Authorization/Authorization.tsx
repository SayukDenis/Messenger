import React from 'react';
import {ImageBackground,Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Style/Style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Authorization() {
  return (
    <ImageBackground source={require('./Image/Background.png')} style={styles.backgroundImage}>
       <Text style={styles.header}>Sign in to Telintik</Text>
       <Image source={require('./Image/AuthorizationImage.png')}
            style={styles.imageStyle}/>
      <Text style={styles.header}>Your phone Number</Text>
  
        <TextInput
          style={styles.input}
          placeholder="+123 00 000 00 00"
        />
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => alert('Create button clicked')}
      >
      <Text style={styles.createButtonText}>Create account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signInButton}
      >
      <Text style={styles.signInLaber}>Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
);
}