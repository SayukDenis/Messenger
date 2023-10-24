// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { styles } from "./Styles.tsx";
import GoBackButton from "../GoBackButton.tsx";
import SearchIcon from "./Icons/SearchIcon.tsx";
import ElseFeaturesIcon from "./Icons/ElseFeaturesIcon.tsx";
import Name from "./Name.tsx";

interface TopToolBarProps {
  setIsElseFeaturesVisible?: (value: boolean) => void;
  primaryTitle: string;
  secondaryTitle?: string;
  isMuted?: boolean;
  isBlocked?: boolean;
  isSearchButtonVisible: boolean;
}

const TopToolBar: React.FC<TopToolBarProps> = (props) => {
  const blockStatusTitle: string = "Blocked";
  return (
    <View style={styles.topToolBar}>
      {/* Main name */}
      <Name
        primaryTitle={props.primaryTitle}
        isMuted={props.isMuted}
        style={styles.profileTitle}
      />

      {/* if blocked */}
      {props.isBlocked && (
        <Text style={styles.blockStatus}>
          {props.isBlocked ? blockStatusTitle : ""}
        </Text>
      )}

      {/* Secondary title */}
      <Text style={styles.secondaryTitle}>{props.secondaryTitle}</Text>

      {/* Going back button */}
      <GoBackButton onPress={() => alert("Going back")} />

      {/* Search message button */}
      {props.isSearchButtonVisible && (
        <TouchableWithoutFeedback
          onPress={() => {
            alert("Searching...");
          }}
        >
          <View style={styles.searchMessagesButton}>
            <SearchIcon />
          </View>
        </TouchableWithoutFeedback>
      )}

      {/* Else features button */}
      <TouchableWithoutFeedback
        onPress={() => {
          if (props.setIsElseFeaturesVisible != undefined)
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
