// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import { styles } from "../Styles";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Blur from "../../../SemiComponents/MainScreen/Blur";
import RemovalApproval from "../../../SemiComponents/MainScreen/RemovalApproval";
import { user, BranchParent } from "../../../SemiComponents/DBUser";
import PlusIcon from "../Icons/PlusIcon";
import BinIcon from "../../../SemiComponents/MainScreen/Icons/BinIcon";
import { tempUser } from "../BranchesScreen";

interface BranchChildrenListProps {
  onPlusBranchPress: () => void;
  isSomeSelectionVisible: boolean;
  onBinPress: (value: string) => void;
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
      <TouchableOpacity
        onPress={() => {
          props.onPlusBranchPress();
        }}
        style={[styles.settingOption, { top: 0.055 * screenHeight }]}
      >
        <PlusIcon style={styles.plusIcon} />
        <Text style={styles.plusBranchTitle}>{branchTitle}</Text>
      </TouchableOpacity>

      <View
        style={[
          styles.containerForSettingTitle,
          { top: -0.055 * screenHeight },
        ]}
      >
        <Text style={styles.settingTitle}>Under the branch</Text>
      </View>

      <FlatList
        data={tempUser.selectedBranch.children}
        keyExtractor={(item) =>
          tempUser.selectedBranch.children.indexOf(item).toString()
        }
        horizontal={false}
        numColumns={1}
        scrollEnabled={false}
        contentContainerStyle={{
          top: -0.025 * Dimensions.get("screen").height,
          paddingBottom: 0.07 * Dimensions.get("screen").height,
          zIndex: 0,
        }}
        renderItem={({ item }) => (
          <View style={styles.settingOption}>
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
          </View>
        )}
      />
    </View>
  );
};

export default BranchChildrenList;
