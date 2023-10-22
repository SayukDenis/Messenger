import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { styles } from "../ProfileStyles.tsx";
import { StackNavigationProp } from "@react-navigation/stack";
import OffNotificationIcon from "./Icons/OffNotificationIcon.tsx";
import OnNotificationIcon from "./Icons/OnNotificationIcon.tsx";
import ClearChatIcon from "./Icons/ClearChatIcon.tsx";
import SettingsIcon from "./Icons/SettingsIcon.tsx";
import EyeIcon from "./Icons/EyeIcon.tsx";
import ExitDoorIcon from "./Icons/ExitIcon.tsx";

interface ElseFeaturesButtonsProps {
  setIsVisible: (value: boolean) => void;
  isVisible: boolean;
  setIsMuted: (value: boolean) => void;
  isMuted: boolean;
  setIsBlocked?: (value: boolean) => void;
  isBlocked?: boolean;
  setIsClearChatButtonClicked: (value: boolean) => void;
  isClearChatButtonClicked: boolean;
  navigation: StackNavigationProp<{}>;
  settingsClick: () => void;
}

const ElseFeaturesButtons: React.FC<ElseFeaturesButtonsProps> = (props) => {
  const settingsTitle: string = "Settings";
  const offNotificationtitle: string = "Off notification";
  const onNotificationtitle: string = "On notification";
  const clearChatTItle: string = "Clear chat";
  const viewMemberTitle: string = "View member";
  const DeleteGroupTitle: string = "Delete Group";
  const LeaveGroupTitle: string = "Leave Group";

  return (
    <>
      {props.isVisible && (
        <View style={styles.elseFeaturesButtonsContainer}>
          {/* Settings button */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.settingsClick();
              props.setIsVisible(false);
            }}
          >
            <View style={styles.additionalFeatureButton}>
              <SettingsIcon style={styles.additionalFeatureIcon} />
              <Text style={styles.additionalFeatureTitle}>{settingsTitle}</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* Toggle Notification button */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.setIsMuted(!props.isMuted);
              props.setIsVisible(false);
            }}
          >
            <View style={styles.additionalFeatureButton}>
              {props.isMuted ? (
                <OnNotificationIcon style={styles.additionalFeatureIcon} />
              ) : (
                <OffNotificationIcon style={styles.additionalFeatureIcon} />
              )}
              <Text style={styles.additionalFeatureTitle}>
                {props.isMuted ? onNotificationtitle : offNotificationtitle}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {/* Clear chat button */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.setIsClearChatButtonClicked(true);
            }}
          >
            <View style={styles.additionalFeatureButton}>
              <ClearChatIcon style={styles.additionalFeatureIcon} />
              <Text style={styles.additionalFeatureTitle}>
                {clearChatTItle}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {/* View member button */}
          <TouchableWithoutFeedback>
            <View style={styles.additionalFeatureButton}>
              <EyeIcon style={styles.additionalFeatureIcon} />
              <Text style={styles.additionalFeatureTitle}>
                {viewMemberTitle}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {/* Delete group button */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.setIsClearChatButtonClicked(true);
            }}
          >
            <View style={styles.additionalFeatureButton}>
              <EyeIcon style={styles.additionalFeatureIcon} />
              <Text style={styles.blockButtonTitle}>{DeleteGroupTitle}</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* Leave group button */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.setIsClearChatButtonClicked(true);
            }}
          >
            <View style={styles.additionalFeatureButton}>
              <ExitDoorIcon style={styles.additionalFeatureIcon} />
              <Text style={styles.blockButtonTitle}>{LeaveGroupTitle}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </>
  );
};

export default ElseFeaturesButtons;
