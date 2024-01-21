// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import OffNotificationIcon from "./Icons/OffNotificationIcon";
import OnNotificationIcon from "./Icons/OnNotificationIcon";
import BinIcon from "./Icons/BinIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import ForwardContactIcon from "./Icons/ForwardContactIcon";
import BlockIcon from "./Icons/BlockIcon";
import UnblockIcon from "./Icons/UnblockIcon";
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
  onForwardPress?: () => void;
  mode: string;
}

const ElseFeaturesButtons: React.FC<ElseFeaturesButtonsProps> = (props) => {
  const elseFeaturesForEachProfile = [
    {
      onPress: () => {
        props.onSettingsPress();
        props.setIsVisible(false);
      },
      icon: <SettingsIcon style={styles.elseFeatureIcon} />,
      title: "Settings",
    },
    {
      onPress: () => {
        props.onMutePress(!props.isMuted);
        props.setIsVisible(false);
      },
      icon: props.isMuted ? (
        <OnNotificationIcon style={styles.elseFeatureIcon} />
      ) : (
        <OffNotificationIcon style={styles.elseFeatureIcon} />
      ),
      title: props.isMuted ? "On notification" : "Off notification",
    },
    {
      onPress: () => {
        props.onClearChatPress();
      },
      icon: <ClearChatIcon style={styles.elseFeatureIcon} />,
      title: "Clear chat",
    },
  ];

  return (
    <>
      {props.isVisible && (
        <View style={styles.elseFeaturesButtonsContainer}>
          {elseFeaturesForEachProfile.map((feature, index) => (
            <TouchableOpacity
              key={index}
              onPress={feature.onPress}
              style={styles.elseFeatureButton}
            >
              {feature.icon}
              <Text style={styles.elseFeatureTitle}>{feature.title}</Text>
            </TouchableOpacity>
          ))}

          {/* For user */}
          {props.mode === "user" && (
            <>
              {/* Forward contact button */}
              <TouchableOpacity
                onPress={() => {
                  props.onForwardPress();
                }}
                style={styles.elseFeatureButton}
              >
                <ForwardContactIcon style={styles.elseFeatureIcon} />
                <Text style={styles.elseFeatureTitle}>Forward contact</Text>
              </TouchableOpacity>

              {/* Toggle block button */}
              <TouchableOpacity
                onPress={() => {
                  if (props.onBlockPress !== undefined) {
                    props.onBlockPress(!props.isBlocked);
                  }
                  props.setIsVisible(false);
                }}
                style={styles.elseFeatureButton}
              >
                {props.isBlocked ? (
                  <UnblockIcon style={styles.elseFeatureIcon} />
                ) : (
                  <BlockIcon style={styles.elseFeatureIcon} />
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
              {/* Delete group button */}
              <TouchableOpacity style={styles.elseFeatureButton}>
                <BinIcon style={styles.elseFeatureIcon} />
                <Text style={[styles.elseFeatureTitle, { color: "red" }]}>
                  Delete group
                </Text>
              </TouchableOpacity>

              {/* Leave group button */}
              <TouchableOpacity style={styles.elseFeatureButton}>
                <ExitDoorIcon style={styles.elseFeatureIcon} />
                <Text style={[styles.elseFeatureTitle, { color: "red" }]}>
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
                style={styles.elseFeatureButton}
              >
                <LockIcon style={styles.elseFeatureIcon} />
                <Text style={styles.elseFeatureTitle}>Type channel</Text>
              </TouchableOpacity>

              {/* Delete channel button */}
              <TouchableOpacity style={styles.elseFeatureButton}>
                <BinIcon style={styles.elseFeatureIcon} />
                <Text style={[styles.elseFeatureTitle, { color: "red" }]}>
                  Delete channel
                </Text>
              </TouchableOpacity>

              {/* Leave channel button */}
              <TouchableOpacity style={styles.elseFeatureButton}>
                <ExitDoorIcon style={styles.elseFeatureIcon} />
                <Text style={[styles.elseFeatureTitle, { color: "red" }]}>
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
