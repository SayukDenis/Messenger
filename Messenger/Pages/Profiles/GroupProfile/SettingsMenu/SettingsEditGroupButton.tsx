import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../EditGroup/ProfileGroupStyles";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path, Rect } from "react-native-svg";

export default function GroupButton() {
  const navigation = useNavigation();

  const handleEditGroupPress = () => {
    navigation.navigate("EditGroup" as never); // Визначаємо тип рядка як 'never'
  };

  return (
    <TouchableOpacity
      style={styles.SettingsButtons}
      onPress={handleEditGroupPress}
    >
      <Text style={styles.SettingsText}>Edit group</Text>
      <Svg
        width={10}
        height={22}
        viewBox="0 0 5 11"
        fill="none"
        style={{ top: "-10%", left: "93%" }}
      >
        <Rect
          width={0.786046}
          height={7.05171}
          rx={0.393023}
          transform="matrix(-0.511892 0.859077 -0.646015 -0.763291 5 5.38281)"
          fill="#6F6F6F"
        />
        <Path
          d="M4.30079 5.2424C4.44101 5.07671 4.64476 5.09354 4.75587 5.28C4.86698 5.46646 4.84338 5.75194 4.70316 5.91763L0.655454 10.7006C0.51523 10.8663 0.311482 10.8494 0.20037 10.663C0.0892583 10.4765 0.112859 10.191 0.253083 10.0254L4.30079 5.2424Z"
          fill="#6F6F6F"
        />
      </Svg>
    </TouchableOpacity>
  );
}
