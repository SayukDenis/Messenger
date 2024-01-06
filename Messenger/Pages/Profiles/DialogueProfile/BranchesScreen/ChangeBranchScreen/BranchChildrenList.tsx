// Oleksii Kovalenko telegram - @traewe

import React, { useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import { styles } from "../Styles";
import { useIsFocused } from "@react-navigation/native";
import PlusIcon from "../Icons/PlusIcon";
import BinIcon from "../../../SemiComponents/MainScreen/Icons/BinIcon";
import { BranchChild, tempUser } from "../../../SemiComponents/DBUser";

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

      <View
        style={{
          top: -0.025 * Dimensions.get("screen").height,
          paddingBottom: 0.08 * Dimensions.get("screen").height,
          zIndex: 0,
        }}
      >
        {tempUser.selectedBranchParent.children.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.settingOption}
              key={index}
              onPress={() => {
                props.onChildBranchPress(item);
              }}
            >
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
          );
        })}
      </View>
    </View>
  );
};

export default BranchChildrenList;
