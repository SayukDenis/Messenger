//Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles";
import { Entypo, Fontisto } from "@expo/vector-icons";

interface TopToolBarProps {
  profileName: string;
  lastTimeOnline: string;
}

const TopToolBar: React.FC<TopToolBarProps> = (props) => {
  return (
    <View style={styles.topToolBar}>
      <JacquesFrancoisText
        text={props.profileName}
        style={styles.profileTitle}
      />
      <JacquesFrancoisText
        text={props.lastTimeOnline}
        style={styles.onlineStatusTitle}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          alert("Going back...");
        }}
      >
        <Entypo
          style={styles.goBackFromProfileButton}
          name="chevron-thin-left"
          size={32}
          color="black"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          alert("Searching...");
        }}
      >
        <Fontisto
          style={styles.searchMessagesButton}
          name="search"
          size={26}
          color="black"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          alert("Else features...");
        }}
      >
        <Entypo
          style={styles.elseFeaturesButton}
          name="dots-three-horizontal"
          size={24}
          color="black"
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TopToolBar;
