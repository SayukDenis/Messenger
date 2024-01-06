// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import Header from "../../SemiComponents/Header";
import PlusIcon from "../../DialogueProfile/BranchesScreen/Icons/PlusIcon";
import { channel } from "../../SemiComponents/DBUser";
import BinIcon from "../../SemiComponents/MainScreen/Icons/BinIcon";
import Blur from "../../SemiComponents/Blur";
import RemovalApproval from "../../SemiComponents/MainScreen/RemovalApproval";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

type SubscribersScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const SubscribersScreen: React.FC<SubscribersScreenProps> = ({
  navigation,
}) => {
  const [subscriberToRemove, setSubscriberToRemove] = useState({
    name: null,
    avatar: null,
    id: null,
  });

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

        <View style={{ paddingBottom: 0.07 * Dimensions.get("screen").height }}>
          {channel.subscribers.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                alert(item.name + " is pressed");
              }}
              style={styles.subscriberContainer}
            >
              <Image
                source={{ uri: item.avatar }}
                style={styles.subscriberAvatarInList}
              />
              <View style={styles.contactTitleContainer}>
                <Text numberOfLines={1} style={styles.contactTitleInList}>
                  {item.name}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSubscriberToRemove(item);
                }}
                style={styles.binIconContainer}
              >
                <BinIcon style={styles.binIcon} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Blur
        visibleWhen={subscriberToRemove?.name != null}
        onPress={() => {
          setSubscriberToRemove(null);
        }}
        style={styles.blurEffect}
      />

      <RemovalApproval
        isVisible={subscriberToRemove?.name != null}
        onAnyPress={() => {
          setSubscriberToRemove(null);
        }}
        onAgreePress={() => {
          channel.subscribers = channel.subscribers.filter(
            (item) => item.id !== subscriberToRemove.id
          );
        }}
        text={"Do you really want to kick " + subscriberToRemove?.name + "?"}
      />
    </View>
  );
};

export default SubscribersScreen;
