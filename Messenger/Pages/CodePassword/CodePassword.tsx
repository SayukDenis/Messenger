import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Style/Style';

const PIN_LENGTH = 6;

export default function CodePassword() {
  const [pin, setPin] = useState('');

  const handleCodeCellPress = (value: string) => {
    if (pin.length < PIN_LENGTH) {
      setPin(pin + value);
    }
  };

  const renderCodeCells = () => {
    const codeCells = [];
    for (let i = 1; i <= 9; i++) {
      codeCells.push(
        <TouchableOpacity
          key={i}
          style={styles.codeCell}
          onPress={() => handleCodeCellPress(i.toString())}
        >
          <Text style={styles.codeCellText}>{i}</Text>
        </TouchableOpacity>
      );
    }
    codeCells.push(
      <TouchableOpacity
        key={0}
        style={styles.codeCell}
        onPress={() => handleCodeCellPress('0')}
      >
        <Text style={styles.codeCellText}>0</Text>
      </TouchableOpacity>
    );
    return codeCells;
  };

  return (
    <View style={styles.container}>
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
        <View style={styles.codeRow}>{renderCodeCells().slice(0, 3)}</View>
        <View style={styles.codeRow}>{renderCodeCells().slice(3, 6)}</View>
        <View style={styles.codeRow}>{renderCodeCells().slice(6, 9)}</View>
        {renderCodeCells().slice(9,10)}
        </View>
      </View>
      
  );}  