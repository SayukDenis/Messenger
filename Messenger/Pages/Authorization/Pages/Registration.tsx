import React from 'react';
import { ImageBackground,Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../Style/Style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Registration() {
  return (
    <ImageBackground source={require('../Image/Background.png')} style={styles.backgroundImage}>
      <Text style={styles.header}>Welcome to Telintik</Text>
       <Image source={require('../Image/RegistrationImage.png')}
            style={styles.imageStyle}/>
       <Text style={styles.header}>First name</Text>
      <View style={styles.contentContainer}>
       
        <TextInput
          style={styles.input}
          placeholder="Denis"
        />
        <Text style={styles.label}>Last name</Text>
        <TextInput
          style={styles.input}
          placeholder="Sayuk"
        />
        <Text style={styles.label}>Your phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+123 00 000 00 00"
        />

      <TouchableOpacity
        style={styles.signInButton}
      >
      <Text style={styles.signInLaber}>
        Continue {' '} <Icon name="arrow-right" />
        </Text>
      </TouchableOpacity>
      </View> 
      </ImageBackground>
);
}