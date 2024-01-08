// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import GoBackButton from "../GeneralComponents/GoBackButton";
import SearchIcon from "./Icons/SearchIcon";
import ElseFeaturesIcon from "./Icons/ElseFeaturesIcon";
import Name from "./Name";

interface TopToolBarProps {
  onElseFeaturesPress?: () => void;
  primaryTitle?: string;
  secondaryTitle?: string;
  isMuted?: boolean;
  isBlocked?: boolean;
  isSearchButtonVisible?: boolean;
  onGoBackPress?: () => void;
  isMediaSelectionVisible: boolean;
  quantityOfSelectedItems: number;
  onDeleteAllPress: () => void;
  onCancelPress: () => void;
}

const TopToolBar: React.FC<TopToolBarProps> = (props) => {
  const blockStatusTitle: string = "Blocked";
  return (
    <>
      <View style={styles.topToolBar}>
        {!props.isMediaSelectionVisible && (
          <>
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
                props?.onElseFeaturesPress();
              }}
              style={styles.elseFeaturesButton}
            >
              <ElseFeaturesIcon />
            </TouchableOpacity>
          </>
        )}
        {props.isMediaSelectionVisible && (
          <>
            {/* Delete all button */}
            <TouchableOpacity
              style={[
                styles.doneButtonContainer,
                { left: 0.06 * Dimensions.get("screen").width },
              ]}
              onPress={() => {
                props.onDeleteAllPress();
              }}
            >
              <Text style={[styles.doneButtonTitle, { color: "red" }]}>
                Delete all
              </Text>
            </TouchableOpacity>

            {/* Number of selected albums */}
            <View
              style={[
                styles.doneButtonContainer,
                { left: 0.4 * Dimensions.get("screen").width },
              ]}
            >
              <Text style={styles.doneButtonTitle}>
                Select({props.quantityOfSelectedItems})
              </Text>
            </View>

            {/* Cancel button */}
            <TouchableOpacity
              style={[
                styles.doneButtonContainer,
                { right: -0.075 * Dimensions.get("screen").width },
              ]}
              onPress={() => {
                props.onCancelPress();
              }}
            >
              <Text style={styles.doneButtonTitle}>Cancel</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};

export default TopToolBar;
