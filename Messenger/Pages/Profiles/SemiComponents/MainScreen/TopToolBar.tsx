// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles.tsx";
import GoBackButton from "../GoBackButton.tsx";
import SearchIcon from "./Icons/SearchIcon.tsx";
import ElseFeaturesIcon from "./Icons/ElseFeaturesIcon.tsx";
import Name from "./Name.tsx";
import { StackNavigationProp } from "@react-navigation/stack";

interface TopToolBarProps {
  setIsElseFeaturesVisible?: (value: boolean) => void;
  primaryTitle: string;
  secondaryTitle?: string;
  isMuted?: boolean;
  isBlocked?: boolean;
  isSearchButtonVisible: boolean;
  onGoBackPress: () => void;
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
      <GoBackButton onPress={() => props.onGoBackPress()} />

      {/* Search message button */}
      {props.isSearchButtonVisible && (
        <TouchableOpacity
          onPress={() => {
            alert("Searching...");
          }}
          style={styles.searchMessagesButton}
        >
          <SearchIcon />
        </TouchableOpacity>
      )}

      {/* Else features button */}
      <TouchableOpacity
        onPress={() => {
          if (props.setIsElseFeaturesVisible != undefined)
            props.setIsElseFeaturesVisible(true);
        }}
        style={styles.elseFeaturesButton}
      >
        <ElseFeaturesIcon />
      </TouchableOpacity>
    </View>
  );
};

export default TopToolBar;
