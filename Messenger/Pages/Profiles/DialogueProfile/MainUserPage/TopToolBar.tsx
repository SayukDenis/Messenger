// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles";
import GoBackIcon from "./Icons/GoBackIcon.tsx";
import SearchIcon from "./Icons/SearchIcon.tsx";
import ElseFeaturesIcon from "./Icons/ElseFeaturesIcon.tsx";
import Name from "./Name.tsx";

interface TopToolBarProps {
  setIsElseFeaturesVisible: (value: boolean) => void;
  isElseFeaturesVisible: boolean;
  primaryTitle: string;
  secondaryTitle?: string;
  isMuted?: boolean;
  isBlocked?: boolean;
}

const TopToolBar: React.FC<TopToolBarProps> = (props) => {
  const blockStatusTitle: string = "Blocked";
  return (
    <View style={styles.topToolBar}>
      {/* Main name */}
      <Name primaryTitle={props.primaryTitle} isMuted={props.isMuted} />

      {/* if blocked */}
      {props.isBlocked && (
        <JacquesFrancoisText
          text={props.isBlocked ? blockStatusTitle : ""}
          style={styles.blockStatus}
        />
      )}

      {/* Secondary title */}
      <JacquesFrancoisText
        text={props.secondaryTitle}
        style={styles.onlineStatusTitle}
      />

      {/* Going back button */}
      <TouchableWithoutFeedback
        onPress={() => {
          alert("Going back...");
        }}
      >
        <View style={styles.goBackFromProfileButton}>
          <GoBackIcon />
        </View>
      </TouchableWithoutFeedback>

      {/* Search message button */}
      <TouchableWithoutFeedback
        onPress={() => {
          alert("Searching...");
        }}
      >
        <View style={styles.searchMessagesButton}>
          <SearchIcon />
        </View>
      </TouchableWithoutFeedback>

      {/* Else features button */}
      <TouchableWithoutFeedback
        onPress={() => {
          props.setIsElseFeaturesVisible(true);
        }}
      >
        <View style={styles.elseFeaturesButton}>
          <ElseFeaturesIcon />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TopToolBar;
