import React, { useEffect, useRef, useState } from "react";
import BackGroundGradientView from "../SemiComponents/BackGroundGradientView";
import { TouchableOpacity, View, ScrollView, TextInput } from "react-native";
import CountryFlagEmoji from "./Select country/Country select containers/CountryFlagEmoji";
import {
  CountryCode,
  countryList,
  countryProps,
} from "./Select country/Country select containers/CountryNames";
import { sendCodeSMS } from "./CodeVerification/SendCode";
import { isValidPhoneNumber } from "./Authorization containers/Funtions";
import Greeting from "./Authorization containers/Greeting";
import PhoneContainer from "./Authorization containers/PhoneContainer";
import FormContainer from "./Authorization containers/FormContainer";
import SynchronizeContacts from "./Authorization containers/SynchronizeContacts";
import ContinueButton from "./Authorization containers/ContinueButton";
import FirstPhoneNumbers from "./Authorization containers/FirstPhoneNumbers";
import NumberPhoneInput from "./Authorization containers/NumberPhoneInput";
import CountryName from "./Authorization containers/CountryName";

export default function Authorization({ route, navigation }: any) {
  const [selectedCountryNum, setCountry] = useState(0);
  const selectedCountry: countryProps = countryList[selectedCountryNum];
  const sizeOfNumbers: number = 17;
  const [phoneNumber, setPhoneNumber] = useState<string>("961814095");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const phoneInputRef = useRef<TextInput>(null);
  const pressOnCountrySelect = () => {
    navigation.navigate("Country Select Page", {
      selectedCountryNum,
      setCountry,
    });
  };
  const pressOnCountinueButton = () => {
    sendCodeSMS(`+${selectedCountry.phone}${phoneNumber}`);
    navigation.navigate("Code Verification Page");
  };
  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await fetch("https://ipinfo.io/json");
        const data = await response.json();
        setCountry(
          countryList.findIndex(
            (country: countryProps) => country.code === data.country
          )
        );
      } catch (error) {
        console.error("Error fetching country information:", error);
      }
    };

    fetchCountryInfo();
  }, []);
  return (
    <BackGroundGradientView>
      <ScrollView scrollEnabled={false}>
        <Greeting />
        <PhoneContainer />
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={pressOnCountrySelect}
          activeOpacity={0.6}
        >
          <FormContainer
            borderTop={true}
            childrenLeft={
              <View style={{ alignSelf: "center" }}>
                <CountryFlagEmoji code={selectedCountry.code as CountryCode} />
              </View>
            }
            childrenRight={<CountryName label={selectedCountry.label} />}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => phoneInputRef.current?.focus()}
          activeOpacity={1}
        >
          <FormContainer
            childrenLeft={
              <FirstPhoneNumbers
                selectedCountryPhone={selectedCountry.phone}
                sizeOfNumbers={sizeOfNumbers}
              />
            }
            childrenRight={
              <NumberPhoneInput
                sizeOfNumbers={sizeOfNumbers}
                setPhoneNumber={setPhoneNumber}
                selectedCountry={selectedCountry}
                phoneNumber={phoneNumber}
                inputRef={phoneInputRef}
              />
            }
          />
        </TouchableOpacity>
        <SynchronizeContacts
          toggleSwitch={toggleSwitch}
          isEnabled={isEnabled}
        />
        <ContinueButton
          pressOnContinueButton={pressOnCountinueButton}
          isValidPhoneNumber={isValidPhoneNumber(selectedCountry, phoneNumber)}
        />
      </ScrollView>
    </BackGroundGradientView>
  );
}
