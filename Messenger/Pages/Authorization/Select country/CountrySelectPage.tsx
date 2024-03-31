import React, { useState } from "react";
import { Text } from "react-native";

import { CountryCode, countryList } from "./Country select containers/CountryNames";
import BackGroundGradientView from "../../SemiComponents/BackGroundGradientView";
import HeaderForCountrySelectPage from "./Country select containers/HeaderForCountrySelectPage";
import MainForCountrySelectionPage from "./Country select containers/MainForCountrySelectionPage";

interface CountrySelectPageProps {
  route: any;
  navigation: any;
}

const CountrySelectPage: React.FC<CountrySelectPageProps> = ({
  route,
  navigation,
}) => {
  const [inputForCountry, setInputForCountry] = useState("");
  return (
    <BackGroundGradientView>
      <HeaderForCountrySelectPage
        navigation={navigation}
        inputForCountry={inputForCountry}
        setInputForCountry={setInputForCountry}
      />
      <MainForCountrySelectionPage
        navigation={navigation}
        inputForCountry={inputForCountry}
        setCountry={route.params.setCountry}
      />
    </BackGroundGradientView>
  );
};

export default CountrySelectPage;
