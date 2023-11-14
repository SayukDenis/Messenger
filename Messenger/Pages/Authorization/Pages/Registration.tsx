import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../Style/Style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Registration() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Telintik</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.label}>First name</Text>
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
    </View>
);
}