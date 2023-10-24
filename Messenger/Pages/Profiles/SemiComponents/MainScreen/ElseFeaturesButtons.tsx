// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { styles } from "./Styles.tsx";
import { StackNavigationProp } from "@react-navigation/stack";
import OffNotificationIcon from "./Icons/OffNotificationIcon.tsx";
import OnNotificationIcon from "./Icons/OnNotificationIcon.tsx";
import ClearChatIcon from "./Icons/ClearChatIcon.tsx";
import SettingsIcon from "./Icons/SettingsIcon.tsx";
import ForwardContactIcon from "./Icons/ForwardContactIcon.tsx";
import BlockIcon from "./Icons/BlockIcon.tsx";
import UnblockIcon from "./Icons/UnblockIcon.tsx";

interface ElseFeaturesButtonsProps {
  setIsVisible: (value: boolean) => void;
  isVisible: boolean;
  onMutePress: (value: boolean) => void;
  isMuted: boolean;
  onBlockPress?: (value: boolean) => void;
  isBlocked?: boolean;
  onClearChatPress: (value: boolean) => void;
  isClearChatPressed: boolean;
  navigation: StackNavigationProp<{}>;
  settingsPress: () => void;
}

const ElseFeaturesButtons: React.FC<ElseFeaturesButtonsProps> = (props) => {
  const settingsTitle: string = "Settings";
  const offNotificationtitle: string = "Off notification";
  const onNotificationtitle: string = "On notification";
  const clearChatTItle: string = "Clear chat";
  const forwardContactTitle: string = "Forward contact";
  const blockButtonTitle: string = "Block";
  const unblockButtonTitle: string = "Unblock";

  return (
    <>
      {props.isVisible && (
        <View style={styles.elseFeaturesButtonsContainer}>
          {/* Settings button */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.settingsPress();
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
              props.onMutePress(!props.isMuted);
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
              props.onClearChatPress(true);
            }}
          >
            <View style={styles.additionalFeatureButton}>
              <ClearChatIcon style={styles.additionalFeatureIcon} />
              <Text style={styles.additionalFeatureTitle}>
                {clearChatTItle}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          {/* Forward contact button */}
          <TouchableWithoutFeedback>
            <View style={styles.additionalFeatureButton}>
              <ForwardContactIcon style={styles.additionalFeatureIcon} />
              <Text style={styles.additionalFeatureTitle}>
                {forwardContactTitle}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          {/* Toggle block button */}
          <TouchableWithoutFeedback
            onPress={() => {
              if (props.onBlockPress !== undefined) {
                props.onBlockPress(!props.isBlocked);
              }
              props.setIsVisible(false);
            }}
          >
            <View style={styles.additionalFeatureButton}>
              {props.isBlocked ? (
                <UnblockIcon style={styles.additionalFeatureIcon} />
              ) : (
                <BlockIcon style={styles.additionalFeatureIcon} />
              )}
              <Text style={styles.blockButtonTitle}>
                {props.isBlocked ? unblockButtonTitle : blockButtonTitle}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </>
  );
};

export default ElseFeaturesButtons;
