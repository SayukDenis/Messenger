// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles.tsx";
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
  setIsMuted: (value: boolean) => void;
  isMuted: boolean;
  setIsBlocked: (value: boolean) => void;
  isBlocked: boolean;
  setIsClearChatButtonClicked: (value: boolean) => void;
  isClearChatButtonClicked: boolean;
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
        <View
          style={[
            styles.elseFeaturesButtonsContainer,
            { zIndex: props.isVisible ? 2 : 0 },
          ]}
        >
          {/* Settings button */}
          <TouchableWithoutFeedback>
            <View style={styles.additionalFeatureButton}>
              <SettingsIcon style={styles.additionalFeatureIcon} />
              <JacquesFrancoisText
                text={settingsTitle}
                style={styles.additionalFeatureTitle}
              />
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
              <JacquesFrancoisText
                text={
                  props.isMuted ? onNotificationtitle : offNotificationtitle
                }
                style={styles.additionalFeatureTitle}
              />
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
              <JacquesFrancoisText
                text={clearChatTItle}
                style={styles.additionalFeatureTitle}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Forward contact button */}
          <TouchableWithoutFeedback>
            <View style={styles.additionalFeatureButton}>
              <ForwardContactIcon style={styles.additionalFeatureIcon} />
              <JacquesFrancoisText
                text={forwardContactTitle}
                style={styles.additionalFeatureTitle}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Toggle block button */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.setIsBlocked(!props.isBlocked);
              props.setIsVisible(false);
            }}
          >
            <View style={styles.additionalFeatureButton}>
              {props.isBlocked ? (
                <UnblockIcon style={styles.additionalFeatureIcon} />
              ) : (
                <BlockIcon style={styles.additionalFeatureIcon} />
              )}
              <JacquesFrancoisText
                text={props.isBlocked ? unblockButtonTitle : blockButtonTitle}
                style={styles.blockButtonTitle}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </>
  );
};

export default ElseFeaturesButtons;
