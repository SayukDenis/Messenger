import React from "react";
import { View, TouchableOpacity, TextInput, Image } from "react-native";
import StyleHeaderCountrySelection from "./StyleHeaderCountrySelection";
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderCountrySelection = ({ navigation, handleSearch }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={StyleHeaderCountrySelection.headerConteiner}>
      <TouchableOpacity
        style={StyleHeaderCountrySelection.backButton}
        onPress={handleBack}
      >
        <Icon name="chevron-left" style={StyleHeaderCountrySelection.backButtonText} />
      </TouchableOpacity>
      <View style={StyleHeaderCountrySelection.searchContainer}>
      <Image
        source={require('../Image/SearchIcon.png')}
        style={StyleHeaderCountrySelection.searchIcon}
      />
       
       </View>
       <View style={StyleHeaderCountrySelection.verticalLine} />
      <TextInput
        style={StyleHeaderCountrySelection.textInput}
        placeholder="Search"
        placeholderTextColor={"#888282"}
        onChangeText={(text) => handleSearch(text)}
      />
      <View style={StyleHeaderCountrySelection.svgConteiner}>
        {/* Your SVG container */}
      </View>
    </View>
  );
};

export default HeaderCountrySelection;