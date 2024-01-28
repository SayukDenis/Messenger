import React, { Dispatch, RefObject, SetStateAction } from "react";
import { View, TextInput } from "react-native";
import { isValidPhoneNumber, maxLengthDigits } from "./Funtions";
import { countryProps } from "../Select country/Country select containers/CountryNames";
import ValidTextSVG from "../../SemiComponents/ValidTextSVG";
import InValidTextSVG from "../../SemiComponents/InValidTextSVG";

interface NumberPhoneInputProps {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  selectedCountry: countryProps;
  sizeOfNumbers: number;
  inputRef?: RefObject<TextInput>;
}

const NumberPhoneInput: React.FC<NumberPhoneInputProps> = ({
  phoneNumber,
  setPhoneNumber,
  selectedCountry,
  sizeOfNumbers,
  inputRef,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <View style={{ alignSelf: "center", marginLeft: 10 }}>
        <TextInput
          ref={inputRef}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter the numbers"
          keyboardType="numeric"
          maxLength={maxLengthDigits(selectedCountry)}
          placeholderTextColor="white"
          style={{
            fontSize: sizeOfNumbers,
            color: "white",
          }}
        />
      </View>
      <View style={{ alignSelf: "center", marginRight: 4 }}>
        {isValidPhoneNumber(selectedCountry, phoneNumber) ? (
          <ValidTextSVG />
        ) : (
          <View style={{ opacity: 0.4 }}>
            <InValidTextSVG fill="red" />
          </View>
        )}
      </View>
    </View>
  );
};

export default NumberPhoneInput;
