import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../Style/Style';

export default function PhoneCodeRegistration() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Code for phone</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.label}>Write code</Text>
        <TextInput
          style={styles.input}
          placeholder="7788"
        />
        
     <Text style={styles.sentCodeAgainButtonText}>Sent code again</Text>
    <TouchableOpacity
        style={styles.signInButton}
      >
      <Text style={styles.signInLaber}>Finish →</Text>
      </TouchableOpacity>
      </View> 
    </View>
);
}