// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import GoBackButton from "../GoBackButton";
import SearchIcon from "./Icons/SearchIcon";
import ElseFeaturesIcon from "./Icons/ElseFeaturesIcon";
import Name from "./Name";

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
    <>
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

        {/* Going back button */}
        <GoBackButton onPress={() => props.onGoBackPress()} />

        {/* Secondary title */}
        <Text style={styles.secondaryTitle}>{props.secondaryTitle}</Text>

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
    </>
  );
};

export default TopToolBar;
