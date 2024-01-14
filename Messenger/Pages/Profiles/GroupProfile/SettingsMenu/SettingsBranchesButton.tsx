import React from "react";
import SettingOption from "../../SemiComponents/GeneralComponents/SettingOption";

interface SettingsBranchesButtonProps {
  onPress: () => void;
}

const SettingsBranchesButton: React.FC<SettingsBranchesButtonProps> = (
  props
) => {
  return (
    <SettingOption
      onPress={() => {
        props.onPress();
      }}
      text="Branches"
    />
  );
};

export default SettingsBranchesButton;
