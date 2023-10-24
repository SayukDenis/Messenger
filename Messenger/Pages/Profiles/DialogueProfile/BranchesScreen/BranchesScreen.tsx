// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import Header from "../../SemiComponents/Header";
import GoBackButton from "../../SemiComponents/GoBackButton";
import PlusIcon from "./Icons/PlusIcon";

type BranchesScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const BranchesScreen: React.FC<BranchesScreenProps> = ({ navigation }) => {
  const branchesTitle: string = "Branches";
  const branchTitle: string = "Branch";

  return (
    <View style={styles.mainContainer}>
      <Header primaryTitle={branchesTitle} />

      <GoBackButton onPress={() => navigation.goBack()} />

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("NewBranchScreen" as never);
        }}
      >
        <View style={styles.settingOption}>
          <PlusIcon style={styles.plusIcon} />
          <Text style={styles.plusBranchTitle}>{branchTitle}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BranchesScreen;
