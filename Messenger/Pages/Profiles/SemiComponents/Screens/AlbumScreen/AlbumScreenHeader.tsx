// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Name from "../MainScreen/Name";
import GoBackButton from "../../GeneralComponents/GoBackButton";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";
import { styles } from "./Styles";
import ElseFeaturesIcon from "../MainScreen/Icons/ElseFeaturesIcon";
import { LinearGradient } from "expo-linear-gradient";

interface AlbumScreenHeaderProps {
  navigation: StackNavigationProp<{}>;
  onElseFeaturesPress: () => void;
}

const AlbumScreenHeader: React.FC<AlbumScreenHeaderProps> = (props) => {
  return (
    <>
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        style={[styles.linearGradient, { opacity: 0.7 }]}
      />
      <Name
        primaryTitle={GetProfile().selectedAlbum.name}
        style={styles.headerTitle}
      />

      <GoBackButton onPress={() => props.navigation.goBack()} />

      <TouchableOpacity
        onPress={() => {
          props.onElseFeaturesPress();
        }}
        style={styles.elseFeaturesButton}
      >
        <ElseFeaturesIcon />
      </TouchableOpacity>
    </>
  );
};

export default AlbumScreenHeader;
