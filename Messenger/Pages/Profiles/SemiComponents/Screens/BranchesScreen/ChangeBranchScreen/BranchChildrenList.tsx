// Oleksii Kovalenko telegram - @traewe

import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "../Styles";
import { useIsFocused } from "@react-navigation/native";
import PlusIcon from "../Icons/PlusIcon";
import BinIcon from "../../MainScreen/Icons/BinIcon";
import { BranchChild } from "../../../DatabaseSimulation/DBClasses";
import ButtonWithPlus from "../../../GeneralComponents/ButtonWithPlus";
import { LinearGradient } from "expo-linear-gradient";
import { GetProfile } from "../../../DatabaseSimulation/DBFunctions";

interface BranchChildrenListProps {
  onPlusBranchPress: () => void;
  isSomeSelectionVisible: boolean;
  onBinPress: (value: string) => void;
  onChildBranchPress: (child: BranchChild) => void;
}

const screenHeight: number = Dimensions.get("screen").height;

const BranchChildrenList: React.FC<BranchChildrenListProps> = (props) => {
  const branchTitle: string = "Branch";
  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  return (
    <View
      style={{
        top: props.isSomeSelectionVisible
          ? 0.03 * screenHeight
          : 0.07 * screenHeight,
      }}
    >
      <ButtonWithPlus
        text="Branch"
        onPress={() => {
          props.onPlusBranchPress();
        }}
        style={{ top: 0.055 * screenHeight }}
      />

      <View
        style={[
          styles.emojiAndColorButtonsContainer,
          { top: -0.055 * screenHeight },
        ]}
      >
        <Text style={styles.settingTitle}>Under the branch</Text>
      </View>

      <View
        style={{
          paddingBottom: 0.09 * screenHeight,
          zIndex: 0,
          top: 0.015 * screenHeight,
        }}
      >
        {GetProfile().selectedBranchParent.children.map((item, index) => {
          return (
            <View key={index}>
              <View
                style={{
                  height: 0.005 * screenHeight,
                }}
              />
              <TouchableOpacity
                style={[styles.settingOption, { top: 0 }]}
                onPress={() => {
                  props.onChildBranchPress(item);
                }}
              >
                <LinearGradient
                  colors={["#cf9b95", "#c98bb8", "#c37adb"]}
                  style={[styles.linearGradient, { opacity: 0.7 }]}
                />
                <View
                  style={[
                    styles.branchAvatarInList,
                    {
                      backgroundColor: item.color,
                    },
                  ]}
                >
                  <Text style={{ fontSize: 20 }}>{item.emoji}</Text>
                </View>
                <View style={styles.branchTitleContainer}>
                  <Text numberOfLines={1} style={styles.branchTitleInList}>
                    {item.name}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    props.onBinPress(item.name);
                  }}
                  style={styles.binIconContainer}
                >
                  <BinIcon style={styles.binIcon} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default BranchChildrenList;
