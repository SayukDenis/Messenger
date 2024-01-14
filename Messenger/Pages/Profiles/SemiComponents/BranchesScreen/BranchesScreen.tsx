// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import Header from "../GeneralComponents/Header";
import PlusIcon from "./Icons/PlusIcon";
import BinIcon from "../MainScreen/Icons/BinIcon";
import Blur from "../GeneralComponents/Blur";
import RemovalApproval from "../MainScreen/RemovalApproval";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { character, tempCharacter } from "../DBUser";
import { LinearGradient } from "expo-linear-gradient";
import ButtonWithPlus from "../GeneralComponents/ButtonWithPlus";

const screenHeight = Dimensions.get("screen").height;

type BranchesScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const BranchesScreen: React.FC<BranchesScreenProps> = ({ navigation }) => {
  const [isDeleteBranchPressed, setIsDeleteBranchPressed] = useState(false);
  const [branchNameToRemove, setBranchNameToRemove] = useState("");

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
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
        <ButtonWithPlus
          text="Branch"
          onPress={() => {
            navigation.navigate("NewBranchScreen" as never);
          }}
        />

        <View
          style={{
            paddingBottom: 0.09 * screenHeight,
            zIndex: 0,
            top: 0.04 * screenHeight,
          }}
        >
          {character().branchParents.map((item, index) => {
            return (
              <>
                <View
                  key={index + character().branchParents.length}
                  style={{
                    height: 0.005 * screenHeight,
                  }}
                />
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    tempCharacter().selectedBranchParent = item;
                    navigation.navigate("ChangeBranchParentScreen" as never);
                  }}
                  style={[styles.settingOption, { top: 0 }]}
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
                      setIsDeleteBranchPressed(true);
                      setBranchNameToRemove(item.name);
                    }}
                    style={styles.binIconContainer}
                  >
                    <BinIcon style={styles.binIcon} />
                  </TouchableOpacity>
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default BranchesScreen;
