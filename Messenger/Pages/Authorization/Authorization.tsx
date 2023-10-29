import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Style/Style';

export default function Authorization() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign in to Telintik</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.label}>Your phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+123 00 000 00 00"
        />
    
      <TouchableOpacity
        style={styles.signInButton}
      >
      <Text style={styles.signInLaber}>SIGN IN →</Text>
      </TouchableOpacity>
      </View> 

      <View style={styles.containerCreat}>
      <View style={styles.contentContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.createAccount}>Do you want to create an account?</Text>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => alert('Create button clicked')}
      >
      <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>
      </View>
     </View>
    </View>
    </View>
);
}