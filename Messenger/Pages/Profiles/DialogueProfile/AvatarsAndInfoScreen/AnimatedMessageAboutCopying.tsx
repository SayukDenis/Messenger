// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect, useRef } from "react";
import { View, Animated, Easing, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import CopyIcon from "../MainUserScreen/Icons/CopyIcon";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

interface AnimatedMessageAboutCopyingProps {
  isVisible: boolean;
  onEnd: () => void;
  text: string;
}

const AnimatedMessageAboutCopying: React.FC<
  AnimatedMessageAboutCopyingProps
> = (props) => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    if (!isAnimationRunning) {
      setIsAnimationRunning(true);

      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setTimeout(() => {
          setIsAnimationRunning(false);
          props.onEnd();
        }, 800);
      });
    }
  };

  const resetAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (props.isVisible) {
      startAnimation();
    } else {
      resetAnimation();
    }
  }, [props.isVisible]);

  const margin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight, 0.93 * screenHeight],
  });

  return (
    <>
      <Animated.View
        style={{
          transform: [
            {
              translateY: margin,
            },
          ],
          position: "absolute",
        }}
      >
        <View style={styles.containerForAnimatedMessage}>
          <CopyIcon style={styles.copyIcon} />
          <Text style={styles.animatedMessageText}>{props.text}</Text>
        </View>
      </Animated.View>
    </>
  );
};

export default AnimatedMessageAboutCopying;
