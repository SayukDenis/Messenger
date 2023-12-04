import React from 'react';
import { ImageBackground,Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../Style/Style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Registration() {
  return (
    <ImageBackground source={require('../Image/Background.png')} style={styles.backgroundImage}>
      <View style={styles.containerCenter}>
      <Text style={styles.header}>Welcome to Telintik</Text>
       <Image source={require('../Image/RegistrationImage.png')}
            style={styles.imageStyle}/>        
         <Text style={styles.header}>Phone number</Text>

     <View style={styles.containerLine}>
       <View style={styles.line} />

       <View style={styles.row}>
        <Text style={styles.headerText}>+380</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.headerText}>Ukraine</Text>
        </View>

       <View style={styles.line} />

       <View style={styles.row}>
        <Text style={styles.headerText}>+380</Text>
        <View style={styles.verticalLine} />
        <TextInput style={styles.input} placeholder="00 000 00 00" />
        </View>
        <View style={styles.line} />
      </View>

      <Text style={styles.headerText}>Synchronize contacts</Text>     
      
      <TouchableOpacity
        style={styles.Button}
        onPress={() => alert('Continue')}
      >
        <Text style={styles.ButtonLaber}>
         Continue
        </Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);
}