// Oleksii Kovalenko telegram - @traewe

import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import CheckMarkIcon from "../../SemiComponents/Screens/MainScreen/Icons/CheckMarkIcon";
import { user } from "../../SemiComponents/DatabaseSimulation/DBUser";
import ToggleButton from "../../SemiComponents/GeneralComponents/ToggleButton";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

type PermissionScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const PermissionScreen: React.FC<PermissionScreenProps> = ({ navigation }) => {
  const [selectedInverval, setSelectedInterval] = useState(
    user.selectedInterval
  );
  const [isEmergencyMessagesEnabled, setIsEmergencyMessagesEnabled] = useState(
    user.isEmergencyMessagesEnabled
  );

  const permissionTitle: string = "Permission";
  const emergencyMessageTitle: string = "Emergency Message";
  const eitherTitle: string = "Either";
  const minTitle: string = "min";

  const intervals = [
    { title: eitherTitle, value: 0 },
    { title: 1 + " " + minTitle, value: 1 },
    { title: 3 + " " + minTitle, value: 3 },
    { title: 5 + " " + minTitle, value: 5 },
    { title: 10 + " " + minTitle, value: 10 },
  ];

  useEffect(() => {
    user.selectedInterval = selectedInverval;
    user.isEmergencyMessagesEnabled = isEmergencyMessagesEnabled;
  });

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
      <Header
        primaryTitle={permissionTitle}
        onGoBackPress={() => {
          navigation.goBack();
        }}
      />

      {/* Emergency message toggle button */}
      <TouchableOpacity
        onPress={() => {
          setIsEmergencyMessagesEnabled(!isEmergencyMessagesEnabled);
        }}
        style={styles.settingOption}
      >
        <LinearGradient
          colors={["#cf9b95", "#c98bb8", "#c37adb"]}
          style={styles.linearGradient}
        />
        <Text style={styles.settingOptionTitle}>{emergencyMessageTitle}</Text>
        <ToggleButton
          isEnabled={isEmergencyMessagesEnabled}
          Toggle={() => {
            setIsEmergencyMessagesEnabled(!isEmergencyMessagesEnabled);
          }}
        />
      </TouchableOpacity>

      <View style={styles.containerForSettingTitle}>
        <Text style={styles.settingTitle}>Interval</Text>
      </View>

      {/* Different buttons to set an interval */}

      {intervals.map((interval, index) => (
        <View key={index}>
          <View style={{ height: 0.005 * Dimensions.get("screen").height }} />
          <TouchableOpacity
            onPress={() => {
              setSelectedInterval(interval.value);
            }}
            style={styles.settingOption}
          >
            <LinearGradient
              colors={["#cf9b95", "#c98bb8", "#c37adb"]}
              style={styles.linearGradient}
            />
            <Text style={styles.settingOptionTitle}>{interval.title}</Text>
            {selectedInverval === interval.value && (
              <CheckMarkIcon
                style={styles.checkMark}
                stroke="rgb(115, 76, 165)"
              />
            )}
          </TouchableOpacity>
        </View>
      ))}
    </LinearGradient>
  );
};

export default PermissionScreen;
