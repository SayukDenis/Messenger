import React from "react";
import { Text } from "react-native";

import { CountryCode, countryNameRecord } from "./CountryNames";

interface CountryFlagEmojiProps {
  code?: CountryCode;
  sizeOfFlag?:number;
}

const CountryFlagEmoji: React.FC<CountryFlagEmojiProps> = ({
  code,sizeOfFlag=30
}: CountryFlagEmojiProps) => {
  const title = code ? countryNameRecord[code] || code : undefined;
  const getCountryFlagEmoji = (countryCode: CountryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };
  return (
    <Text style={{ fontSize: sizeOfFlag }}>
      {code ? getCountryFlagEmoji(code) : "🏳"}
    </Text>
  );
};

export default CountryFlagEmoji;
