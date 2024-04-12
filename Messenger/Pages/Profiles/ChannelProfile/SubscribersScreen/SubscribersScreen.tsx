// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import Header from "../../SemiComponents/GeneralComponents/Header";
import PlusIcon from "../../SemiComponents/Assets/Icons/PlusIcon";
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
            navigation.navigate("ForwardToChatsScreen" as never);
          }}
          style={styles.subscriberContainer}
        >
          <LinearGradient
            colors={["#cf9b95", "#c98bb8", "#c37adb"]}
            style={[styles.linearGradient, { opacity: 0.7 }]}
          />
          <PlusIcon style={styles.plusIcon} stroke="rgb(43, 29, 29)" />
          <Text style={styles.plusSubscriberTitle}>Subscriber</Text>
        </TouchableOpacity>

        <View style={{ paddingBottom: 0.07 * Dimensions.get("screen").height }}>
          {channel.subscribers.map((item, index) => {
            return (
              <View key={index}>
                <View
                  style={{
                    width: "100%",
                    height: 0.01 * Dimensions.get("screen").height,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    alert(item.name + " is pressed");
                  }}
                  style={styles.subscriberContainer}
                >
                  <LinearGradient
                    colors={["#cf9b95", "#c98bb8", "#c37adb"]}
                    style={[styles.linearGradient, { opacity: 0.7 }]}
                  />
                  <Image
                    source={{ uri: item.avatar }}
                    style={styles.subscriberAvatarInList}
                  />
                  <View style={styles.subscriberTitleContainer}>
                    <Text
                      numberOfLines={1}
                      style={styles.subscriberTitleInList}
                    >
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
              </View>
            );
          })}
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
