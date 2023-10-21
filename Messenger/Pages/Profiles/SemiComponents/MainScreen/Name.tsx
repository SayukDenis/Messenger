// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, Dimensions, Text, TextStyle } from "react-native";
import { styles } from "../ProfileStyles.tsx";
import MutedIcon from "./Icons/MutedIcon.tsx";
import NameAnimation from "./NameAnimation.tsx";

interface UsernameProps {
  primaryTitle: string;
  isMuted?: boolean;
  style: TextStyle;
}

const Name: React.FC<UsernameProps> = (props) => {
  const [textWidth, setTextWidth] = useState(0);
  const screenWidth = Dimensions.get("screen").width;

  return (
    <>
      <View style={{ position: "absolute", opacity: 0 }}>
        <Text
          style={props.style}
          onLayout={(event) => {
            setTextWidth(event.nativeEvent.layout.width);
          }}
        >
          {props.primaryTitle}
        </Text>
      </View>

      {/* if text is too long so it will be as running line */}
      {textWidth > screenWidth * (props.isMuted ? 0.45 : 0.484) && (
        <View
          style={[
            styles.containerForProfiteTitleLongVersion,
            {
              width: props.isMuted ? screenWidth * 0.6 : screenWidth * 0.55,
              right: props.isMuted ? screenWidth * 0.215 : screenWidth * 0.24,
            },
          ]}
        >
          <View
            style={[
              styles.innerContainerForLongProfileTitle,
              {
                width: props.isMuted ? screenWidth * 0.412 : screenWidth * 0.5,
              },
            ]}
          >
            <View style={{ width: textWidth * 1.45 }}>
              <NameAnimation
                primaryTitle={props.primaryTitle}
                textWidth={textWidth}
                style={props.style}
              />
            </View>
          </View>
          {props.isMuted && <MutedIcon style={styles.mutedIcon} />}
        </View>
      )}

      {/* if text is short */}
      {textWidth <= screenWidth * (props.isMuted ? 0.45 : 0.484) && (
        <View style={styles.containerForProfiteTitleShortVersion}>
          <Text numberOfLines={1} style={props.style}>
            {props.primaryTitle}
          </Text>
          {props.isMuted && <MutedIcon style={styles.mutedIcon} />}
        </View>
      )}
    </>
  );
};

export default React.memo(Name);
