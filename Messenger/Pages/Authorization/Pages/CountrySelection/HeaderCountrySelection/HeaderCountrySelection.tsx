import React from "react";
import { View, TouchableOpacity, TextInput,  Image } from "react-native";
import StyleHeaderCountrySelection from "./StyleHeaderCountrySelection";
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderCountrySelection = ({ navigation }) =>{
  const handleBack = () => {
     navigation.goBack();
  };
  return (
    <View style={StyleHeaderCountrySelection.headerConteiner}>
      <TouchableOpacity 
      style={StyleHeaderCountrySelection.backButton}
      onPress={handleBack}
      >
        <Icon name="chevron-left" style={StyleHeaderCountrySelection.backButtonText}/>
      </TouchableOpacity>
      <TextInput
        style={StyleHeaderCountrySelection.textInput}
        placeholder="Search"
        placeholderTextColor={"#888282"}
      ></TextInput>
      <View style={StyleHeaderCountrySelection.svgConteiner}>
        
      </View>
    </View>
  );
};
export default HeaderCountrySelection;

