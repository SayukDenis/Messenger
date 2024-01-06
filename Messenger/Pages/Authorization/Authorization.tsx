import React from 'react';
import {ImageBackground,Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Style/Style';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Authorization({ navigation }) {
  const navigateToRegistration = () => {
    navigation.navigate('Registration');
  };

  const navigateToPhoneCodeRegistration = () => {
    navigation.navigate('PhoneCodeRegistration');
  };

  const navigateToCountrySelection = () => {
    navigation.navigate('CountrySelection');
  };



  return (
    <ImageBackground source={require('./Image/Background.png')} style={styles.backgroundImage}>
        <View style={styles.containerCenter}>
       <Text style={styles.header}>Sign in to Telintik</Text>
       <Image source={require('./Image/AuthorizationImage.png')}
            style={styles.imageStyle}/>
      <Text style={styles.header}>Phone number</Text>
  
      <View style={styles.containerLine}>
       <View style={styles.line} />

       <TouchableOpacity style={styles.row} onPress={navigateToCountrySelection}>
        <Image source={require('./Pages/CountrySelection/Image/UkraineFlag.png')} style={styles.countryFlag}/>
        <View style={styles.verticalLine} />
        <Text style={styles.headerText}>Ukraine</Text>
        </TouchableOpacity>

       <View style={styles.line} />

       <View style={styles.row}>
        <Text style={styles.headerText} onPress={navigateToCountrySelection}>+380</Text>
        <View style={styles.verticalLine} />
        <TextInput style={styles.input} placeholder="00 000 00 00" />
        </View>
        <View style={styles.line} />
      </View>
         </View>
         <View style={styles.containerStart}>
         <TouchableOpacity
          style={styles.linkButton}
          onPress={navigateToRegistration}
        >
      <Text style={styles.linkButtonText}>Create account</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containerCenter}>
      <TouchableOpacity
          style={styles.Button}
          onPress={navigateToPhoneCodeRegistration}
        >
      <Text style={styles.ButtonLaber}>Continue</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
);
} 