// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles";
import Blur from "./Blur";
import GoBackIcon from "./Icons/GoBackIcon.tsx";
import SearchIcon from "./Icons/SearchIcon.tsx";
import ElseFeaturesIcon from "./Icons/ElseFeaturesIcon.tsx";
import MutedIcon from "./Icons/MutedIcon.tsx";
import Name from "./Name.tsx";
import ElseFeaturesButtons from "./ElseFeaturesButtons.tsx";

interface TopToolBarProps {
  primaryTitle: string;
  secondaryTitle?: string;
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
      {/* Blur if is features is pressed*/}
      <Blur
        visibleWhen={props.elseFeaturesVisible}
        onPress={() => {
          props.elseFeaturesPressing(false);
        }}
        style={styles.blurEffectElseFeaturesButton}
      />

      {/* Main name */}
      <Name primaryTitle={props.primaryTitle} />

      {isMuted && <MutedIcon style={styles.mutedIcon} />}

      {/* Secondary title */}
      <JacquesFrancoisText
        text={props.secondaryTitle}
        style={styles.onlineStatusTitle}
      />

      {/* Going back button */}
      <TouchableWithoutFeedback
        onPress={() => {
          alert("Going back...");
        }}
      >
        <View style={styles.goBackFromProfileButton}>
          <GoBackIcon />
        </View>
      </TouchableWithoutFeedback>

      {/* Search message button */}
      <TouchableWithoutFeedback
        onPress={() => {
          alert("Searching...");
        }}
      >
        <View style={styles.searchMessagesButton}>
          <SearchIcon />
        </View>
      </TouchableWithoutFeedback>

      {/* Else features button */}
      <TouchableWithoutFeedback
        onPress={() => {
          props.elseFeaturesPressing(true);
        }}
      >
        <View style={styles.elseFeaturesButton}>
          <ElseFeaturesIcon />
        </View>
      </TouchableWithoutFeedback>

      {/* Else features which appear when else features button is pressed*/}
      <ElseFeaturesButtons
        isVisible={props.elseFeaturesVisible}
        setIsVisible={props.elseFeaturesPressing}
        OffOnNotificationClick={() => {
          setIsMuted(!isMuted);
        }}
        settingsTitle={props.settingsTitle}
        offNotificationtitle={props.offNotificationtitle}
        onNotificationtitle={props.onNotificationtitle}
        clearChatTItle={props.clearChatTItle}
        forwardContactTitle={props.forwardContactTitle}
        blockTitle={props.blockTitle}
        unblockTitle={props.unblockTitle}
      />
    </View>
  );
};

export default TopToolBar;
