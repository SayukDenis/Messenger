import { useState } from 'react';

export const useFormattedPhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (input) => {
    const numericInput = input.replace(/[^\d]/g, '');

    const formattedNumber = numericInput.replace(/(\d{1,2})(\d{0,3})(\d{0,2})(\d{0,2})/, (match, p1, p2, p3, p4) => {
      let result = '';

      if (p1) result += p1;
      if (p2) result += p1 ? ` ${p2}` : p2;
      if (p3) result += p2 ? ` ${p3}` : p3;
      if (p4) result += p3 ? ` ${p4}` : p4;

      return result.trim();
    });

    return formattedNumber;
  };

  const handlePhoneNumberChange = (input) => {
    const formattedNumber = formatPhoneNumber(input);
    setPhoneNumber(formattedNumber);
  };

  return { phoneNumber, handlePhoneNumberChange };
};
