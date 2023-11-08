// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import Header from "../../SemiComponents/Header";
import GoBackButton from "../../SemiComponents/GoBackButton";
import PlusIcon from "./Icons/PlusIcon";
import { user } from "../../SemiComponents/DBUser";
import BinIcon from "../../SemiComponents/MainScreen/Icons/BinIcon";
import Blur from "../../SemiComponents/MainScreen/Blur";
import RemovalApproval from "../../SemiComponents/MainScreen/RemovalApproval";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

type BranchesScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const BranchesScreen: React.FC<BranchesScreenProps> = ({ navigation }) => {
  const branchesTitle: string = "Branches";
  const branchTitle: string = "Branch";
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
        primaryTitle={branchesTitle}
        onGoBackPress={() => {
          navigation.goBack();
        }}
      />

      <RemovalApproval
        onAnyPress={() => {
          setIsDeleteBranchPressed(false);
        }}
        onAgreePress={() => {
          const branchToRemoveNow = user.branches.find(
            (branch) => branch.name === branchNameToRemove
          );

          if (branchToRemoveNow) {
            user.branches.splice(user.branches.indexOf(branchToRemoveNow), 1);
          }

          setBranchNameToRemove("");
        }}
        isPressed={isDeleteBranchPressed}
        text={user.removalText + " " + branchNameToRemove + "?"}
      />

      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NewBranchScreen" as never);
          }}
          style={styles.settingOption}
        >
          <PlusIcon style={styles.plusIcon} />
          <Text style={styles.plusBranchTitle}>{branchTitle}</Text>
        </TouchableOpacity>

        <FlatList
          data={user.branches.map((branch) => ({ branch }))}
          keyExtractor={(item) => item.branch.name}
          horizontal={false}
          numColumns={1}
          scrollEnabled={false}
          contentContainerStyle={{
            paddingBottom: 0.07 * Dimensions.get("screen").height,
            zIndex: 0,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.settingOption}>
              <View
                style={[
                  styles.branchAvatarInList,
                  {
                    backgroundColor: item.branch.color,
                  },
                ]}
              >
                <Text style={{ fontSize: 20 }}>{item.branch.emoji}</Text>
              </View>
              <View style={styles.branchTitleContainer}>
                <Text numberOfLines={1} style={styles.branchTitleInList}>
                  {item.branch.name}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsDeleteBranchPressed(true);
                  setBranchNameToRemove(item.branch.name);
                }}
                style={styles.binIconContainer}
              >
                <BinIcon style={styles.binIcon} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default BranchesScreen;
