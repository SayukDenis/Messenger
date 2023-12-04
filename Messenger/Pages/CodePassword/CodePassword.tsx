import React, { useState } from 'react';
import { ImageBackground, Image, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Style/Style';
import { PIN_LENGTH } from './Script/ScriptCodePassword';
import LinearGradient from 'react-native-linear-gradient';

export default function CodePassword({ navigation }) {
  const [pin, setPin] = useState(''); 
  const handleCodeCellPress = (
    pin: string, 
    setPin: React.Dispatch<React.SetStateAction<string>>, 
    value: string,
  ) => {
    if (pin.length < PIN_LENGTH) {
      setPin(pin + value);
      if (pin.length+1 === PIN_LENGTH) {
        navigation.navigate('ChatList');
      }
    }
  };
  
  const renderCodeCells = (pin: string, setPin: React.Dispatch<React.SetStateAction<string>>) => {
    const codeCells = [];
    for (let i = 1; i <= 9; i++) {
      codeCells.push(
        <TouchableOpacity
          key={i}
          style={styles.codeCell}
          onPress={() => handleCodeCellPress(pin, setPin, i.toString())}
        >
          <Text style={styles.codeCellText}>{i}</Text>
        </TouchableOpacity>
      );
    }
    codeCells.push(
      <TouchableOpacity
        key={0}
        style={styles.codeCell}
        onPress={() => handleCodeCellPress(pin, setPin, '0')}
      >
        <Text style={styles.codeCellText}>0</Text>
      </TouchableOpacity>
    );
    return codeCells;
  };
  
   const handleDeletePress = (pin: string, setPin: React.Dispatch<React.SetStateAction<string>>) => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };
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
        {renderCodeCells(pin, setPin).slice(9, 10)}
      </View>
        <Text style={styles.header} onPress={(event) => handleDeletePress(pin, setPin)}>Delete</Text>
    </ImageBackground>
  );}  