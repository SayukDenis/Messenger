// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TextStyle, Dimensions } from "react-native";
import { styles } from "./Styles";
import Name from "../Screens/MainScreen/Name";
import GoBackButton from "./GoBackButton";
import { LinearGradient } from "expo-linear-gradient";

interface HeaderProps {
  primaryTitle: string;
  style?: TextStyle;
  onGoBackPress: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <View style={styles.topToolBar}>
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        style={[
          styles.linearGradient,
          {
            opacity: 0.7,
          },
        ]}
      />
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
