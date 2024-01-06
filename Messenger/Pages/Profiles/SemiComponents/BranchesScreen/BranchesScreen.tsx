// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import Header from "../Header";
import PlusIcon from "./Icons/PlusIcon";
import BinIcon from "../MainScreen/Icons/BinIcon";
import Blur from "../Blur";
import RemovalApproval from "../MainScreen/RemovalApproval";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { character, tempCharacter } from "../DBUser";

type BranchesScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const BranchesScreen: React.FC<BranchesScreenProps> = ({ navigation }) => {
  const [isDeleteBranchPressed, setIsDeleteBranchPressed] = useState(false);
  const [branchNameToRemove, setBranchNameToRemove] = useState("");

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  return (
    <View style={styles.mainContainer}>
      <Blur
        visibleWhen={isDeleteBranchPressed}
        onPress={() => {
          setIsDeleteBranchPressed(false);
        }}
        style={styles.blurEffect}
      />
      <Header
        primaryTitle="Branches"
        onGoBackPress={() => {
          navigation.goBack();
        }}
      />
      <RemovalApproval
        onAnyPress={() => {
          setIsDeleteBranchPressed(false);
        }}
        onAgreePress={() => {
          const branchToRemoveNow = character().branchParents.find(
            (branch) => branch.name === branchNameToRemove
          );

          if (branchToRemoveNow) {
            character().branchParents.splice(
              character().branchParents.indexOf(branchToRemoveNow),
              1
            );
          }

          setBranchNameToRemove("");
        }}
        isVisible={isDeleteBranchPressed}
        text={"Do you really want to delete " + branchNameToRemove + "?"}
      />

      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NewBranchScreen" as never);
          }}
          style={styles.settingOption}
        >
          <PlusIcon style={styles.plusIcon} />
          <Text style={styles.plusBranchTitle}>Branch</Text>
        </TouchableOpacity>

        <View
          style={{
            paddingBottom: 0.07 * Dimensions.get("screen").height,
            zIndex: 0,
          }}
        >
          {character().branchParents.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  tempCharacter().selectedBranchParent = item;
                  navigation.navigate("ChangeBranchParentScreen" as never);
                }}
                style={styles.settingOption}
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
                    setIsDeleteBranchPressed(true);
                    setBranchNameToRemove(item.name);
                  }}
                  style={styles.binIconContainer}
                >
                  <BinIcon style={styles.binIcon} />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default BranchesScreen;
