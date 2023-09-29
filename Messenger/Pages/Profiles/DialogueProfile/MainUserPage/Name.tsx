// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect, useRef } from "react";
import { View, Animated, Dimensions, Text } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles";
import MutedIcon from "./Icons/MutedIcon.tsx";

interface UsernameProps {
  primaryTitle: string;
  isMuted: boolean;
}

const Name: React.FC<UsernameProps> = (props) => {
  const [textWidth, setTextWidth] = useState(0);
  const screenWidth = Dimensions.get("screen").width;

  // Animation of running text
  const Animate = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      const animateText = () => {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 35 * textWidth,
          useNativeDriver: false,
        }).start(() => {
          teleportText();
        });
      };

      const teleportText = () => {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start(() => {
          animateText();
        });
      };

      animateText();
    }, [animatedValue]);

    const marginLeft = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [
        Dimensions.get("screen").width * 0.004 * textWidth,
        0,
        -Dimensions.get("screen").width * 0.004 * textWidth,
      ],
    });

    return (
      <Animated.View
        style={{
          transform: [{ translateX: marginLeft }],
        }}
      >
        <JacquesFrancoisText
          numberOfLines={1}
          text={props.primaryTitle}
          style={styles.profileTitle}
        />
      </Animated.View>
    );
  };

  return (
    <>
      <View style={{ position: "absolute", opacity: 0 }}>
        <Text
          style={styles.profileTitle}
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
              width: props.isMuted ? screenWidth * 0.5 : screenWidth * 0.6,
              right: props.isMuted ? screenWidth * 0.3 : screenWidth * 0.25,
            },
          ]}
        >
          <View
            style={{
              width: props.isMuted ? screenWidth * 0.5 : screenWidth * 0.6,
              overflow: "hidden",
              borderBottomWidth: 0.2,
              borderRadius: 2,
            }}
          >
            <View style={{ width: textWidth * 1.1 }}>
              <Animate />
            </View>
          </View>
          {props.isMuted && <MutedIcon style={styles.mutedIcon} />}
        </View>
      )}

      {/* if text is short */}
      {textWidth <= screenWidth * (props.isMuted ? 0.45 : 0.484) && (
        <View style={styles.containerForProfiteTitleShortVersion}>
          <JacquesFrancoisText
            numberOfLines={1}
            text={props.primaryTitle}
            style={styles.profileTitle}
          />
          {props.isMuted && <MutedIcon style={styles.mutedIcon} />}
        </View>
      )}
    </>
  );
};

export default Name;
