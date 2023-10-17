// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../../SemiComponents/ProfileStyles";
import Header from "../../SemiComponents/Header";
import GoBackButton from "../../SemiComponents/MainScreen/GoBackButton";
import PlusIcon from "./Icons/PlusIcon";

type BranchesProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const Branches: React.FC<BranchesProps> = ({ navigation }) => {
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
        <View style={styles.settingsOption}>
          <PlusIcon style={styles.plusIcon} />
          <Text style={styles.plusBranchTitle}>{branchTitle}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Branches;
