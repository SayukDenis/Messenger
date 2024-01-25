// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Dimensions, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import Header from "../../SemiComponents/GeneralComponents/Header";
import PlusIcon from "../../SemiComponents/Screens/BranchesScreen/Icons/PlusIcon";
import { channel } from "../../SemiComponents/DatabaseSimulation/DBChannel";
import BinIcon from "../../SemiComponents/Screens/MainScreen/Icons/BinIcon";
import Blur from "../../SemiComponents/GeneralComponents/Blur";
import RemovalApproval from "../../SemiComponents/GeneralComponents/RemovalApproval";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

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
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
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
          <Text style={styles.plusSubscriberTitle}>Subscriber</Text>
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
              <View style={styles.subscriberTitleContainer}>
                <Text numberOfLines={1} style={styles.subscriberTitleInList}>
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
    </LinearGradient>
  );
};

export default SubscribersScreen;
