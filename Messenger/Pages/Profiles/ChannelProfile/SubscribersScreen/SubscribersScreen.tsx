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

type SubscribersScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const SubscribersScreen: React.FC<SubscribersScreenProps> = ({
  navigation,
}) => {
  const [isDeleteSubscriberPressed, setIsDeleteSubscriberPressed] =
    useState(false);
  const [subscriberNameToRemove, setSubscriberNameToRemove] = useState("");

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  return (
    <View style={styles.mainContainer}>
      <Header
        primaryTitle="Subscribers"
        onGoBackPress={() => {
          navigation.goBack();
        }}
      />

      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddSubscriberScreen" as never);
          }}
          style={styles.subscriberContainer}
        >
          <PlusIcon style={styles.plusIcon} />
          <Text style={styles.plusSubscriberTitle}>Member</Text>
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
              style={styles.subscriberContainer}
            >
              <View
                style={[
                  styles.subscriberAvatarInList,
                  {
                    backgroundColor: item.color,
                  },
                ]}
              >
                <Text style={{ fontSize: 20 }}>{item.emoji}</Text>
              </View>
              <View style={styles.subscriberTitleContainer}>
                <Text numberOfLines={1} style={styles.subscriberTitleInList}>
                  {item.name}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsDeleteSubscriberPressed(true);
                  setSubscriberNameToRemove(item.name);
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

export default SubscribersScreen;
