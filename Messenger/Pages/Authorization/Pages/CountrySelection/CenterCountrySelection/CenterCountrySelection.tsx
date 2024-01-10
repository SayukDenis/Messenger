import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import StyleCenterCountrySelection from "./StyleCenterCountrySelection";

const countries = [
  { id: 1, name: 'Ukraine', code: '+380', flag: require('../Image/UkraineFlag.png') },
  { id: 2, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 3, name: 'Australia', code: '+61', flag: require('../Image/AustraliaFlag.png') },
  { id: 4, name: 'Ukraine', code: '+380', flag: require('../Image/UkraineFlag.png') },
  { id: 5, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 6, name: 'Australia', code: '+61', flag: require('../Image/UkraineFlag.png') },
  { id: 7, name: 'Ukraine', code: '+380', flag: require('../Image/UkraineFlag.png') },
  { id: 8, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 9, name: 'Australia', code: '+61', flag: require('../Image/UkraineFlag.png') },
  { id: 10, name: 'Ukraine', code: '+380', flag: require('../Image/UkraineFlag.png') },
  { id: 11, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 12, name: 'Australia', code: '+61', flag: require('../Image/UkraineFlag.png') },
  { id: 13, name: 'Ukraine', code: '+380', flag: require('../Image/UkraineFlag.png') },
  { id: 14, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 15, name: 'Australia', code: '+61', flag: require('../Image/UkraineFlag.png') },
  { id: 16, name: 'Ukraine', code: '+380', flag: require('../Image/UkraineFlag.png') },
  { id: 17, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 18, name: 'Australia', code: '+61', flag: require('../Image/UkraineFlag.png') },
  { id: 19, name: 'Ukraine', code: '+380', flag: require('../Image/UkraineFlag.png') },
  { id: 20, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 21, name: 'Australia', code: '+61', flag: require('../Image/UkraineFlag.png') },
  { id: 22, name: 'Ukraine', code: '+380', flag: require('../Image/UkraineFlag.png') },
  { id: 23, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 24, name: 'Australia', code: '+61', flag: require('../Image/UkraineFlag.png') },
];

const CountryItem = ({ item, handleCountrySelect }) => (
  <TouchableOpacity
    style={StyleCenterCountrySelection.countryItem}
    onPress={() => handleCountrySelect(item)}
  >
    <Image source={item.flag} style={StyleCenterCountrySelection.countryFlag} />
    <View style={StyleCenterCountrySelection.verticalLine} />
    <Text style={StyleCenterCountrySelection.countryName}>{item.name}</Text>
    <View style={StyleCenterCountrySelection.line} />
    <Text style={StyleCenterCountrySelection.countryCode}>{item.code}</Text>
  </TouchableOpacity>
);

// Функція для початкового сортування масиву країн
const sortCountries = (countries) => {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
};

const CenterCountrySelection = ({ handleCountrySelect, searchQuery }) => {
  const [originalSortedCountries, setOriginalSortedCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    // Виконати початкове сортування один раз при відображенні компоненту
    const sorted = sortCountries(countries);
    setOriginalSortedCountries(sorted);
    setFilteredCountries(sorted);
  }, []);

  useEffect(() => {
    // Фільтруємо країни за введеним текстом
    const filtered = originalSortedCountries.filter((country) => {
      const trimmedQuery = searchQuery.trim();
      return (
        trimmedQuery === '' ||
        country.name.toLowerCase().startsWith(trimmedQuery.toLowerCase())
      );
    });

    setFilteredCountries(filtered);
  }, [searchQuery, originalSortedCountries]);

  return (
    <ScrollView>
      <FlatList
        data={filteredCountries}
        renderItem={({ item }) => (
          <CountryItem item={item} handleCountrySelect={handleCountrySelect} />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={StyleCenterCountrySelection.countryList}
      />
    </ScrollView>
  );
};

export { countries, CenterCountrySelection as default };