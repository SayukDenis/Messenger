// Oleksii Kovalenko telegram - @traewe

import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import PlusIcon from "../../SemiComponents/Screens/BranchesScreen/Icons/PlusIcon";
import BinIcon from "../../SemiComponents/Screens/MainScreen/Icons/BinIcon";
import { channel } from "../../SemiComponents/DatabaseSimulation/DBChannel";
import { useIsFocused } from "@react-navigation/native";
import Blur from "../../SemiComponents/GeneralComponents/Blur";
import RemovalApproval from "../../SemiComponents/Screens/MainScreen/RemovalApproval";
import { LinearGradient } from "expo-linear-gradient";

interface RolesScreenProps {
  navigation: StackNavigationProp<{}>;
}

const RolesScreen: React.FC<RolesScreenProps> = (props) => {
  const [roleToRemove, setRoleToRemove] = useState(null);

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
      <Blur
        visibleWhen={roleToRemove?.name != null}
        onPress={() => {
          setRoleToRemove(null);
        }}
      />

      <RemovalApproval
        isVisible={roleToRemove?.name != null}
        onAnyPress={() => {
          setRoleToRemove(null);
        }}
        onAgreePress={() => {
          channel.roles = channel.roles.filter(
            (item) => item.name !== roleToRemove?.name
          );
        }}
        text={"Do you really want to delete " + roleToRemove?.name + "?"}
      />

      <Header
        primaryTitle="Roles"
        onGoBackPress={() => {
          props.navigation.goBack();
        }}
      />

      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            channel.selectedRole = null;
            props.navigation.navigate("NewRoleScreen" as never);
          }}
          style={styles.settingOption}
        >
          <PlusIcon style={styles.plusIcon} />
          <Text style={styles.plusRoleTitle}>Role</Text>
        </TouchableOpacity>

        <View
          style={{
            paddingBottom: 0.07 * Dimensions.get("screen").height,
            zIndex: 0,
          }}
        >
          {channel.roles.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  channel.selectedRole = item;
                  props.navigation.navigate("ChangeRoleScreen" as never);
                }}
                style={styles.roleAppearanceContainer}
              >
                <View
                  style={[
                    styles.roleTitleContainerWhileCreating,
                    { left: 0.04 * Dimensions.get("screen").width },
                  ]}
                >
                  <Text style={{ fontSize: 28 }}>{item.emoji}</Text>
                </View>
                <View style={styles.roleTitleContainerWhileCreating}>
                  <Text
                    numberOfLines={1}
                    style={[styles.roleTitle, { color: item.color }]}
                  >
                    {item.name}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setRoleToRemove(item);
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
    </LinearGradient>
  );
};

export default RolesScreen;
