import { countryProps } from "../Select country/Country select containers/CountryNames";

export  const isValidPhoneNumber = (country: countryProps, phone: string) => {
    const currentPhoneLength = phone.length;
    if ("phoneLength" in country) {
      if (typeof country.phoneLength === "number") {
        return country.phoneLength == currentPhoneLength;
      } else if (Array.isArray(country.phoneLength)) {
        for (let i: number = 0; i < country.phoneLength?.length; i++) {
          if (country.phoneLength[i] == currentPhoneLength) {
            return true;
          }
        }
      }
    } else if ("min" in country && country.min && country.max) {
      //console.log(country)
      return (
        country?.min <= currentPhoneLength && country?.max >= currentPhoneLength
      );
    }
    return false;
  };
  export const maxLengthDigits = (country: countryProps): number => {
    if ("phoneLength" in country) {
      if (typeof country.phoneLength === "number") {
        return country.phoneLength;
      } else if (Array.isArray(country.phoneLength)) {
        if (country.phoneLength.length > 0) {
          const maxNumber = Math.max(...country.phoneLength);
          return maxNumber;
        } else {
          return 0;
        }
      }
    } else if ("min" in country && country.min && country.max) {
      //console.log(country)
      return country.max;
    }
    return 0;
  };