import React, { useEffect, useState } from 'react';
import { ImageBackground,Image, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { styles } from '../Style/Style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleRegistration} from '../Style/StyleRegistration';
import { useFormattedPhoneNumber } from '../FormattedPhoneNumber/FormattedPhoneNumber';

export default function Registration({ route, navigation }) {
  const { phoneNumber, handlePhoneNumberChange } = useFormattedPhoneNumber();
const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (route.params && route.params.selectedCountry !== undefined) {
      setSelectedCountry(route.params.selectedCountry);
    }
  }, [route.params]);
  // Отримайте переданий номер
  useEffect(() => {
    if (route.params && route.params.phoneNumber !== undefined) {
      handlePhoneNumberChange(route.params.phoneNumber);
    }
  }, [route.params.phoneNumber]);
  
  const navigateToCountrySelection = () => {
    navigation.navigate('CountrySelection', { originScreen: 'Authorization', selectedCountry });
  };
  const navigateToPhoneCodeRegistration = () => {
    navigation.navigate('PhoneCodeRegistration', { selectedCountry });
  };

  const [isSyncEnabled, setSyncEnabled] = useState(false);

  const toggleSync = () => {
    setSyncEnabled(!isSyncEnabled);
  };

  return (
    <ImageBackground source={require('../Image/Background.png')} style={styles.backgroundImage}>
      <View style={styles.containerCenter}>
      <Text style={styles.header}>Welcome to Telintik</Text>
       <Image source={require('../Image/RegistrationImage.png')}
            style={styles.imageStyle}/>        
         <Text style={styles.header}>Phone number</Text>

     <View style={styles.containerLine}>
       <View style={styles.line} />

       <TouchableOpacity style={styles.row} onPress={navigateToCountrySelection}>
            <Image source={selectedCountry !== null ? selectedCountry.flag : require('./CountrySelection/Image/UkraineFlag.png')} style={styles.countryFlag} />
            <View style={styles.verticalLine} />
            <Text style={styles.headerText}>{selectedCountry !== null ? selectedCountry.name : 'Ukraine'}</Text>
          </TouchableOpacity>
       
       <View style={styles.line} />

       <View style={styles.row}>
            <Text style={styles.headerText} onPress={navigateToCountrySelection}>{selectedCountry !== null ? selectedCountry.code : '+380'}</Text>
            <View style={styles.verticalLine} />
            <TextInput style={styles.input} 
            placeholder="00 000 00 00"
            maxLength={12} 
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange} />
          </View>

        <View style={styles.line} />
      </View>

      <View style={styleRegistration.syncContainer}>
          <Text style={styles.headerText}>Synchronize contacts</Text>
          <View style={styleRegistration.line} />
          <Switch
            style={styleRegistration.switchContainer} 
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSyncEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSync}
            value={isSyncEnabled}
          />
     </View>

      <TouchableOpacity
        style={styles.Button}
        onPress={navigateToPhoneCodeRegistration}
      >
        <Text style={styles.ButtonLaber}>
         Continue
        </Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);
}