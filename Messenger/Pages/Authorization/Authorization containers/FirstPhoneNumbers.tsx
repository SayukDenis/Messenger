import React from 'react';
import { Text } from 'react-native';

interface FirstPhoneNumbersProps{
    selectedCountryPhone:string;
    sizeOfNumbers:number
}
const FirstPhoneNumbers:React.FC<FirstPhoneNumbersProps> = ({ selectedCountryPhone, sizeOfNumbers }) => {
  return (
    <Text
      style={{
        alignSelf: 'center',
        color: 'white',
        fontSize: selectedCountryPhone.length > 4 ? 14 : sizeOfNumbers,
      }}
    >
      {`+${selectedCountryPhone}`}
    </Text>
  );
};

export default FirstPhoneNumbers;
