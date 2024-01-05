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
import PlusIcon from "../../DialogueProfile/BranchesScreen/Icons/PlusIcon";
import { user } from "../../SemiComponents/DBUser";
import BinIcon from "../../SemiComponents/MainScreen/Icons/BinIcon";
import Blur from "../../SemiComponents/MainScreen/Blur";
import RemovalApproval from "../../SemiComponents/MainScreen/RemovalApproval";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { tempUser } from "../../SemiComponents/DBUser";

type MembersScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const MembersScreen: React.FC<MembersScreenProps> = ({ navigation }) => {
  const [isDeleteMemberPressed, setIsDeleteMemberPressed] = useState(false);
  const [memberNameToRemove, setMemberNameToRemove] = useState("");

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  return (
    <View style={styles.mainContainer}>
      <Header
        primaryTitle="Members"
        onGoBackPress={() => {
          navigation.goBack();
        }}
      />

      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NewBranchScreen" as never);
          }}
          style={styles.memberContainer}
        >
          <PlusIcon style={styles.plusIcon} />
          <Text style={styles.plusMemberTitle}>Member</Text>
        </TouchableOpacity>

        <FlatList
          data={user.branchParents}
          keyExtractor={(item) => user.branchParents.indexOf(item).toString()}
          horizontal={false}
          numColumns={1}
          scrollEnabled={false}
          contentContainerStyle={{
            paddingBottom: 0.07 * Dimensions.get("screen").height,
            zIndex: 0,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                tempUser.selectedBranchParent = item;
                navigation.navigate("ChangeBranchParentScreen" as never);
              }}
              style={styles.memberContainer}
            >
              <View
                style={[
                  styles.memberAvatarInList,
                  {
                    backgroundColor: item.color,
                  },
                ]}
              >
                <Text style={{ fontSize: 20 }}>{item.emoji}</Text>
              </View>
              <View style={styles.memberTitleContainer}>
                <Text numberOfLines={1} style={styles.memberTitleInList}>
                  {item.name}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsDeleteMemberPressed(true);
                  setMemberNameToRemove(item.name);
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

export default MembersScreen;
