import React from "react";
import { View } from "react-native";
import RadioButton from "./RadioButton";

interface RadioGroupProps {
  options: { id: number; label: string }[];
  selectedOption: number;
  onPress: (id: number) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedOption,
  onPress,
}) => {
  return (
    <>
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={option.id}
          label={option.label}
          isSelected={selectedOption === option.id}
          onPress={onPress}
        />
      ))}
    </>
  );
};

export default RadioGroup;
