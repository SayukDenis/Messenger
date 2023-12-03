// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TextStyle } from "react-native";
import { styles } from "./ProfileStyles";
import Name from "./MainScreen/Name";
import GoBackButton from "./GoBackButton";

interface HeaderProps {
  primaryTitle: string;
  style?: TextStyle;
  onGoBackPress: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <View style={styles.topToolBar}>
      {/* Main name */}
      <Name
        primaryTitle={props.primaryTitle}
        style={props.style ? props.style : styles.headerTitle}
      />

      {/* Going back button */}
      <GoBackButton onPress={() => props.onGoBackPress()} />
    </View>
  );
};

export default Header;
