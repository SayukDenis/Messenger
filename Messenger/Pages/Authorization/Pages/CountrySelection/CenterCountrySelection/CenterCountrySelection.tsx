import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import StyleCenterCountrySelection from "./StyleCenterCountrySelection";

const countries = [
  { id: 1, name: 'Ukraine', code: '+380', flag: require('../Image/UkraineFlag.png') },
  { id: 2, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 3, name: 'Australia', code: '+61', flag: require('../Image/UkraineFlag.png') },
  // Додайте інші країни за необхідністю
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

const CenterCountrySelection = ({ handleCountrySelect, searchQuery }) => {
  const [filteredAndSortedCountries, setFilteredAndSortedCountries] = useState(countries);

  useEffect(() => {
    // Фільтруємо та сортуємо країни за введеним текстом
    const filteredAndSorted = countries
      .filter((country) => {
        const trimmedQuery = searchQuery.trim();
        return (
          trimmedQuery === '' ||
          country.name.toLowerCase().startsWith(trimmedQuery.toLowerCase())
        );
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    setFilteredAndSortedCountries(filteredAndSorted);
  }, [searchQuery]);

  return (
    <ScrollView>
      <FlatList
        data={filteredAndSortedCountries}
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