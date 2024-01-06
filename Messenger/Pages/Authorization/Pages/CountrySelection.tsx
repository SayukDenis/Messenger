import React from 'react';
import { ImageBackground } from 'react-native';
import { styles } from '../Style/Style';
import HeaderCountrySelection from './CountrySelection/HeaderCountrySelection/HeaderCountrySelection';
import CenterCountrySelection from './CountrySelection/CenterCountrySelection/CenterCountrySelection';
import countries from './CountryInformation';

export default function CountrySelection ({navigation}) {
    const handleCountrySelect = (selectedCountry) => {
      navigation.navigate('Authorization', { selectedCountry });
    };

    return ( 
      <ImageBackground source={require('../Image/Background.png')} style={styles.backgroundImage}>
       <CenterCountrySelection handleCountrySelect={handleCountrySelect} />
        <HeaderCountrySelection navigation={navigation} />
    </ImageBackground>
    )
}