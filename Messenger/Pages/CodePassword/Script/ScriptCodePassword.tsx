import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../Style/Style';

export const PIN_LENGTH = 6;

export const handleCodeCellPress = (
  pin: string, 
  setPin: React.Dispatch<React.SetStateAction<string>>, 
  value: string
) => {
  if (pin.length < PIN_LENGTH) {
    setPin(pin + value);
  }
};

export const renderCodeCells = (pin: string, setPin: React.Dispatch<React.SetStateAction<string>>) => {
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

export const handleDeletePress = (pin: string, setPin: React.Dispatch<React.SetStateAction<string>>) => {
  if (pin.length > 0) {
    setPin(pin.slice(0, -1));
  }
};