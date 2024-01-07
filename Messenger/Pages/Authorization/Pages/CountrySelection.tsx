import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { styles } from '../Style/Style';
import HeaderCountrySelection from './CountrySelection/HeaderCountrySelection/HeaderCountrySelection';
import CenterCountrySelection from './CountrySelection/CenterCountrySelection/CenterCountrySelection';

export default function CountrySelection({ route, navigation }) {
  const selectedCountry = route.params.selectedCountry;
  const [searchQuery, setSearchQuery] = useState('');

  const handleCountrySelect = (selectedCountry) => {
    navigation.navigate(route.params.originScreen, { selectedCountry });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ImageBackground source={require('../Image/Background.png')} style={styles.backgroundImage}>
        <CenterCountrySelection handleCountrySelect={handleCountrySelect} searchQuery={searchQuery} />
      <HeaderCountrySelection navigation={navigation} handleSearch={handleSearch} />
    
    </ImageBackground>
  );
}


