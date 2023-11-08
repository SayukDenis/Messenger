// Oleksii Kovalenko telegram - @traewe

import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/Header";
import GoBackButton from "../../SemiComponents/GoBackButton";
import { StackNavigationProp } from "@react-navigation/stack";
import CheckmarkIcon from "./Icons/CheckMarkIcon";
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
      >
        <View style={styles.settingOption}>
          <Text style={styles.settingOptionTitle}>{emergencyMessageTitle}</Text>
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
          style={styles.settingOption}
        >
          <Text style={styles.settingOptionTitle}>{interval.title}</Text>
          {selectedInverval === interval.value && (
            <CheckmarkIcon style={styles.checkMark} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PermissionScreen;
