//Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles";
import Blur from "./Blur";
import GoBackIcon from "./Icons/GoBackIcon.tsx";
import SearchIcon from "./Icons/SearchIcon.tsx";
import ElseFeaturesIcon from "./Icons/ElseFeaturesIcon.tsx";
import MutedIcon from "./Icons/MutedIcon.tsx";
import Username from "./Username.tsx";
import ElseFeaturesButtons from "./ElseFeaturesButtons.tsx";

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

      <Username primaryTitle={props.primaryTitle} />

      {isMuted && <MutedIcon style={styles.mutedIcon} />}

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
