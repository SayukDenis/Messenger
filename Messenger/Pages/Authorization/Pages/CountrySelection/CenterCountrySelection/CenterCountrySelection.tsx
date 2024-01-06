import React from "react";
import { View, FlatList, Text, TouchableOpacity, Image, ScrollView } from "react-native"; 
import StyleCenterCountrySelection from "./StyleCenterCountrySelection";

const countries = [
  { id: 1, name: 'Ukraine', code: '+380', flag: require('../Image/UkraineFlag.png') },
  { id: 2, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 3, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 4, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 5, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 6, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 7, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 8, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 9, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 10, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 11, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 12, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 13, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 14, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 15, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 16, name: 'United States', code: '+1', flag: require('../Image/UkraineFlag.png') },
  { id: 17, name: 'United States', code: '+17', flag: require('../Image/UkraineFlag.png') },
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

const CenterCountrySelection: React.FC<any> = ({ handleCountrySelect }) => {
  return (
    <ScrollView>
    <FlatList
      data={countries}
      renderItem={({ item }) => <CountryItem  item={item} handleCountrySelect={handleCountrySelect} />}
      keyExtractor={(item) => item.id.toString()}
      style={StyleCenterCountrySelection.countryList}
    />
    </ScrollView>
  );
};

export default CenterCountrySelection;