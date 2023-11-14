import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { styles } from '../Style/Style';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function PhoneCodeRegistration() {
  return (
    <View style={styles.container}>
     
      <Text style={styles.header}>Code for phone</Text>

      <View style={styles.contentContainer}>
      <TouchableOpacity
        style={styles.backButton}

        onPress={() => {
          // обробка події для кнопки "назад" тут
        }}
      >
        <Icon name="chevron-left" style={styles.backButtonText} />
      </TouchableOpacity>
        <Text style={styles.label}>Write code</Text>
        <TextInput
          style={styles.input}
          placeholder="7788"
        />
        
        <Text style={styles.sentCodeAgainButtonText}>Sent code again</Text>
        <TouchableOpacity
          style={styles.signInButton}
        >
        <Text style={styles.signInLaber}>
          Finish {' '} <Icon name="arrow-right" />
        </Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}