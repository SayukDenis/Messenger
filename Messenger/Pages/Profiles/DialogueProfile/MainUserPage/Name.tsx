// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect, useRef } from "react";
import { View, Animated, Dimensions, Text } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles";
import MutedIcon from "./Icons/MutedIcon.tsx";

interface UsernameProps {
  primaryTitle: string;
  isMuted?: boolean;
}

const Name: React.FC<UsernameProps> = (props) => {
  const [textWidth, setTextWidth] = useState(0);
  const screenWidth = Dimensions.get("screen").width;

  // Animation of running text
  const Animate = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isFirstAnimation, setIsFirstAnimation] = useState(true);

    useEffect(() => {
      const PushTextToLeft = () => {
        setTimeout(() => {
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 20 * textWidth,
            useNativeDriver: false,
          }).start(() => {
            setIsFirstAnimation(false);
            TeleportText();
          });
        }, 2000);
      };

      const PushTextToCenter = () => {
        Animated.timing(animatedValue, {
          toValue: 0.5,
          duration: 20 * textWidth,
          useNativeDriver: false,
        }).start(() => {
          PushTextToLeft();
        });
      };

      const TeleportText = () => {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start(() => {
          PushTextToCenter();
        });
      };

      PushTextToLeft();
    }, [animatedValue]);

    const marginLeftFirstCycle = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [
        0,
        -screenWidth * 0.0015 * textWidth,
        -screenWidth * 0.003 * textWidth,
      ],
    });

    const marginLeft = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [
        screenWidth * 0.003 * textWidth,
        0,
        -screenWidth * 0.003 * textWidth,
      ],
    });

    return (
      <Animated.View
        style={{
          transform: [
            {
              translateX: isFirstAnimation ? marginLeftFirstCycle : marginLeft,
            },
          ],
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
            <View style={{ width: textWidth * 1.3 }}>
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
