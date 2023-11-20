import React, { useState } from 'react';
import { ImageBackground, Image, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Style/Style';
import { PIN_LENGTH, renderCodeCells, handleDeletePress } from './Script/ScriptCodePassword';
import LinearGradient from 'react-native-linear-gradient';

export default function CodePassword() {
  const [pin, setPin] = useState('');

  return (  
    <ImageBackground source={require('./Image/Background.png')} style={styles.backgroundImage}>
    
            <Image source={require('./Image/Vector.png')}
            style={styles.imageStyle}/>
      <Text style={styles.header}>Enter the telentic lock code</Text>
      <View style={styles.pinContainer}>
  {pin.split('').map((_, index) => (
    <View key={index} style={[styles.pinDot, styles.activeDot]} />
  ))}
  {Array.from({ length: PIN_LENGTH - pin.length }).map((_, index) => (
    <View key={index} style={styles.pinDot} />
  ))}
  </View>

      <View style={styles.codeInput}>
        <View style={styles.codeRow}>{renderCodeCells(pin, setPin).slice(0, 3)}</View>
        <View style={styles.codeRow}>{renderCodeCells(pin, setPin).slice(3, 6)}</View>
        <View style={styles.codeRow}>{renderCodeCells(pin, setPin).slice(6, 9)}</View>
        {renderCodeCells(pin, setPin).slice(9,10)}
        </View>
        <Text style={styles.header} onPress={(event) => handleDeletePress(pin, setPin)}>Delete</Text>
    
    </ImageBackground>
  );}  