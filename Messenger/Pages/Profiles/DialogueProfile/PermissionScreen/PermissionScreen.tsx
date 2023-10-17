// Oleksii Kovalenko telegram - @traewe

import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "../../SemiComponents/ProfileStyles";
import Header from "../../SemiComponents/Header";
import GoBackButton from "../../SemiComponents/MainScreen/GoBackButton";
import { StackNavigationProp } from "@react-navigation/stack";
import CheckMark from "../../SemiComponents/Assets/Icons/CheckMark";
import { user } from "../../SemiComponents/DBUser";
import ToggleButton from "./ToggleButton";

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
    <View style={styles.mainContainer}>
      <Header primaryTitle={permissionTitle} />

      {/* Going back button */}
      <GoBackButton onPress={() => navigation.goBack()} />

      {/* Emergency message toggle button */}
      <TouchableOpacity
        onPress={() => {
          setIsEmergencyMessagesEnabled(!isEmergencyMessagesEnabled);
        }}
      >
        <View style={styles.settingsOption}>
          <Text style={styles.settingsOptionTitle}>
            {emergencyMessageTitle}
          </Text>
          <ToggleButton
            isEnabled={isEmergencyMessagesEnabled}
            Toggle={() => {
              setIsEmergencyMessagesEnabled(!isEmergencyMessagesEnabled);
            }}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.containerForSettingTitle}>
        <Text style={styles.settingTitle}>Interval</Text>
      </View>

      {/* Different buttons to set an interval */}

      {intervals.map((interval) => (
        <TouchableOpacity
          key={interval.value}
          onPress={() => {
            setSelectedInterval(interval.value);
          }}
          hitSlop={{ top: -0.03 * Dimensions.get("screen").height }}
        >
          <View style={styles.settingsOption}>
            <Text style={styles.settingsOptionTitle}>{interval.title}</Text>
            {selectedInverval === interval.value && (
              <CheckMark style={styles.checkMark} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PermissionScreen;
