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
import LockIcon from "./Icons/LockIcon";

interface ElseFeaturesButtonsProps {
  setIsVisible: (value: boolean) => void;
  isVisible: boolean;
  onMutePress: (value: boolean) => void;
  isMuted: boolean;
  onBlockPress?: (value: boolean) => void;
  isBlocked?: boolean;
  onClearChatPress: () => void;
  onSettingsPress: () => void;
  onTypeChannelPress?: () => void;
  mode: string;
}

const ElseFeaturesButtons: React.FC<ElseFeaturesButtonsProps> = (props) => {
  return (
    <>
      {props.isVisible && (
        <View style={styles.elseFeaturesButtonsContainer}>
          {/* Settings button */}
          <TouchableOpacity
            onPress={() => {
              props.onSettingsPress();
              props.setIsVisible(false);
            }}
            style={styles.additionalFeatureButton}
          >
            <SettingsIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Settings</Text>
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
              {props.isMuted ? "On notification" : "Off notification"}
            </Text>
          </TouchableOpacity>

          {/* Clear chat button */}
          <TouchableOpacity
            onPress={() => {
              props.onClearChatPress();
            }}
            style={styles.additionalFeatureButton}
          >
            <ClearChatIcon style={styles.additionalFeatureIcon} />
            <Text style={styles.additionalFeatureTitle}>Clear chat</Text>
          </TouchableOpacity>

          {/* For user */}
          {props.mode === "user" && (
            <>
              {/* Forward contact button */}
              <TouchableOpacity style={styles.additionalFeatureButton}>
                <ForwardContactIcon style={styles.additionalFeatureIcon} />
                <Text style={styles.additionalFeatureTitle}>
                  Forward contact
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
                  {props.isBlocked ? "Unblock" : "Block"}
                </Text>
              </TouchableOpacity>
            </>
          )}

          {/* For group */}
          {props.mode === "group" && (
            <>
              {/* View member button */}
              <TouchableOpacity style={styles.additionalFeatureButton}>
                <EyeIcon style={styles.additionalFeatureIcon} />
                <Text style={styles.additionalFeatureTitle}>View member</Text>
              </TouchableOpacity>

              {/* Delete group button */}
              <TouchableOpacity style={styles.additionalFeatureButton}>
                <BinIcon style={styles.additionalFeatureIcon} />
                <Text style={[styles.additionalFeatureTitle, { color: "red" }]}>
                  Delete group
                </Text>
              </TouchableOpacity>

              {/* Leave group button */}
              <TouchableOpacity style={styles.additionalFeatureButton}>
                <ExitDoorIcon style={styles.additionalFeatureIcon} />
                <Text style={[styles.additionalFeatureTitle, { color: "red" }]}>
                  Leave group
                </Text>
              </TouchableOpacity>
            </>
          )}

          {/* For channel */}
          {props.mode === "channel" && (
            <>
              {/* Type channel button */}
              <TouchableOpacity
                onPress={() => {
                  props.onTypeChannelPress();
                }}
                style={styles.additionalFeatureButton}
              >
                <LockIcon style={styles.additionalFeatureIcon} />
                <Text style={styles.additionalFeatureTitle}>Type channel</Text>
              </TouchableOpacity>

              {/* Delete channel button */}
              <TouchableOpacity style={styles.additionalFeatureButton}>
                <BinIcon style={styles.additionalFeatureIcon} />
                <Text style={[styles.additionalFeatureTitle, { color: "red" }]}>
                  Delete channel
                </Text>
              </TouchableOpacity>

              {/* Leave channel button */}
              <TouchableOpacity style={styles.additionalFeatureButton}>
                <ExitDoorIcon style={styles.additionalFeatureIcon} />
                <Text style={[styles.additionalFeatureTitle, { color: "red" }]}>
                  Leave channel
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
