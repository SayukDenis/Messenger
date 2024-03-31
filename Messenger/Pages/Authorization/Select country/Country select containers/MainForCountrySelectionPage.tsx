import React, { Dispatch, SetStateAction } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../../ChatList/Constants/ConstantsForChatlist";
import { countryList, countryProps } from "./CountryNames";
import CountryContainer from "./CountryContainer";

interface MainForCountrySelectionPageProps {
  navigation: any;
  inputForCountry: string;
  setCountry: Dispatch<SetStateAction<number>>;
}

const MainForCountrySelectionPage: React.FC<
  MainForCountrySelectionPageProps
> = ({ navigation, inputForCountry, setCountry }) => {
  const listOfCountryies = (input: string): countryProps[] => {
    if (input == "") {
      return countryList;
    }
    return countryList.filter((county) =>
      county.label.toLowerCase().startsWith(input)
    );
  };
  const onCountryPress = (country: countryProps) => {
    const index=countryList.findIndex((item: countryProps) => {
        return item.code == country.code;
      })
      
    setCountry(
      index
    );
    navigation.goBack();
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={listOfCountryies(inputForCountry.toLowerCase())}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            onCountryPress(item);
          }}
        >
          <CountryContainer country={item} />
        </TouchableOpacity>
      )}
      ListHeaderComponent={
        <View style={{ height: heightOfHeader, width: screenWidth }} />
      }
      ListFooterComponent={
        <View style={{ height: screenHeight * 0.05, width: screenWidth }} />
      }
      initialNumToRender={20}
      windowSize={20}
    />
  );
};
export default MainForCountrySelectionPage;
