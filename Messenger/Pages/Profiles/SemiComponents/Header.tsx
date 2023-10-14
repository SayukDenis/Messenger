// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View } from "react-native";
import { styles } from "./ProfileStyles.tsx";
import Name from "./MainScreen/Name.tsx";

interface HeaderProps {
  primaryTitle: string;
  style: any;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <View style={styles.topToolBar}>
      {/* Main name */}
      <Name primaryTitle={props.primaryTitle} style={props.style} />
    </View>
  );
};

export default Header;
