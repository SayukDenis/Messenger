import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../EditGroup/ProfileGroupStyles";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path, Rect } from "react-native-svg";

export const BranhesHead = () => {
  const navigation = useNavigation();

  const handleEditGroupPress = () => {
    navigation.navigate("SettingsMenu" as never); // Визначаємо тип рядка як 'never'
  };

  return (
    <View style={styles.topToolBar}>
      <TouchableOpacity
        style={{ top: "30%", right: "43%" }}
        onPress={handleEditGroupPress}
      >
        <Svg width={12} height={23} viewBox="0 0 12 23" fill="none">
          <Rect
            width={1.61477}
            height={14.7084}
            rx={0.807384}
            transform="matrix(0.556114 -0.831106 0.674407 0.73836 0.101562 11.2344)"
            fill="#434343"
          />
          <Path
            d="M1.62799 11.5393C1.32107 11.8628 0.876982 11.8208 0.636087 11.4456C0.395192 11.0703 0.448714 10.5039 0.755632 10.1805L9.76803 0.681975C10.0749 0.358504 10.519 0.400467 10.7599 0.775702C11.0008 1.15094 10.9473 1.71735 10.6404 2.04082L1.62799 11.5393Z"
            fill="#434343"
          />
        </Svg>
      </TouchableOpacity>
      <Text style={{ top: "6%" }}>Branches</Text>
    </View>
  );
};
