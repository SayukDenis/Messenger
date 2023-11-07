// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import OffNotificationIcon from "./Icons/OffNotificationIcon";
import OnNotificationIcon from "./Icons/OnNotificationIcon";
import BinIcon from "./Icons/BinIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import ForwardContactIcon from "./Icons/ForwardContactIcon";
import BlockIcon from "./Icons/BlockIcon";
import UnblockIcon from "./Icons/UnblockIcon";
import EyeIcon from "./Icons/EyeIcon";
import ExitDoorIcon from "./Icons/ExitIcon";
import ClearChatIcon from "./Icons/ClearChatIcon";

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
  mode: string;
}

const ElseFeaturesButtons: React.FC<ElseFeaturesButtonsProps> = (props) => {
  const settingsTitle: string = "Settings";
  const offNotificationtitle: string = "Off notification";
  const onNotificationtitle: string = "On notification";
  const clearChatTItle: string = "Clear chat";
  const forwardContactTitle: string = "Forward contact";
  const blockButtonTitle: string = "Block";
  const unblockButtonTitle: string = "Unblock";
  const viewMemberTitle: string = "View member";
  const deleteGroupTitle: string = "Delete group";
  const leaveGroupTitle: string = "Leave group";

  return (
    <>
      {props.isVisible && (
        <View style={styles.elseFeaturesButtonsContainer}>
          {/* Settings button */}
          <TouchableOpacity
            onPress={() => {
              props.settingsPress();
              props.setIsVisible(false);
            }}
            style={styles.additionalFeatureButton}
          >
            <SettingsIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>{settingsTitle}</Text>
          </TouchableOpacity>

          {/* Toggle Notification button */}
          <TouchableOpacity
            onPress={() => {
              props.onMutePress(!props.isMuted);
              props.setIsVisible(false);
            }}
            style={styles.additionalFeatureButton}
          >
            {props.isMuted ? (
              <OnNotificationIcon style={styles.additionalFeatureIcon} />
            ) : (
              <OffNotificationIcon style={styles.additionalFeatureIcon} />
            )}
            <Text style={styles.additionalFeatureTitle}>
              {props.isMuted ? onNotificationtitle : offNotificationtitle}
            </Text>
          </TouchableOpacity>

          {/* Clear chat button */}
          <TouchableOpacity
            onPress={() => {
              props.onClearChatPress(true);
            }}
            style={styles.additionalFeatureButton}
          >
            <ClearChatIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>{clearChatTItle}</Text>
          </TouchableOpacity>

          {props.mode === "user" && (
            <>
              {/* Forward contact button */}
              <TouchableOpacity style={styles.additionalFeatureButton}>
                <ForwardContactIcon style={styles.additionalFeatureIcon} />
                <Text style={styles.additionalFeatureTitle}>
                  {forwardContactTitle}
                </Text>
              </TouchableOpacity>

              {/* Toggle block button */}
              <TouchableOpacity
                onPress={() => {
                  if (props.onBlockPress !== undefined) {
                    props.onBlockPress(!props.isBlocked);
                  }
                  props.setIsVisible(false);
                }}
                style={styles.additionalFeatureButton}
              >
                {props.isBlocked ? (
                  <UnblockIcon style={styles.additionalFeatureIcon} />
                ) : (
                  <BlockIcon style={styles.additionalFeatureIcon} />
                )}
                <Text style={styles.blockButtonTitle}>
                  {props.isBlocked ? unblockButtonTitle : blockButtonTitle}
                </Text>
              </TouchableOpacity>
            </>
          )}
          {props.mode === "group" && (
            <>
              {/* View member button */}
              <TouchableOpacity style={styles.additionalFeatureButton}>
                <EyeIcon style={styles.additionalFeatureIcon} />
                <Text style={styles.additionalFeatureTitle}>
                  {viewMemberTitle}
                </Text>
              </TouchableOpacity>

              {/* Delete group button */}
              <TouchableOpacity style={styles.additionalFeatureButton}>
                <BinIcon style={styles.additionalFeatureIcon} />
                <Text style={[styles.additionalFeatureTitle, { color: "red" }]}>
                  {deleteGroupTitle}
                </Text>
              </TouchableOpacity>

              {/* Leave group button */}
              <TouchableOpacity style={styles.additionalFeatureButton}>
                <ExitDoorIcon style={styles.additionalFeatureIcon} />
                <Text style={[styles.additionalFeatureTitle, { color: "red" }]}>
                  {leaveGroupTitle}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </>
  );
};

export default ElseFeaturesButtons;
