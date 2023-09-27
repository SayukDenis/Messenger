//Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles";
import Blur from "./Blur";
import OffNotificationIcon from "./Icons/OffNotificationIcon.tsx";
import ClearChatIcon from "./Icons/ClearChatIcon.tsx";
import SettingsIcon from "./Icons/SettingsIcon.tsx";
import ForwardContactIcon from "./Icons/ForwardContactIcon.tsx";
import BlockIcon from "./Icons/BlockIcon.tsx";
import GoBackIcon from "./Icons/GoBackIcon.tsx";
import SearchIcon from "./Icons/SearchIcon.tsx";
import ElseFeaturesIcon from "./Icons/ElseFeaturesIcon.tsx";
import MutedIcon from "./Icons/MutedIcon.tsx";

interface TopToolBarProps {
  primaryTitle: string;
  secondaryTitle: string;
  elseFeaturesVisible: boolean;
  settingsTitle: string;
  offNotificationtitle: string;
  onNotificationtitle: string;
  clearChatTItle: string;
  forwardContactTitle: string;
  blockTitle: string;
  unblockTitle: string;
  elseFeaturesPressing: (value: boolean) => void;
}

const TopToolBar: React.FC<TopToolBarProps> = (props) => {
  const [isMuted, setIsMuted] = useState(false);

  if (props.primaryTitle.length > 9) {
    props.primaryTitle = props.primaryTitle.slice(0, 9);
  }

  return (
    <View
      style={[
        styles.topToolBar,
        {
          zIndex: props.elseFeaturesVisible ? 2 : 0,
          borderWidth: props.elseFeaturesVisible ? 0 : 1.5,
        },
      ]}
    >
      <Blur
        visibleWhen={props.elseFeaturesVisible}
        onPress={() => {
          props.elseFeaturesPressing(false);
        }}
        style={styles.blurEffectElseFeaturesButton}
      />

      <View style={styles.containerForProfiteTitle}>
        <JacquesFrancoisText
          text={props.primaryTitle}
          style={styles.profileTitle}
        />
        {isMuted && <MutedIcon style={styles.mutedIcon} />}
      </View>

      <JacquesFrancoisText
        text={props.secondaryTitle}
        style={styles.onlineStatusTitle}
      />

      <TouchableWithoutFeedback
        onPress={() => {
          alert("Going back...");
        }}
      >
        <View style={styles.goBackFromProfileButton}>
          <GoBackIcon />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          alert("Searching...");
        }}
      >
        <View style={styles.searchMessagesButton}>
          <SearchIcon />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          props.elseFeaturesPressing(true);
        }}
      >
        <View style={styles.elseFeaturesButton}>
          <ElseFeaturesIcon />
        </View>
      </TouchableWithoutFeedback>
      {props.elseFeaturesVisible && (
        <View
          style={[
            styles.elseFeaturesButtonsContainer,
            { zIndex: props.elseFeaturesVisible ? 2 : 0 },
          ]}
        >
          <TouchableWithoutFeedback>
            <View style={styles.additionalFeatureButton}>
              <SettingsIcon style={styles.additionalFeatureIcon} />
              <JacquesFrancoisText
                text={props.settingsTitle}
                style={styles.additionalFeatureTitle}
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              setIsMuted(!isMuted);
              props.elseFeaturesPressing(false);
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

          <TouchableWithoutFeedback>
            <View style={styles.additionalFeatureButton}>
              <ClearChatIcon style={styles.additionalFeatureIcon} />
              <JacquesFrancoisText
                text={props.clearChatTItle}
                style={styles.additionalFeatureTitle}
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.additionalFeatureButton}>
              <ForwardContactIcon style={styles.additionalFeatureIcon} />
              <JacquesFrancoisText
                text={props.forwardContactTitle}
                style={styles.additionalFeatureTitle}
              />
            </View>
          </TouchableWithoutFeedback>

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
    </View>
  );
};

export default TopToolBar;
