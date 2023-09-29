// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles.tsx";
import OffNotificationIcon from "./Icons/OffNotificationIcon.tsx";
import ClearChatIcon from "./Icons/ClearChatIcon.tsx";
import SettingsIcon from "./Icons/SettingsIcon.tsx";
import ForwardContactIcon from "./Icons/ForwardContactIcon.tsx";
import BlockIcon from "./Icons/BlockIcon.tsx";

interface ElseFeaturesButtonsProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  OffOnNotificationClick: any;
  settingsTitle: string;
  offNotificationtitle: string;
  onNotificationtitle: string;
  clearChatTItle: string;
  forwardContactTitle: string;
  blockTitle: string;
  unblockTitle: string;
}

const ElseFeaturesButtons: React.FC<ElseFeaturesButtonsProps> = (props) => {
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
                text={props.settingsTitle}
                style={styles.additionalFeatureTitle}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Toggle Notification button */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.OffOnNotificationClick();
              props.setIsVisible(false);
            }}
          >
            <View style={styles.additionalFeatureButton}>
              <OffNotificationIcon style={styles.additionalFeatureIcon} />
              <JacquesFrancoisText
                text={props.offNotificationtitle}
                style={styles.additionalFeatureTitle}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Clear chat button */}
          <TouchableWithoutFeedback>
            <View style={styles.additionalFeatureButton}>
              <ClearChatIcon style={styles.additionalFeatureIcon} />
              <JacquesFrancoisText
                text={props.clearChatTItle}
                style={styles.additionalFeatureTitle}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Forward contact button */}
          <TouchableWithoutFeedback>
            <View style={styles.additionalFeatureButton}>
              <ForwardContactIcon style={styles.additionalFeatureIcon} />
              <JacquesFrancoisText
                text={props.forwardContactTitle}
                style={styles.additionalFeatureTitle}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Toggle block button */}
          <TouchableWithoutFeedback>
            <View style={styles.additionalFeatureButton}>
              <BlockIcon style={styles.additionalFeatureIcon} />
              <JacquesFrancoisText
                text={props.blockTitle}
                style={styles.blockButton}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </>
  );
};

export default ElseFeaturesButtons;
