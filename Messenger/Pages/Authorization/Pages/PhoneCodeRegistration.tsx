import React from 'react';
import { ImageBackground, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { styles } from '../Style/Style';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function PhoneCodeRegistration() {
  return (
    <ImageBackground source={require('../Image/Background.png')} style={styles.backgroundImage}>
       <Text style={styles.header}>Code for phone</Text>
       <Image source={require('../Image/PhoneCodeRegistrationImage.png')}
            style={styles.imageStyle}/>
     <Text style={styles.header}>Write code</Text>

      <View style={styles.contentContainer}>
      <TouchableOpacity
        style={styles.backButton}

        onPress={() => {
          // обробка події для кнопки "назад" тут
        }}
      >
        <Icon name="chevron-left" style={styles.backButtonText} />
      </TouchableOpacity>
        
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
      </ImageBackground>
  );
}